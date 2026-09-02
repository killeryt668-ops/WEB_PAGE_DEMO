/**
 * CRIMSON ROAST & CO. - INTERACTIVE JAVASCRIPT ENGINE
 * Handles Live Modern Brew Lab, Wikipedia Knowledge Encyclopedia, Cart Drawer,
 * Table Reservation Zone Showcase, Artisan Tasting Flights, Roast Simulator,
 * Web Audio Cafe Soundscape, and 100% Mobile Ergonomics.
 */

// --- WIKIPEDIA KNOWLEDGE ENCYCLOPEDIA MAPPING ---
const WIKIPEDIA_MAP = {
  // Coffee Origins & Single Origins
  'Ethiopia Yirgacheffe': 'https://en.wikipedia.org/wiki/Yirgacheffe_coffee',
  'Colombia Huila': 'https://en.wikipedia.org/wiki/Coffee_production_in_Colombia',
  'Guatemala Antigua': 'https://en.wikipedia.org/wiki/Coffee_production_in_Guatemala',
  'Sumatra Mandheling': 'https://en.wikipedia.org/wiki/Coffee_production_in_Indonesia',
  'Kenya AA': 'https://en.wikipedia.org/wiki/Coffee_production_in_Kenya',
  'Panama Geisha': 'https://en.wikipedia.org/wiki/Geisha_(coffee)',
  'Uji, Kyoto': 'https://en.wikipedia.org/wiki/Uji,_Kyoto',
  'French Normandy Butter': 'https://en.wikipedia.org/wiki/Beurre_d%27Isigny',
  '70% Valrhona Dark Cocoa': 'https://en.wikipedia.org/wiki/Valrhona',
  'House Crimson Blend': 'https://en.wikipedia.org/wiki/Coffee_blend',

  // Beverages & Brewing Styles
  'Signature Double Espresso': 'https://en.wikipedia.org/wiki/Espresso',
  'Espresso': 'https://en.wikipedia.org/wiki/Espresso',
  'Velvet Barista Latte': 'https://en.wikipedia.org/wiki/Latte',
  'Latte': 'https://en.wikipedia.org/wiki/Latte',
  'Nitro Amber Cold Brew': 'https://en.wikipedia.org/wiki/Nitro_cold_brew',
  'Cold Brew': 'https://en.wikipedia.org/wiki/Cold_brew_coffee',
  'Ceremonial Matcha Latte': 'https://en.wikipedia.org/wiki/Matcha',
  'Matcha': 'https://en.wikipedia.org/wiki/Matcha',
  'Iced Caramel Macchiato': 'https://en.wikipedia.org/wiki/Caff%C3%A8_macchiato',
  'Macchiato': 'https://en.wikipedia.org/wiki/Caff%C3%A8_macchiato',
  'Artisan Chemex Pour Over': 'https://en.wikipedia.org/wiki/Chemex_Coffeemaker',
  'Pour Over': 'https://en.wikipedia.org/wiki/Coffeemaker#Drip_brew',
  'Chemex': 'https://en.wikipedia.org/wiki/Chemex_Coffeemaker',
  'Artisan Butter Croissant': 'https://en.wikipedia.org/wiki/Croissant',
  'Croissant': 'https://en.wikipedia.org/wiki/Croissant',
  'Belgian Dark Mocha Tart': 'https://en.wikipedia.org/wiki/Caff%C3%A8_mocha',
  'Mocha': 'https://en.wikipedia.org/wiki/Caff%C3%A8_mocha',

  // Ingredients & Culinary Elements
  'Crema': 'https://en.wikipedia.org/wiki/Caff%C3%A8_crema',
  'Crema Rich': 'https://en.wikipedia.org/wiki/Caff%C3%A8_crema',
  'Tiger Crema': 'https://en.wikipedia.org/wiki/Caff%C3%A8_crema',
  'Golden Crema': 'https://en.wikipedia.org/wiki/Caff%C3%A8_crema',
  'Microfoam': 'https://en.wikipedia.org/wiki/Microfoam',
  'Silky Microfoam': 'https://en.wikipedia.org/wiki/Microfoam',
  'Vanilla': 'https://en.wikipedia.org/wiki/Vanilla',
  'Madagascar Vanilla': 'https://en.wikipedia.org/wiki/Vanilla',
  'Bourbon Vanilla': 'https://en.wikipedia.org/wiki/Vanilla',
  'Caramel': 'https://en.wikipedia.org/wiki/Caramel',
  'Artisan Caramel': 'https://en.wikipedia.org/wiki/Caramel',
  'Salted Butter Caramel': 'https://en.wikipedia.org/wiki/Caramel',
  'Caramelized Honey': 'https://en.wikipedia.org/wiki/Honey',
  'Cinnamon': 'https://en.wikipedia.org/wiki/Cinnamon',
  'Cinnamon Dust': 'https://en.wikipedia.org/wiki/Cinnamon',
  'Dark Cocoa': 'https://en.wikipedia.org/wiki/Cocoa_solids',
  'Floral Berry': 'https://en.wikipedia.org/wiki/Berry',
  'Wild Berry': 'https://en.wikipedia.org/wiki/Berry',
  'Wild Crimson Raspberry': 'https://en.wikipedia.org/wiki/Raspberry',
  'Raspberry': 'https://en.wikipedia.org/wiki/Raspberry',
  'Hazelnut': 'https://en.wikipedia.org/wiki/Hazelnut',
  'Roasted Hazelnut': 'https://en.wikipedia.org/wiki/Hazelnut',
  'Toasted Hazelnut': 'https://en.wikipedia.org/wiki/Hazelnut',
  'Praline': 'https://en.wikipedia.org/wiki/Praline',
  'Praline Crunch': 'https://en.wikipedia.org/wiki/Praline',
  'Fresh Mint': 'https://en.wikipedia.org/wiki/Spearmint',
  'Jasmine': 'https://en.wikipedia.org/wiki/Jasmine',
  'Jasmine Floral': 'https://en.wikipedia.org/wiki/Jasmine',
  'Bergamot': 'https://en.wikipedia.org/wiki/Bergamot_orange',
  'Bergamot Notes': 'https://en.wikipedia.org/wiki/Bergamot_orange',
  'Oat Milk': 'https://en.wikipedia.org/wiki/Oat_milk',
  'Silky Oat Milk': 'https://en.wikipedia.org/wiki/Oat_milk',
  'Almond Milk': 'https://en.wikipedia.org/wiki/Almond_milk',
  'Almond Breeze': 'https://en.wikipedia.org/wiki/Almond_milk',
  'Whole Milk': 'https://en.wikipedia.org/wiki/Milk',
  'Organic Milk': 'https://en.wikipedia.org/wiki/Milk',
  'Ganache': 'https://en.wikipedia.org/wiki/Ganache',
  'Cascading Head': 'https://en.wikipedia.org/wiki/Nitro_cold_brew',
  'Ultra Smooth': 'https://en.wikipedia.org/wiki/Cold_brew_coffee',
  'Low Acidity': 'https://en.wikipedia.org/wiki/Cold_brew_coffee',
  'Authentic Jade': 'https://en.wikipedia.org/wiki/Matcha',
  'Umami Sweet': 'https://en.wikipedia.org/wiki/Umami',
  'Layered Perfection': 'https://en.wikipedia.org/wiki/Caff%C3%A8_macchiato',
  'Flaky 72-Layers': 'https://en.wikipedia.org/wiki/Laminated_dough',
  'Golden Crust': 'https://en.wikipedia.org/wiki/Baking',
  'Powdered Dusting': 'https://en.wikipedia.org/wiki/Powdered_sugar',
  'Rich Ganache': 'https://en.wikipedia.org/wiki/Ganache',
  'Crystal Clean': 'https://en.wikipedia.org/wiki/Chemex_Coffeemaker',
  'Coffee Roasting': 'https://en.wikipedia.org/wiki/Coffee_roasting'
};

