/* ============================================================
   WD Cafe — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeNav() {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  function openNav() {
    navLinks.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }
  toggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) closeNav();
    else openNav();
  });
  // Close after clicking a link (mobile)
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeNav();
  });
  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* ---------- Menu category tabs ---------- */
  var tabs = document.querySelectorAll('.menu-tab');
  var cards = document.querySelectorAll('.menu-card');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var cat = tab.getAttribute('data-cat');
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        card.classList.toggle('is-hidden', card.getAttribute('data-cat') !== cat);
      });
    });
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Reservation form validation ---------- */
  var form = document.getElementById('reserveForm');
  var success = document.getElementById('formSuccess');

  function setError(input, message) {
    var err = form.querySelector('.error[data-for="' + input.id + '"]');
    if (err) err.textContent = message || '';
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validateField(input) {
    var value = input.value.trim();
    if (input.required && !value) {
      setError(input, 'This field is required.');
      return false;
    }
    if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(input, 'Please enter a valid email address.');
      return false;
    }
    setError(input, '');
    return true;
  }

  // Validate on blur (not on every keystroke)
  ['name', 'email'].forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener('blur', function () { validateField(input); });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') validateField(input);
    });
  });

  // Reservation requests are emailed directly via FormSubmit (formsubmit.co).
  // Change the destination inbox here:
  var RESERVATION_EMAIL = 'rysarsuelo2@gmail.com';

  var errorBox = document.getElementById('formError');

  function buildMailto(name, email, date, guests) {
    var subject = 'Table Reservation Request — ' + name;
    var body =
      'Hi WD Cafe,\n\nI would like to reserve a table.\n\n' +
      'Name: ' + name + '\nEmail: ' + email + '\nDate: ' + date +
      '\nGuests: ' + guests + '\n\nThank you!';
    return 'mailto:' + RESERVATION_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  }

  function setHidden(el, hidden) { if (el) el.hidden = hidden; }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var ok = validateField(nameInput) & validateField(emailInput);

    if (!ok) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var date = document.getElementById('date').value || 'To be arranged';
    var guests = document.getElementById('guests').value;
    var btn = document.getElementById('reserveBtn');
    var done = false;

    function finish(sent) {
      if (done) return;
      done = true;
      if (btn) { btn.disabled = false; btn.textContent = 'Request Reservation'; }
      if (sent) {
        form.reset();
        setHidden(success, false);
        setHidden(errorBox, true);
      } else {
        setHidden(success, true);
        if (errorBox) {
          setHidden(errorBox, false);
        } else {
          // No error box on this page version: open a pre-filled email instead
          window.location.href = buildMailto(name, email, date, guests);
          setHidden(success, false);
        }
      }
    }

    try {
      // Browsers without fetch: open a pre-filled email instead
      if (!window.fetch) {
        window.location.href = buildMailto(name, email, date, guests);
        setHidden(success, false);
        return;
      }

      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      setHidden(success, true);
      setHidden(errorBox, true);

      // Never leave the button stuck: give up after 15s
      var timer = setTimeout(function () { finish(false); }, 15000);

      fetch('https://formsubmit.co/ajax/' + RESERVATION_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Table Reservation Request — ' + name,
          _template: 'table',
          _captcha: 'false',
          Name: name,
          Email: email,
          Date: date,
          Guests: guests
        })
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      }).then(function () {
        clearTimeout(timer);
        finish(true);
      }).catch(function () {
        clearTimeout(timer);
        finish(false);
      });
    } catch (err) {
      finish(false);
    }
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
