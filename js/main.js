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

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var ok = validateField(name) & validateField(email);

    if (!ok) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var btn = document.getElementById('reserveBtn');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async submit
    setTimeout(function () {
      form.reset();
      success.hidden = false;
      btn.disabled = false;
      btn.textContent = 'Request Reservation';
      success.focus && success.focus();
    }, 900);
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