function getWikipediaUrl(term) {
  if (!term) return 'https://en.wikipedia.org/wiki/Coffee';
  const clean = term.trim();
  if (WIKIPEDIA_MAP[clean]) return WIKIPEDIA_MAP[clean];
  for (const [key, url] of Object.entries(WIKIPEDIA_MAP)) {
    if (clean.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(clean.toLowerCase())) {
      return url;
    }
  }
  return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(clean)}`;
}

// --- PRODUCT CATALOG ---
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Signature Double Espresso',
    category: 'hot',
    price: 4.50,
    rating: 4.9,
    reviews: 142,
    origin: 'Ethiopia Yirgacheffe & Colombia Huila',
    roast: 'Dark Obsidian',
    caffeine: '150mg',
    calories: '5 kcal',
    tags: ['Crema Rich', 'Floral Berry', 'Dark Cocoa'],
    desc: 'Extracted under 9 bars of pressure yielding a thick, hazelnut-hued crema with tiger striping and notes of bittersweet chocolate and wild berry.',
    image: 'assets/images/hero_artisan_espresso.jpg',
    colorBadge: '#d4a373'
  },
  {
    id: 'prod-2',
    name: 'Velvet Barista Latte',
    category: 'hot',
    price: 5.75,
    rating: 4.8,
    reviews: 98,
    origin: 'Guatemala Antigua Single Origin',
    roast: 'Medium Roast',
    caffeine: '130mg',
    calories: '160 kcal',
    tags: ['Silky Microfoam', 'Caramelized Honey', 'Cinnamon'],
    desc: 'Velvety micro-foamed organic whole milk poured expertly over a double ristretto shot, creating balanced sweetness and exquisite rosetta latte art.',
    image: 'assets/images/caramel_velvet_latte.jpg',
    colorBadge: '#c68b59'
  },
  {
    id: 'prod-3',
    name: 'Nitro Amber Cold Brew',
    category: 'cold',
    price: 6.25,
    rating: 5.0,
    reviews: 210,
    origin: 'Sumatra Mandheling & Kenya AA',
    roast: 'Dark Roast (20h Steep)',
    caffeine: '210mg',
    calories: '10 kcal',
    tags: ['Cascading Head', 'Ultra Smooth', 'Low Acidity'],
    desc: 'Steeped for 20 hours in pure cold spring water and infused with food-grade nitrogen for a creamy, stout-like head and naturally sweet cocoa finish.',
    image: 'assets/images/nitro_cold_brew.jpg',
    colorBadge: '#432818'
  },
  {
    id: 'prod-4',
    name: 'Ceremonial Matcha Latte',
    category: 'specialty',
    price: 6.50,
    rating: 4.9,
    reviews: 84,
    origin: 'Uji, Kyoto (First Harvest)',
    roast: 'Stone Milled Green',
    caffeine: '70mg',
    calories: '120 kcal',
    tags: ['Authentic Jade', 'Umami Sweet', 'Oat Milk'],
    desc: 'Ceremonial grade Japanese Uji matcha whisked traditionally and layered over lightly sweetened chilled oat milk with a pillowy cloud top.',
    image: 'assets/images/ceremonial_matcha_latte.jpg',
    colorBadge: '#4f772d'
  },
  {
    id: 'prod-5',
    name: 'Iced Caramel Macchiato',
    category: 'cold',
    price: 6.20,
    rating: 4.9,
    reviews: 176,
    origin: 'House Crimson Blend',
    roast: 'Medium-Dark',
    caffeine: '150mg',
    calories: '220 kcal',
    tags: ['Layered Perfection', 'Artisan Caramel', 'Madagascar Vanilla'],
    desc: 'Chilled sweet vanilla bean milk over crystal ice cubes, crowned with freshly pulled espresso shots and a hand-spun golden caramel web drizzle.',
    image: 'assets/images/iced_caramel_macchiato.jpg',
    colorBadge: '#b05c1d'
  },
  {
    id: 'prod-6',
    name: 'Artisan Butter Croissant',
    category: 'bakery',
    price: 4.25,
    rating: 4.9,
    reviews: 115,
    origin: 'French Normandy Butter',
    roast: 'Fresh Daily Bake',
    caffeine: '0mg',
    calories: '280 kcal',
    tags: ['Flaky 72-Layers', 'Golden Crust', 'Powdered Dusting'],
    desc: 'Handmade traditional French pastry with 72 laminated butter layers, baked to a deep golden crisp with an airy, honeycombed interior.',
    image: 'assets/images/artisan_golden_croissant.jpg',
    colorBadge: '#dda15e'
  },
  {
    id: 'prod-7',
    name: 'Belgian Dark Mocha Tart',
    category: 'bakery',
    price: 5.50,
    rating: 4.8,
    reviews: 93,
    origin: '70% Valrhona Dark Cocoa',
    roast: 'Patisserie Special',
    caffeine: '25mg',
    calories: '340 kcal',
    tags: ['Rich Ganache', 'Praline Crunch', 'Fresh Mint'],
    desc: 'Crisp chocolate sablé crust filled with silky 70% dark chocolate espresso ganache, toasted hazelnut praline, and a sprig of fresh garden mint.',
    image: 'assets/images/belgian_mocha_pastry.jpg',
    colorBadge: '#38220f'
  },
  {
    id: 'prod-8',
    name: 'Artisan Chemex Pour Over',
    category: 'hot',
    price: 5.25,
    rating: 5.0,
    reviews: 67,
    origin: 'Panama Geisha Specialty Lot',
    roast: 'Light Cinnamon Roast',
    caffeine: '180mg',
    calories: '2 kcal',
    tags: ['Jasmine Floral', 'Bergamot Notes', 'Crystal Clean'],
    desc: 'Hand-poured at 93°C through natural unbleached fibers to highlight delicate high-elevation jasmine florals, peach sweetness, and tea-like clarity.',
    image: 'assets/images/hero_artisan_espresso.jpg',
    colorBadge: '#8b5a2b'
  }
];

// --- APP STATE ---
const state = {
  cart: [],
  activeCategory: 'all',
  searchQuery: '',
  audioPlaying: false,
  audioContext: null,
  activeHeroIndex: 0,
  promoDiscountPercent: 0,
  promoCodeApplied: null,
  selectedZone: 'window',
  brewLab: {
    base: 'espresso',
    milk: 'oat',
    syrup: 'vanilla',
    topping: 'crema',
    temp: 'hot',
    basePrice: 4.50
  }
};

// --- DOM ELEMENTS ---
const elements = {
  productsGrid: document.getElementById('products-grid'),
  categoryTabs: document.querySelectorAll('.category-tab'),
  searchInput: document.getElementById('search-input'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartOverlay: document.getElementById('cart-overlay'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartCountBadges: document.querySelectorAll('.cart-badge'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTax: document.getElementById('cart-tax'),
  cartTotal: document.getElementById('cart-total'),
  cartShippingMsg: document.getElementById('cart-shipping-msg'),
  cartShippingProgress: document.getElementById('cart-shipping-progress'),
  audioToggleBtn: document.getElementById('audio-toggle-btn'),
  quickViewModal: document.getElementById('quick-view-modal'),
  modalOverlay: document.getElementById('modal-overlay'),
  toastContainer: document.getElementById('toast-container'),
  promoForm: document.getElementById('promo-form'),
  tableReserveForm: document.getElementById('table-reserve-form'),
  newsletterForm: document.getElementById('newsletter-form'),
  roastRange: document.getElementById('roast-range'),
  roastTempDisplay: document.getElementById('roast-temp-display'),
  roastLevelTitle: document.getElementById('roast-level-title'),
  roastNotesText: document.getElementById('roast-notes-text'),
  roastBeanVisual: document.getElementById('roast-bean-visual'),
  mobileNavDrawer: document.getElementById('mobile-nav-drawer'),
  mobileMenuOverlay: document.getElementById('mobile-menu-overlay')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  initAmbientCanvas();
  setupBrewLabInteractions();
  setupRoastSimulator();
  setupHeroDrinkSwitcher();
  setupTableReservation();
  setupTastingFlights();
  setupScrollSpy();
});

// --- RENDER PRODUCT GRID WITH DIRECT WIKIPEDIA LINKS ---
function renderProducts() {
  if (!elements.productsGrid) return;

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No artisanal creations found matching "${state.searchQuery}"</p>
        <button class="btn btn-secondary" onclick="resetSearch()" style="margin-top: 1rem;">View All Menu Items</button>
      </div>
    `;
    return;
  }

  elements.productsGrid.innerHTML = filtered.map((item, idx) => {
    const originParts = item.origin.split('&').map(s => s.trim());
    const originLinks = originParts.map(part => `
      <a href="${getWikipediaUrl(part)}" target="_blank" rel="noopener noreferrer" class="wiki-origin-link" title="Learn about ${part} on Wikipedia">
        ${part} <span class="wiki-inline-icon">↗</span>
      </a>
    `).join(' & ');

    return `
      <article class="product-card" data-id="${item.id}" style="animation-delay: ${idx * 0.08}s;">
        <div class="product-img-holder">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <a href="${getWikipediaUrl('Coffee Roasting')}" target="_blank" rel="noopener noreferrer" class="product-badge" style="border-left: 3px solid ${item.colorBadge}; text-decoration:none;" title="Learn about roasting profiles on Wikipedia">
            ${item.roast} ↗
          </a>
          <button class="product-quick-btn" onclick="openQuickView('${item.id}')" title="Quick View & Ingredients">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
        <div class="product-details">
          <div class="product-meta">
            <span class="product-origin">${originLinks}</span>
            <span class="product-rating">★ ${item.rating} <span style="color:var(--text-muted);font-size:0.75rem;">(${item.reviews})</span></span>
          </div>
          <h3 class="product-name">
            <a href="${getWikipediaUrl(item.name)}" target="_blank" rel="noopener noreferrer" class="wiki-title-link" title="Learn about ${item.name} on Wikipedia">
              ${item.name}
            </a>
          </h3>
          <p class="product-desc">${item.desc}</p>
          <div class="product-tags">
            ${item.tags.map(tag => `
              <a href="${getWikipediaUrl(tag)}" target="_blank" rel="noopener noreferrer" class="tag-pill wiki-tag" title="Click to view '${tag}' on Wikipedia">
                ${tag} <span class="wiki-arrow">↗</span>
              </a>
            `).join('')}
          </div>
          <div class="product-footer">
            <span class="product-price">$${item.price.toFixed(2)}</span>
            <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- CART STATE MANAGEMENT ---
window.addToCart = function (productId, customItem = null) {
  let itemToAdd;
  if (customItem) {
    itemToAdd = { ...customItem };
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      details: product.origin
    };
  }

  const existingIndex = state.cart.findIndex(i => i.id === itemToAdd.id && i.details === itemToAdd.details);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({ ...itemToAdd, qty: 1 });
  }

  updateCartUI();
  triggerBadgePop();
  showToast(`Added "${itemToAdd.name}" to your order.`);
};

window.updateQty = function (id, delta, details = '') {
  const index = state.cart.findIndex(i => i.id === id && i.details === details);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartUI();
};

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  elements.cartCountBadges.forEach(b => b.textContent = totalCount);

  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:1rem; color:var(--crimson-light);"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <p style="font-weight:600; color:var(--text-primary); margin-bottom:0.3rem;">Your basket is empty</p>
        <p style="font-size:0.85rem;">Discover our freshly roasted artisan brews and pastries.</p>
      </div>
    `;
    elements.cartSubtotal.textContent = '$0.00';
    elements.cartTax.textContent = '$0.00';
    elements.cartTotal.textContent = '$0.00';
    if (elements.cartShippingProgress) elements.cartShippingProgress.style.width = '0%';
    if (elements.cartShippingMsg) elements.cartShippingMsg.textContent = 'Add $35.00 more for complimentary priority delivery!';
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = subtotal * (state.promoDiscountPercent / 100);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const tax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + tax;

  elements.cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div style="font-size:0.75rem; color:var(--crema-gold); margin-bottom:0.25rem;">${item.details || ''}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" onclick="updateQty('${item.id}', -1, '${item.details || ''}')">-</button>
        <span style="font-size:0.85rem; font-weight:700; width:18px; text-align:center;">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty('${item.id}', 1, '${item.details || ''}')">+</button>
      </div>
    </div>
  `).join('');

  let summaryHtml = `
    <div class="cart-summary-line">
      <span>Subtotal</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
  `;

  if (state.promoDiscountPercent > 0) {
    summaryHtml += `
      <div class="cart-summary-line discount-line">
        <span>Promo Discount (${state.promoDiscountPercent}%)</span>
        <span>-$${discountAmount.toFixed(2)}</span>
      </div>
    `;
  }

  summaryHtml += `
    <div class="cart-summary-line">
      <span>Estimated Tax (8%)</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="cart-total-line">
      <span>Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;

  const footerLineContainer = document.querySelector('.cart-footer-summary');
  if (footerLineContainer) {
    footerLineContainer.innerHTML = summaryHtml;
  } else {
    elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    elements.cartTax.textContent = `$${tax.toFixed(2)}`;
    elements.cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  // Free shipping bar ($35 threshold)
  const freeShipThreshold = 35.00;
  const diff = freeShipThreshold - discountedSubtotal;
  const progressPercent = Math.min(100, (discountedSubtotal / freeShipThreshold) * 100);

  if (elements.cartShippingProgress) {
    elements.cartShippingProgress.style.width = `${progressPercent}%`;
  }
  if (elements.cartShippingMsg) {
    if (diff <= 0) {
      elements.cartShippingMsg.innerHTML = `<span style="color:var(--success); font-weight:700;">✓ You unlocked FREE Priority Courier Delivery!</span>`;
    } else {
      elements.cartShippingMsg.textContent = `Add $${diff.toFixed(2)} more for complimentary priority delivery!`;
    }
  }
}

function triggerBadgePop() {
  elements.cartCountBadges.forEach(b => {
    b.classList.remove('pop');
    void b.offsetWidth;
    b.classList.add('pop');
    setTimeout(() => b.classList.remove('pop'), 400);
  });
}

// --- MOBILE NAV DRAWER OPEN / CLOSE ---
window.toggleMobileMenu = function (open) {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!drawer || !overlay) return;
  if (open) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
};

// --- CART DRAWER OPEN / CLOSE ---
window.toggleCart = function (open) {
  if (open) {
    elements.cartDrawer.classList.add('open');
    elements.cartOverlay.classList.add('open');
  } else {
    elements.cartDrawer.classList.remove('open');
    elements.cartOverlay.classList.remove('open');
  }
};

window.checkoutOrder = function () {
  if (state.cart.length === 0) {
    showToast('Your basket is empty. Add drinks first!');
    return;
  }
  toggleCart(false);
  triggerConfetti();
  showToast('Order confirmed! Barista is handcrafting your brew.');
  state.cart = [];
  updateCartUI();
};

// --- QUICK VIEW MODAL WITH WIKIPEDIA EXPLORER ---
window.openQuickView = function (productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const modalBody = document.getElementById('modal-quick-view-content');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-holder">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="modal-details-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <span class="sub-heading" style="margin:0;">
            Origin: <a href="${getWikipediaUrl(item.origin)}" target="_blank" rel="noopener noreferrer" class="wiki-modal-link" style="color:var(--crema-gold); text-decoration:underline;">${item.origin} ↗</a>
          </span>
          <button class="modal-close-btn" onclick="closeQuickView()">&times;</button>
        </div>
        <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">
          <a href="${getWikipediaUrl(item.name)}" target="_blank" rel="noopener noreferrer" style="color:var(--text-pure); text-decoration:none;" title="Learn about ${item.name} on Wikipedia">
            ${item.name} <span class="wiki-badge-pill">📖 Wikipedia</span>
          </a>
        </h2>
        <p style="color:var(--text-secondary); font-size:0.92rem; margin-bottom:1.25rem;">${item.desc}</p>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.25rem; background:rgba(0,0,0,0.3); padding:1rem; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.06);">
          <div>
            <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Roast Profile</span>
            <div style="font-weight:700; color:var(--crema-gold); font-size:0.9rem;">
              <a href="${getWikipediaUrl('Coffee Roasting')}" target="_blank" rel="noopener noreferrer" style="color:var(--crema-gold); text-decoration:none;">${item.roast} ↗</a>
            </div>
          </div>
          <div>
            <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Caffeine / Cal</span>
            <div style="font-weight:700; color:var(--crema-gold); font-size:0.9rem;">
              <a href="https://en.wikipedia.org/wiki/Caffeine" target="_blank" rel="noopener noreferrer" style="color:var(--crema-gold); text-decoration:none;">${item.caffeine}</a> • ${item.calories}
            </div>
          </div>
        </div>

        <div style="margin-bottom:0.5rem; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px;">Click ingredient to open Wikipedia guide:</div>
        <div style="display:flex; gap:0.4rem; margin-bottom:1.75rem; flex-wrap:wrap;">
          ${item.tags.map(t => `
            <a href="${getWikipediaUrl(t)}" target="_blank" rel="noopener noreferrer" class="tag-pill wiki-tag" style="font-size:0.8rem; padding:0.3rem 0.75rem;" title="Explore ${t} on Wikipedia">
              ${t} <span class="wiki-arrow">↗</span>
            </a>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.08);">
          <div>
            <span style="font-size:0.75rem; color:var(--text-muted);">PRICE</span>
            <div style="font-family:var(--font-heading); font-size:1.6rem; font-weight:800; color:var(--crimson-light);">$${item.price.toFixed(2)}</div>
          </div>
          <button class="btn btn-primary" onclick="addToCart('${item.id}'); closeQuickView();">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  `;

  elements.quickViewModal.classList.add('open');
  elements.modalOverlay.classList.add('open');
};

window.closeQuickView = function () {
  elements.quickViewModal.classList.remove('open');
  elements.modalOverlay.classList.remove('open');
};

// --- ULTRA-MODERN ARTISAN BREW LAB WORKSTATION ENGINE ---
function setupBrewLabInteractions() {
  const baseChips = document.querySelectorAll('[data-lab-base]');
  const milkChips = document.querySelectorAll('[data-lab-milk]');
  const syrupChips = document.querySelectorAll('[data-lab-syrup]');
  const toppingChips = document.querySelectorAll('[data-lab-topping]');
  const tempChips = document.querySelectorAll('[data-lab-temp]');

  const cupLayerBase = document.getElementById('cup-layer-base');
  const cupLayerMilk = document.getElementById('cup-layer-milk');
  const cupLayerSyrup = document.getElementById('cup-layer-syrup');
  const cupLayerFoam = document.getElementById('cup-layer-foam');
  const iceGroup = document.getElementById('ice-cubes-group');
  const steamGroup = document.getElementById('steam-lab-group');
  const customDrinkPrice = document.getElementById('custom-drink-price');
  const customDrinkTitle = document.getElementById('custom-drink-title');
  const customDrinkTags = document.getElementById('custom-drink-tags');

  // Sensory Radar Meters
  const meterBody = document.getElementById('meter-body');
  const meterSweetness = document.getElementById('meter-sweetness');
  const meterAcidity = document.getElementById('meter-acidity');
  const meterCaffeine = document.getElementById('meter-caffeine');
  const meterCalories = document.getElementById('meter-calories');

  // Base options mapping with sensory profile and Wikipedia links
  const baseMap = {
    espresso: { name: 'Signature Double Espresso', color: '#240f06', price: 4.50, height: '42%', acidity: 35, body: 90, sweetness: 35, caffeine: 150, calories: 5, wiki: 'https://en.wikipedia.org/wiki/Espresso' },
    coldbrew: { name: 'Nitro Amber Cold Brew', color: '#160803', price: 5.00, height: '52%', acidity: 15, body: 80, sweetness: 50, caffeine: 210, calories: 10, wiki: 'https://en.wikipedia.org/wiki/Nitro_cold_brew' },
    matcha: { name: 'Ceremonial Uji Matcha', color: '#3d611e', price: 5.25, height: '42%', acidity: 20, body: 65, sweetness: 45, caffeine: 70, calories: 35, wiki: 'https://en.wikipedia.org/wiki/Matcha' },
    blonde: { name: 'Blonde Cinnamon Roast', color: '#6f4e37', price: 4.75, height: '40%', acidity: 85, body: 45, sweetness: 65, caffeine: 180, calories: 2, wiki: 'https://en.wikipedia.org/wiki/Coffeemaker#Drip_brew' }
  };

  // Milk options mapping
  const milkMap = {
    oat: { name: 'Silky Oat Milk', color: '#f3e8d6', height: '32%', price: 0.75, calories: 120, sweetness: 25, body: 20, wiki: 'https://en.wikipedia.org/wiki/Oat_milk' },
    almond: { name: 'Almond Breeze Milk', color: '#f7f1e5', height: '28%', price: 0.75, calories: 60, sweetness: 15, body: 10, wiki: 'https://en.wikipedia.org/wiki/Almond_milk' },
    whole: { name: 'Organic Whole Milk', color: '#ffffff', height: '34%', price: 0.50, calories: 150, sweetness: 20, body: 25, wiki: 'https://en.wikipedia.org/wiki/Milk' },
    none: { name: 'Pure Black (Zero Milk)', color: 'transparent', height: '0%', price: 0.00, calories: 0, sweetness: 0, body: 0, wiki: 'https://en.wikipedia.org/wiki/Black_coffee' }
  };

  // Syrup options mapping
  const syrupMap = {
    vanilla: { name: 'Madagascar Vanilla', color: '#d4a373', price: 0.60, height: '14%', calories: 50, sweetness: 40, wiki: 'https://en.wikipedia.org/wiki/Vanilla' },
    caramel: { name: 'Salted Butter Caramel', color: '#a0522d', price: 0.75, height: '16%', calories: 65, sweetness: 50, wiki: 'https://en.wikipedia.org/wiki/Caramel' },
    berry: { name: 'Wild Crimson Raspberry', color: '#9b1d20', price: 0.85, height: '14%', calories: 55, sweetness: 45, wiki: 'https://en.wikipedia.org/wiki/Raspberry' },
    hazelnut: { name: 'Toasted Hazelnut', color: '#6e473b', price: 0.65, height: '15%', calories: 60, sweetness: 35, wiki: 'https://en.wikipedia.org/wiki/Hazelnut' },
    none: { name: 'Unsweetened Pure', color: 'transparent', price: 0.00, height: '0%', calories: 0, sweetness: 0, wiki: 'https://en.wikipedia.org/wiki/Coffee' }
  };

  function updateCupVisuals() {
    const baseInfo = baseMap[state.brewLab.base];
    const milkInfo = milkMap[state.brewLab.milk];
    const syrupInfo = syrupMap[state.brewLab.syrup];
    const isIced = state.brewLab.temp === 'iced';

    if (cupLayerBase) {
      cupLayerBase.style.backgroundColor = baseInfo.color;
      cupLayerBase.style.height = baseInfo.height;
    }
    if (cupLayerMilk) {
      cupLayerMilk.style.backgroundColor = milkInfo.color;
      cupLayerMilk.style.height = milkInfo.height;
    }
    if (cupLayerSyrup) {
      cupLayerSyrup.style.backgroundColor = syrupInfo.color;
      cupLayerSyrup.style.height = syrupInfo.height;
    }
    if (iceGroup) {
      if (isIced) iceGroup.classList.add('active');
      else iceGroup.classList.remove('active');
    }
    if (steamGroup) {
      if (!isIced) steamGroup.classList.add('active');
      else steamGroup.classList.remove('active');
    }

    const totalCustomPrice = baseInfo.price + milkInfo.price + syrupInfo.price;
    const totalCalories = baseInfo.calories + milkInfo.calories + syrupInfo.calories;
    const totalBody = Math.min(100, baseInfo.body + milkInfo.body);
    const totalSweetness = Math.min(100, baseInfo.sweetness + milkInfo.sweetness + syrupInfo.sweetness);
    const totalAcidity = isIced ? Math.max(10, baseInfo.acidity - 15) : baseInfo.acidity;

    if (customDrinkPrice) customDrinkPrice.textContent = `$${totalCustomPrice.toFixed(2)}`;
    if (customDrinkTitle) {
      customDrinkTitle.textContent = `${isIced ? 'Iced ' : 'Hot '}${syrupInfo.name !== 'Unsweetened Pure' ? syrupInfo.name.split(' ')[0] + ' ' : ''}${baseInfo.name.replace('Signature ', '').replace('Ceremonial ', '')}`;
    }
    if (customDrinkTags) {
      customDrinkTags.innerHTML = `
        <a href="${milkInfo.wiki}" target="_blank" rel="noopener noreferrer" class="wiki-lab-link">${milkInfo.name} ↗</a> • 
        <span>${state.brewLab.topping.toUpperCase()} TOPPING</span>
      `;
    }

    // Update Sensory Profile Meters
    if (meterBody) meterBody.style.width = `${totalBody}%`;
    if (meterSweetness) meterSweetness.style.width = `${totalSweetness}%`;
    if (meterAcidity) meterAcidity.style.width = `${totalAcidity}%`;
    if (meterCaffeine) meterCaffeine.textContent = `${baseInfo.caffeine}mg`;
    if (meterCalories) meterCalories.textContent = `~${totalCalories} kcal`;
  }

  function handleChipSelection(chips, groupKey) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.brewLab[groupKey] = chip.dataset[`lab${groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}`];
        updateCupVisuals();
      });
    });
  }

  handleChipSelection(baseChips, 'base');
  handleChipSelection(milkChips, 'milk');
  handleChipSelection(syrupChips, 'syrup');
  handleChipSelection(toppingChips, 'topping');
  handleChipSelection(tempChips, 'temp');

  const addCustomBtn = document.getElementById('add-custom-brew-btn');
  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', () => {
      const baseInfo = baseMap[state.brewLab.base];
      const milkInfo = milkMap[state.brewLab.milk];
      const syrupInfo = syrupMap[state.brewLab.syrup];
      const isIced = state.brewLab.temp === 'iced';
      const price = baseInfo.price + milkInfo.price + syrupInfo.price;

      const customProduct = {
        id: `custom-${Date.now()}`,
        name: `${isIced ? 'Iced ' : 'Crafted '}${baseInfo.name.replace('Signature ', '')}`,
        price: price,
        image: state.brewLab.base === 'matcha'
          ? 'assets/images/ceremonial_matcha_latte.jpg'
          : (isIced
            ? 'assets/images/iced_caramel_macchiato.jpg'
            : 'assets/images/hero_artisan_espresso.jpg'),
        details: `${milkInfo.name} + ${syrupInfo.name}`
      };

      addToCart(customProduct.id, customProduct);
    });
  }

  updateCupVisuals();
}

