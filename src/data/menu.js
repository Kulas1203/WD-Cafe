// ============================================================
// WD Cafe — Menu
// To edit a price/name/description, change it here.
// To add a drink: copy a line and change the fields.
// `img` is a path under /public.
// ============================================================

export const categories = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'noncoffee', label: 'Non-Coffee Drinks' },
  { id: 'snacks', label: 'Snacks' },
]

export const menu = [
  // ---- Coffee ----
  { cat: 'coffee', name: 'Americano', price: '₱69.00', tag: 'Classic', img: 'images/menu/photos/americano.jpg', desc: 'Bold espresso with water — clean, dark, and refreshing over ice.' },
  { cat: 'coffee', name: 'Spanish Latte', price: '₱89.00', tag: 'Bestseller', img: 'images/menu/photos/spanish-latte.jpg', desc: 'Espresso and silky milk sweetened with condensed milk.' },
  { cat: 'coffee', name: 'Caramel Latte', price: '₱89.00', tag: 'Sweet', img: 'images/menu/photos/caramel-latte.jpg', desc: 'Smooth espresso and milk with a swirl of golden caramel.' },
  { cat: 'coffee', name: 'Salted Caramel', price: '₱89.00', tag: 'Signature', img: 'images/menu/photos/salted-caramel.jpg', desc: 'Our caramel latte with a savory twist of salt in every sip.' },
  { cat: 'coffee', name: 'French Vanilla Latte', price: '₱89.00', tag: 'Smooth', img: 'images/menu/photos/french-vanilla.jpg', desc: 'Creamy, vanilla-kissed espresso latte — smooth and comforting.' },
  { cat: 'coffee', name: 'Mocha Latte', price: '₱89.00', tag: 'Classic', img: 'images/menu/photos/mocha-latte.jpg', desc: 'Chocolate and espresso in smooth, cozy harmony.' },
  { cat: 'coffee', name: 'Dirty Matcha', price: '₱89.00', tag: 'Bold', img: 'images/menu/photos/dirty-matcha.jpg', desc: 'Creamy matcha with a bold shot of espresso on top.' },
  { cat: 'coffee', name: 'White Choco Mocha', price: '₱89.00', tag: 'Creamy', img: 'images/menu/photos/white-choco-mocha.jpg', desc: 'Creamy white chocolate meets smooth espresso.' },
  { cat: 'coffee', name: 'Coffee Latte', price: '₱89.00', tag: 'House', img: 'images/menu/photos/coffee-latte.jpg', desc: 'Our smooth, easy-drinking house latte.' },

  // ---- Non-Coffee Drinks ----
  { cat: 'noncoffee', name: 'Matcha Latte', price: '₱90.00', tag: 'Fan favorite', img: 'images/menu/photos/matcha-latte.jpg', desc: 'Earthy green tea whisked into creamy milk over ice.' },
  { cat: 'noncoffee', name: 'Dark Chocolate', price: '₱95.00', tag: 'Indulgent', img: 'images/menu/photos/dark-chocolate.jpg', desc: 'Rich, indulgent dark chocolate blended with fresh milk.' },
  { cat: 'noncoffee', name: 'Strawberry Latte', price: '₱95.00', tag: 'Fruity', img: 'images/menu/photos/strawberry-latte.jpg', desc: 'Sweet strawberry swirled through creamy milk.' },
  { cat: 'noncoffee', name: 'Blueberry Latte', price: '₱95.00', tag: 'Fruity', img: 'images/menu/photos/blueberry-latte.jpg', desc: 'Berry-sweet and creamy — a refreshing take on the latte.' },
  { cat: 'noncoffee', name: 'Ube Latte', price: '₱95.00', tag: 'Must-try', img: 'images/menu/photos/ube-latte.jpg', desc: 'Creamy purple yam latte — a Filipino classic, made with love.' },
  { cat: 'noncoffee', name: "Cookies N' Cream", price: '₱98.00', tag: 'Sweet treat', img: 'images/menu/photos/cookies-n-cream.jpg', desc: 'Crushed cookies blended into cool, creamy milk.' },
  { cat: 'noncoffee', name: 'Choco Berry Bliss', price: '₱99.00', tag: 'Indulgent', img: 'images/menu/photos/choco-berry-bliss.jpg', desc: 'Chocolate and berries in one blissful cup.' },
  { cat: 'noncoffee', name: 'Blueberry Matcha', price: '₱110.00', tag: 'Premium', img: 'images/menu/photos/blueberry-matcha.jpg', desc: 'Earthy matcha layered over sweet blueberry.' },
  { cat: 'noncoffee', name: 'Strawberry Matcha', price: '₱110.00', tag: 'Premium', img: 'images/menu/photos/strawberry-matcha.jpg', desc: 'Strawberry sweetness beneath creamy matcha.' },

  // ---- Snacks ----
  { cat: 'snacks', name: 'Wapi Fries 120g', price: '₱69.00', tag: 'Snack', img: 'images/menu/wapi-fries.svg', desc: 'Golden, crispy, and made for sharing.' },
  { cat: 'snacks', name: 'N.Y Overload', price: '₱70.00', tag: 'Loaded', img: 'images/menu/ny-overload.svg', desc: 'Loaded, New York–style goodness.' },
]