// --- ROAST TEMPERATURE SIMULATOR ---
function setupRoastSimulator() {
  if (!elements.roastRange) return;

  const caramelMetric = document.getElementById('roast-caramel-metric');
  const originMetric = document.getElementById('roast-origin-metric');

  const roastProfiles = [
    { temp: '195°C', title: 'Light Cinnamon Roast', notes: 'Bright citric acidity, floral jasmine, subtle bergamot, tea-like clarity.', color: '#8b5a2b', beanBg: '#b07d4b', caramel: 'Light (62%)', origin: 'Max Preservation (98%)' },
    { temp: '205°C', title: 'Medium City Roast', notes: 'Balanced stone fruit sweetness, toasted almond, honeyed caramel aroma.', color: '#6f4e37', beanBg: '#8c5932', caramel: 'Balanced (80%)', origin: 'High Balance (88%)' },
    { temp: '218°C', title: 'Vienna Medium-Dark Roast', notes: 'Velvety body, caramelized molasses, dark baker’s cocoa, low acidity.', color: '#432818', beanBg: '#593218', caramel: 'Optimal (94%)', origin: 'Peak Balance (75%)' },
    { temp: '230°C', title: 'Dark Crimson Roast', notes: 'Bold bittersweet dark chocolate, smoky spice, dense rich crema extraction.', color: '#240f06', beanBg: '#2e1408', caramel: 'Full Roast (99%)', origin: 'Deep Roasted (58%)' }
  ];

  elements.roastRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    const index = Math.min(3, Math.floor(val / 25));
    const profile = roastProfiles[index];

    if (elements.roastTempDisplay) elements.roastTempDisplay.textContent = profile.temp;
    if (elements.roastLevelTitle) elements.roastLevelTitle.textContent = profile.title;
    if (elements.roastNotesText) elements.roastNotesText.textContent = profile.notes;
    if (caramelMetric) caramelMetric.textContent = profile.caramel;
    if (originMetric) originMetric.textContent = profile.origin;
    if (elements.roastBeanVisual) {
      elements.roastBeanVisual.style.background = `radial-gradient(circle, ${profile.beanBg} 0%, ${profile.color} 100%)`;
      elements.roastBeanVisual.style.transform = `scale(${1 + val * 0.0015})`;
    }
  });
}

// --- HERO DRINK SPOTLIGHT SWITCHER ---
function setupHeroDrinkSwitcher() {
  const pills = document.querySelectorAll('.drink-pill-btn');
  const heroImg = document.getElementById('hero-main-img');
  const heroTitle = document.getElementById('hero-drink-name');
  const heroPrice = document.getElementById('hero-drink-price-val');
  const heroNotes = document.getElementById('hero-drink-notes');

  const heroSpotlights = [
    {
      name: 'Double Artisan Espresso',
      price: '$4.50',
      notes: ['Tiger Crema', 'Wild Berry', 'Dark Cocoa'],
      image: 'assets/images/hero_artisan_espresso.jpg'
    },
    {
      name: 'Velvet Barista Latte',
      price: '$5.75',
      notes: ['Microfoam Rosetta', 'Organic Milk', 'Cinnamon Dust'],
      image: 'assets/images/caramel_velvet_latte.jpg'
    },
    {
      name: 'Nitro Amber Cold Brew',
      price: '$6.25',
      notes: ['Cascading Head', '20h Steep', 'Zero Bitterness'],
      image: 'assets/images/nitro_cold_brew.jpg'
    },
    {
      name: 'Ceremonial Matcha Latte',
      price: '$6.50',
      notes: ['Uji Kyoto Harvest', 'Silky Oat Milk', 'Pure Jade'],
      image: 'assets/images/ceremonial_matcha_latte.jpg'
    }
  ];

  pills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const data = heroSpotlights[idx];
      if (!data) return;

      if (heroImg) {
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = data.image;
          heroImg.style.opacity = '1';
        }, 200);
      }
      if (heroTitle) heroTitle.textContent = data.name;
      if (heroPrice) heroPrice.textContent = data.price;
      if (heroNotes) {
        heroNotes.innerHTML = data.notes.map(n => `
          <a href="${getWikipediaUrl(n)}" target="_blank" rel="noopener noreferrer" class="wiki-tag" title="Learn about ${n} on Wikipedia">
            ${n} ↗
          </a>
        `).join('');
      }
    });
  });
}

// --- TABLE RESERVATION & LUXURY ZONE SELECTOR ---
function setupTableReservation() {
  const zonePills = document.querySelectorAll('.seat-pill');
  const zoneTitle = document.getElementById('zone-status-title');
  const zoneDesc = document.getElementById('zone-status-desc');
  const zoneBadge = document.getElementById('zone-status-badge');

  const zoneData = {
    window: {
      title: 'Window Sunshine Booth',
      desc: 'Bathed in soft natural sunlight overlooking the tree-lined street. Ideal for morning espresso, conversation, and reading.',
      badge: 'Available Now (4 Booths)'
    },
    bar: {
      title: 'Barista Tasting Counter',
      desc: 'Front-row view of our La Marzocco espresso machines, pour-over drips, and live barista craftsmanship with complimentary cupping tastes.',
      badge: 'High Energy • 6 Stools'
    },
    patio: {
      title: 'Patio Garden Nook',
      desc: 'Fresh open-air botanical garden setting with lush ferns, ambient heaters, and acoustic background soundscapes.',
      badge: 'Open Air • 5 Tables'
    },
    vip: {
      title: 'Velvet VIP Lounge',
      desc: 'Intimate semi-private plush leather booths equipped with charging outlets, dedicated sommelier service, and dim ambient glow.',
      badge: 'Exclusive • 2 Suites'
    }
  };

  zonePills.forEach(pill => {
    pill.addEventListener('click', () => {
      zonePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const zoneKey = pill.dataset.zone || 'window';
      state.selectedZone = zoneKey;

      const data = zoneData[zoneKey];
      if (data && zoneTitle && zoneDesc) {
        zoneTitle.textContent = data.title;
        zoneDesc.textContent = data.desc;
        if (zoneBadge) zoneBadge.textContent = data.badge;
      }
    });
  });
}

// --- ARTISAN CUPPING FLIGHTS & MASTERCLASSES ---
function setupTastingFlights() {
  const flightCards = document.querySelectorAll('.flight-action-btn');
  flightCards.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const flightName = e.target.dataset.flight || 'Single Origin Tasting Flight';
      triggerConfetti();
      showToast(`🎟️ Reserved spot for "${flightName}"! Confirmation email dispatched.`);
    });
  });
}

// --- WEB AUDIO API "ORDINARY" BY ALEX WARREN (ACOUSTIC PIANO AMBIENCE) ---
let musicInterval = null;
let activeAudioNodes = [];
let trackTimerInterval = null;
let trackElapsedSeconds = 0;

function setupAudioAmbiance() {
  if (!elements.audioToggleBtn) return;

  elements.audioToggleBtn.addEventListener('click', () => {
    if (!state.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      state.audioContext = new AudioCtx();
    }

    if (state.audioPlaying) {
      stopCafeMusic();
      state.audioPlaying = false;
      elements.audioToggleBtn.classList.remove('playing');
      syncAmbienceLoungeUI(false);
      showToast('"Ordinary" (Alex Warren) paused.');
    } else {
      if (state.audioContext.state === 'suspended') {
        state.audioContext.resume();
      }
      startCafeMusic(state.audioContext);
      state.audioPlaying = true;
      elements.audioToggleBtn.classList.add('playing');
      syncAmbienceLoungeUI(true);
      showToast('🎵 Now Playing: "Ordinary" by Alex Warren (Acoustic Piano Ambience)');
    }
  });
}

function syncAmbienceLoungeUI(isPlaying) {
  const vinylDisc = document.getElementById('vinyl-disc');
  const tonearm = document.getElementById('tonearm');
  const statusText = document.getElementById('player-status-text');
  const playIcon = document.getElementById('lounge-play-icon');
  const eqDisplay = document.querySelector('.player-equalizer-display');
  const timeDisplay = document.getElementById('eq-time-current');

  if (isPlaying) {
    if (vinylDisc) vinylDisc.classList.add('playing');
    if (tonearm) tonearm.classList.add('playing');
    if (eqDisplay) eqDisplay.classList.add('playing');
    if (statusText) statusText.textContent = 'Now Playing • Alex Warren';
    if (playIcon) {
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    }
    if (!trackTimerInterval) {
      trackTimerInterval = setInterval(() => {
        trackElapsedSeconds = (trackElapsedSeconds + 1) % 215; // 3:35 duration
        const mins = Math.floor(trackElapsedSeconds / 60);
        const secs = trackElapsedSeconds % 60;
        if (timeDisplay) {
          timeDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
      }, 1000);
    }
  } else {
    if (vinylDisc) vinylDisc.classList.remove('playing');
    if (tonearm) tonearm.classList.remove('playing');
    if (eqDisplay) eqDisplay.classList.remove('playing');
    if (statusText) statusText.textContent = 'Paused • Alex Warren';
    if (playIcon) {
      playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
    if (trackTimerInterval) {
      clearInterval(trackTimerInterval);
      trackTimerInterval = null;
    }
  }
}

function stopCafeMusic() {
  if (musicInterval) {
    clearInterval(musicInterval);
    musicInterval = null;
  }
  if (trackTimerInterval) {
    clearInterval(trackTimerInterval);
    trackTimerInterval = null;
  }
  activeAudioNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (err) { }
  });
  activeAudioNodes = [];
}

function startCafeMusic(ctx) {
  stopCafeMusic();

  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.22, ctx.currentTime);
  masterGain.connect(ctx.destination);
  activeAudioNodes.push(masterGain);

  // 1. Vinyl Warmth & Ambient Cafe Room Sound Layer
  const bufferSize = ctx.sampleRate * 2;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    const crackle = Math.random() < 0.002 ? (Math.random() * 2 - 1) * 0.3 : 0;
    data[i] = ((Math.random() * 2 - 1) * 0.02) + crackle;
  }
  const vinylSource = ctx.createBufferSource();
  vinylSource.buffer = noiseBuffer;
  vinylSource.loop = true;

  const vinylFilter = ctx.createBiquadFilter();
  vinylFilter.type = 'lowpass';
  vinylFilter.frequency.value = 520;

  vinylSource.connect(vinylFilter);
  vinylFilter.connect(masterGain);
  vinylSource.start();
  activeAudioNodes.push(vinylSource);

  // 2. Alex Warren - "Ordinary" Iconic Acoustic Piano Ballad Chords & Melody (Key of D Major / Bm / G / A)
  const alexWarrenOrdinary = [
    { name: 'D Major', bass: 73.42, notes: [146.83, 185.00, 220.00, 293.66, 369.99], lead: [369.99, 329.63, 293.66, 369.99] }, // F#4, E4, D4, F#4
    { name: 'A/C#', bass: 69.30, notes: [138.59, 164.81, 220.00, 277.18, 329.63], lead: [329.63, 293.66, 277.18, 293.66] }, // E4, D4, C#4, D4
    { name: 'B Minor 7', bass: 61.74, notes: [123.47, 146.83, 185.00, 220.00, 293.66], lead: [293.66, 329.63, 369.99, 440.00] }, // D4, E4, F#4, A4
    { name: 'G Major add9', bass: 49.00, notes: [98.00, 146.83, 196.00, 246.94, 293.66], lead: [369.99, 329.63, 293.66, 246.94] }, // F#4, E4, D4, B3
    { name: 'D Major (Hook)', bass: 73.42, notes: [146.83, 220.00, 293.66, 369.99, 440.00], lead: [440.00, 369.99, 329.63, 293.66] }, // A4, F#4, E4, D4 ("I don't wanna be ordinary")
    { name: 'A Major', bass: 55.00, notes: [110.00, 164.81, 220.00, 277.18, 329.63], lead: [329.63, 369.99, 329.63, 293.66] }, // E4, F#4, E4, D4
    { name: 'G Major', bass: 49.00, notes: [98.00, 146.83, 196.00, 246.94, 293.66], lead: [246.94, 293.66, 329.63, 293.66] }, // B3, D4, E4, D4
    { name: 'Asus4 -> A', bass: 55.00, notes: [110.00, 146.83, 220.00, 293.66, 329.63], lead: [293.66, 277.18, 293.66, 369.99] }  // D4, C#4, D4, F#4
  ];

  let chordIndex = 0;
  const chordDuration = 3.5; // ~72 BPM soulful acoustic ballad tempo

  function playChord(chord, startTime) {
    // Warm Acoustic Piano Hammer & Resonance
    chord.notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      osc2.frequency.setValueAtTime(freq * 1.0015, startTime); // Natural acoustic piano detune

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, startTime);
      filter.frequency.exponentialRampToValueAtTime(340, startTime + chordDuration);

      const noteVelocity = 0.10 / (idx + 1);
      const noteDelay = startTime + idx * 0.045;
      gain.gain.setValueAtTime(0.0001, noteDelay);
      gain.gain.exponentialRampToValueAtTime(noteVelocity, noteDelay + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + chordDuration - 0.12);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(startTime);
      osc2.start(startTime);
      osc.stop(startTime + chordDuration);
      osc2.stop(startTime + chordDuration);
    });

    // Warm Low-End Upright Bass Note
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    const bassFilter = ctx.createBiquadFilter();

    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(chord.bass, startTime);

    bassFilter.type = 'lowpass';
    bassFilter.frequency.value = 180;

    bassGain.gain.setValueAtTime(0.001, startTime);
    bassGain.gain.linearRampToValueAtTime(0.25, startTime + 0.05);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, startTime + chordDuration - 0.2);

    bassOsc.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(masterGain);

    bassOsc.start(startTime);
    bassOsc.stop(startTime + chordDuration);

    // Alex Warren "Ordinary" Signature Melody Notes
    if (chord.lead) {
      chord.lead.forEach((mFreq, mIdx) => {
        const mTime = startTime + 0.75 + (mIdx * 0.70);
        const mOsc = ctx.createOscillator();
        const mGain = ctx.createGain();
        const mFilter = ctx.createBiquadFilter();

        mOsc.type = 'sine';
        mOsc.frequency.setValueAtTime(mFreq, mTime);

        mFilter.type = 'lowpass';
        mFilter.frequency.value = 1400;

        mGain.gain.setValueAtTime(0.0001, mTime);
        mGain.gain.exponentialRampToValueAtTime(0.065, mTime + 0.025);
        mGain.gain.exponentialRampToValueAtTime(0.0001, mTime + 0.95);

        mOsc.connect(mFilter);
        mFilter.connect(mGain);
        mGain.connect(masterGain);

        mOsc.start(mTime);
        mOsc.stop(mTime + 1.0);
      });
    }
  }

  playChord(alexWarrenOrdinary[0], ctx.currentTime + 0.05);

  musicInterval = setInterval(() => {
    if (!state.audioPlaying) return;
    chordIndex = (chordIndex + 1) % alexWarrenOrdinary.length;
    playChord(alexWarrenOrdinary[chordIndex], ctx.currentTime + 0.05);
  }, chordDuration * 1000);
}

// --- ACTIVE SCROLL SPY FOR DYNAMIC NAV UNDERLINE ---
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 180;
    let activeId = 'hero';

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = id;
      }
    });

    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // Smooth scroll click handler
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          allNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          toggleMobileMenu(false);
        }
      }
    });
  });
}

// --- AMBIENT CANVAS PARTICLES (CRIMSON AROMA MOTES) ---
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -Math.random() * 0.5 - 0.2,
    alpha: Math.random() * 0.4 + 0.1,
    color: Math.random() > 0.6 ? '#ef233c' : '#f4a261'
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- CONFETTI BURST SIMULATION ---
function triggerConfetti() {
  const count = 40;
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.top = '50%';
    confetti.style.left = '50%';
    confetti.style.width = `${Math.random() * 8 + 6}px`;
    confetti.style.height = `${Math.random() * 8 + 6}px`;
    confetti.style.backgroundColor = ['#d90429', '#ef233c', '#f4a261', '#faedcd', '#ffffff'][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '2px';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    confetti.style.transition = 'all 1s cubic-bezier(0.25, 1, 0.5, 1)';
    document.body.appendChild(confetti);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 250 + 100;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity;

    requestAnimationFrame(() => {
      confetti.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${Math.random() * 720}deg) scale(0)`;
      confetti.style.opacity = '0';
    });

    setTimeout(() => confetti.remove(), 1100);
  }
}

// --- TOAST FEEDBACK ---
function showToast(message) {
  if (!elements.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color:var(--crimson-light); font-size:1.1rem;">☕</span>
    <span>${message}</span>
  `;
  elements.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
  // Category tabs
  elements.categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Search input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // Audio Ambience
  setupAudioAmbiance();

  // Reservation Form
  if (elements.tableReserveForm) {
    elements.tableReserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      triggerConfetti();
      showToast('Table reserved successfully! A confirmation SMS and email have been dispatched.');
      elements.tableReserveForm.reset();
    });
  }

  // Promo Code Form
  if (elements.promoForm) {
    elements.promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const codeInput = document.getElementById('promo-code-input');
      const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
      if (code === 'CRIMSON10') {
        state.promoDiscountPercent = 10;
        state.promoCodeApplied = 'CRIMSON10';
        updateCartUI();
        triggerConfetti();
        showToast('🎉 Promo code applied! 10% discount subtracted from your total.');
      } else {
        showToast('Invalid promo code. Try "CRIMSON10" for 10% off.');
      }
    });
  }

  // Newsletter Form
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      triggerConfetti();
      showToast('Welcome to the Crimson Roastery Newsletter! Check your inbox for your 15% perk.');
      elements.newsletterForm.reset();
    });
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => toggleMobileMenu(true));
  }
}

window.resetSearch = function () {
  state.searchQuery = '';
  state.activeCategory = 'all';
  if (elements.searchInput) elements.searchInput.value = '';
  elements.categoryTabs.forEach(t => {
    if (t.dataset.category === 'all') t.classList.add('active');
    else t.classList.remove('active');
  });
  renderProducts();
};
