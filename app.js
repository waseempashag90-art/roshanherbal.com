/**
 * Roshan Herbal - Main Application JavaScript
 * Powered by pure vanilla JS with responsive state management
 */

// Phone and store info
const STORE_INFO = {
  name: 'Roshan Herbal',
  tagline: "Nature's Power, Trusted Wellness",
  phone: '+92 336 3916555',
  whatsappRaw: '923363916555',
  address: 'New City Phase 2, Wah Cantt, Pakistan',
  shippingFee: 199,
  freeShippingThreshold: 1800
};

// Products Catalog
const PRODUCTS = [
  {
    id: 'hair-relaxation-oil',
    name: 'Hair & Relaxation Oil',
    nameUrdu: 'ہیئر اینڈ ریلیکسیشن آئل',
    subtitle: 'Strong Hair, Calm Sleep',
    subtitleUrdu: 'مضبوط، گھنے بال اور پرسکون گہری نیند',
    price: 549,
    originalPrice: 699,
    volume: '100 ML',
    rating: 4.9,
    reviewsCount: 142,
    category: 'hair',
    badge: 'Bestseller',
    badgeColor: 'bg-emerald-600',
    image: 'product1-hair-oil.jpg',
    detailImage: 'product1-hair-oil-detail.jpg',
    hasDetailFlyer: true,
    batchNo: 'RH-2026-55',
    mfgDate: '15 Nov 2026',
    expDate: '14 Nov 2029',
    description: 'A premium therapeutic herbal blend specially formulated to stop hair fall, eliminate dandruff, and melt away daily tension to induce deep, restful sleep.',
    descriptionUrdu: 'قدرتی جڑی بوٹیوں اور روغنیات کا شاہکار مرکب جو نہ صرف بالوں کو جڑوں سے مضبوط اور گھنا کرتا ہے بلکہ دماغی تناؤ اور بے خوابی کو ختم کر کے پرسکون نیند لاتا ہے۔',
    benefits: [
      'Makes hair stronger & healthier from root to tip',
      'Significantly reduces hair fall & stubborn dandruff',
      'Helps in calm & restful deep sleep naturally',
      'Reduces mental stress, fatigue & headaches',
      'Nourishes dry scalp and revives dormant hair follicles'
    ],
    benefitsUrdu: [
      'بالوں کو گرنے سے روکے اور نئے بال اگانے میں معاون',
      'خشکی، سکری اور خارش کا مکمل خاتمہ',
      'دماغی تھکاوٹ دور کر کے پرسکون اور گہری نیند لائے',
      'سر کی جلد کو قدرتی وٹامنز اور نمی فراہم کرے'
    ],
    ingredients: [
      { name: 'Coconut Oil', urdu: 'ناریل کا خالص تیل', desc: 'Deep hydration & root conditioning' },
      { name: 'Methi Dana', urdu: 'میتھی دانہ', desc: 'Rich in protein & nicotinic acid for hair strength' },
      { name: 'Kalonji', urdu: 'کلونجی (Kalvongi)', desc: 'Antioxidant powerhouse for follicular regeneration' },
      { name: 'Amla', urdu: 'آملہ', desc: 'Abundant in Vitamin C for dark, thick hair' },
      { name: 'Castor Oil', urdu: 'ارنڈ کا تیل', desc: 'Promotes rapid thickness and density' },
      { name: 'Lavender', urdu: 'خالص لیوینڈر', desc: 'Aromatherapy essence for sleep & stress relief' },
      { name: 'Rosemary', urdu: 'روز میری', desc: 'Clinically proven herbal booster for scalp circulation' },
      { name: 'Vitamin E', urdu: 'وٹامن ای', desc: 'Cellular protection against premature breakage' }
    ],
    howToApply: 'Massage gently on scalp & hair roots before bedtime or as needed. For optimal benefits, leave overnight and wash with mild herbal shampoo.',
    howToApplyUrdu: 'رات سوتے وقت چند قطرے سر کی جلد پر ڈالیں اور انگلیوں کے پوروں سے 5 سے 10 منٹ ہلکا مساج کریں۔ صبح کسی اچھے شیمپو سے دھو لیں۔',
    caution: 'For external use only. Keep away from children. Avoid contact with eyes.'
  },
  {
    id: 'body-massage-oil',
    name: 'Body Massage Oil',
    nameUrdu: 'باڈی مساج آئل',
    subtitle: 'Natural Warmth, Lasting Comfort',
    subtitleUrdu: 'قدرتی گرمائش اور جوڑوں و پٹھوں کا دائمی آرام',
    price: 399,
    originalPrice: 499,
    volume: '100 ML',
    rating: 4.8,
    reviewsCount: 118,
    category: 'body',
    badge: 'Popular',
    badgeColor: 'bg-amber-600',
    image: 'product2-body-oil.jpg',
    detailImage: 'product2-body-oil-detail.jpg',
    hasDetailFlyer: true,
    batchNo: 'RH-2026-55',
    mfgDate: '15 Nov 2026',
    expDate: '14 Nov 2029',
    description: 'An ancient Unani warming formula blended with therapeutic herbs to penetrate deep into sore joints, stiff muscles, and weary nerves.',
    descriptionUrdu: 'قدیم دیسی و یونانی حکمت پر مبنی گرم تاثیر والا مساج آئل جو جوڑوں، پٹھوں کے درد، کمر درد اور کھچاؤ میں فوری سکون دیتا ہے۔',
    benefits: [
      'Relieves muscle pain, joint aches and body stiffness',
      'Reduces physical exhaustion, stress & daily fatigue',
      'Provides comforting natural therapeutic warmth',
      'Keeps your whole body relaxed, refreshed & supple',
      'Improves micro-circulation in strained limbs'
    ],
    benefitsUrdu: [
      'پٹھوں، کمر اور گھٹنوں کے درد سے فوری نجات',
      'دن بھر کی جسمانی مشقت کے بعد تھکاوٹ دور کرے',
      'جسم میں خون کی روانی کو بحال اور چست رکھے',
      'سردیوں کی ٹھنڈ اور اکڑن میں قدرتی گرمائش فراہم کرے'
    ],
    ingredients: [
      { name: 'Til Oil (Sesame)', urdu: 'تِل کا تیل', desc: 'Deep penetrating carrier rich in zinc and calcium' },
      { name: 'Mustard Oil', urdu: 'خالص سرسوں کا تیل', desc: 'Stimulates circulation and produces natural heat' },
      { name: 'Loung (Clove)', urdu: 'لونگ کا تیل', desc: 'Natural analgesic that numbs pain receptors' },
      { name: 'Dar Cheeni', urdu: 'دار چینی', desc: 'Anti-inflammatory bark that soothes deep aches' },
      { name: 'Tez Pat (Bay Leaf)', urdu: 'تیز پات', desc: 'Eases joint stiffness and muscle knots' },
      { name: 'Methi Dana', urdu: 'میتھی دانہ', desc: 'Alleviates rheumatic and joint inflammation' },
      { name: 'Ajwain', urdu: 'اجوائن دیسی', desc: 'Spasm-relieving herb for cramped muscles' },
      { name: 'Haldi (Turmeric)', urdu: 'خالص ہلدی', desc: 'Curcumin-powered swelling and stiffness reducer' }
    ],
    howToApply: 'Apply a small amount on the affected area and massage gently until fully absorbed. For best relief, keep area warm after massage.',
    howToApplyUrdu: 'متاثرہ حصے پر مناسب مقدار لگا کر ہلکے ہاتھوں سے مالش کریں تاکہ تیل اندر تک جذب ہو جائے۔ مالش کے بعد ہوا سے بچیں۔',
    caution: 'For external use only. Avoid contact with eyes. Keep out of reach of children. Store in a cool & dry place. Do a patch test before first use.'
  },
  {
    id: 'shabab-bahar',
    name: 'Shabab Bahar (شباب بہار)',
    nameUrdu: 'شاہی معجون شباب بہار',
    subtitle: 'Royal Vitality, Natural Power & Stamina',
    subtitleUrdu: 'طاقت، توانائی اور جوانی کا قدرتی احساس - قدرتی جڑی بوٹیوں کا نایاب مرکب',
    price: 399,
    originalPrice: 499,
    volume: '50 Grams',
    rating: 5.0,
    reviewsCount: 189,
    category: 'vitality',
    badge: 'Royal Tonic',
    badgeColor: 'bg-red-700',
    image: 'product3-shabab-bahar.png',
    detailImage: 'product3-shabab-bahar.png',
    hasDetailFlyer: false,
    batchNo: 'RH-2026-55',
    mfgDate: '15 Nov 2026',
    expDate: '14 Nov 2029',
    description: 'A regal herbal tonic prepared with rare Himalayan Shilajit, pure Zafran, Ashwagandha and medicinal herbs for unmatched stamina, vitality, and vigor.',
    descriptionUrdu: 'شاہی یونانی حکمت کا نایاب تحفہ، خالص ہمالیائی سلاجیت، کشمیری زعفران اور قیمتی جڑی بوٹیوں کا بے مثال مرکب جو جسم میں نئی روح اور توانائی بھر دے۔',
    benefits: [
      '100% pure herbal formulation for peak physical stamina & vigor',
      'Combats chronic body weakness, lethargy & nervous exhaustion',
      'Restores youthful strength, daily energy & endurance',
      'Enhances vital energy levels naturally without chemical stimulants',
      'Strengthens immune system and supports general well-being'
    ],
    benefitsUrdu: [
      'مردانہ طاقت، توانائی اور پٹھوں کی مضبوطی میں بے مثال اضافہ',
      'دائمی کمزوری، سستی، کاہلی اور اعصابی تناؤ کا قدرتی حل',
      'خالص ہمالیائی سلاجیت اور کشمیری زعفران کی قدرتی تاثیر',
      'سائیڈ ایفیکٹ سے 100 فیصد پاک، خالص دیسی جڑی بوٹیوں کا نچوڑ'
    ],
    ingredients: [
      { name: 'Pure Himalayan Shilajit', urdu: 'خالص ہمالیائی سلاجیت', desc: 'Over 84 minerals & fulvic acid for supreme stamina' },
      { name: 'Kashmiri Zafran (Saffron)', urdu: 'کشمیری زعفران', desc: 'Mood enhancer and powerful antioxidant royal spice' },
      { name: 'Ashwagandha (Asgandh)', urdu: 'اشوگندھا ناگوری', desc: 'Adaptogen for reducing cortisol and boosting strength' },
      { name: 'Safed Musli', urdu: 'سفید موصلی', desc: 'Ancient herbal restorative for endurance and vitality' },
      { name: 'Khulanjan & Akarkara', urdu: 'خولنجان اور عاقرقرحا', desc: 'Invigorates blood flow and nerve conductivity' },
      { name: 'Maghz Badam & Pista', urdu: 'مغز بادام و پستہ', desc: 'Brain, heart, and muscular nutrition' },
      { name: 'Sidr Honey (Pure)', urdu: 'خالص بیری کا شہد', desc: 'Natural preservative and instant bioavailability catalyst' }
    ],
    howToApply: 'Take half a teaspoon (approx 3-5g) once daily at bedtime with a glass of lukewarm milk.',
    howToApplyUrdu: 'روزانہ رات کو سوتے وقت آدھا چائے کا چمچ (3 سے 5 گرام) ایک گلاس نیم گرم دودھ کے ساتھ استعمال کریں۔',
    caution: 'Store in a cool, dry place away from direct sunlight. Not recommended for pregnant women or children under 18.'
  }
];

// Default Customer Reviews
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Muhammad Usman',
    city: 'Islamabad',
    product: 'Hair & Relaxation Oil',
    rating: 5,
    date: '3 days ago',
    comment: 'MashaAllah bohot behtareen oil hai! Mujhey office ki wajah se sir me dard rehta tha aur neend theek nahi aati thi. 3 din se use kar raha hoon, neend bilkul pur-sukoon aati hai aur hair fall bhi ruk gaya hai. Highly recommended!',
    verified: true
  },
  {
    id: 2,
    name: 'Haji Abdul Rasheed',
    city: 'Wah Cantt',
    product: 'Body Massage Oil',
    rating: 5,
    date: '1 week ago',
    comment: 'Wah Cantt local delivery 2 ghante me mil gayi. Mere ghutno me shadeed dard rehta tha, is oil ki halki si malish se bohot zada aaram mila hai. Herbal fragrance bhi bohot natural hai.',
    verified: true
  },
  {
    id: 3,
    name: 'Tariq Mehmood',
    city: 'Lahore',
    product: 'Shabab Bahar (شباب بہار)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Shabab Bahar waqai shahi cheez hai. Jism me jo din bhar thakawat aur susti rehti thi wo bilkul khatam ho gayi hai. Pure shilajit aur zafran ka zaiqa mehsoos hota hai. 10/10 quality.',
    verified: true
  },
  {
    id: 4,
    name: 'Dr. Samina Khan',
    city: 'Rawalpindi',
    product: 'Hair & Relaxation Oil',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ingredients list dekh kar mangwaya tha - Kalonji, Rosemary, Lavender ka perfect blend hai. Dandruff 4 din me 80% khatam ho chuka hai. Genuine product!',
    verified: true
  }
];

// App State
let cart = (JSON.parse(localStorage.getItem('roshan_herbal_cart')) || []).map(item => ({
  ...item,
  image: item.image ? item.image.split('/').pop() : ''
}));
let reviews = JSON.parse(localStorage.getItem('roshan_herbal_reviews')) || INITIAL_REVIEWS;
let activeModalProduct = null;
let activeModalImageTab = 'bottle';

// Save Cart
function saveCart() {
  localStorage.setItem('roshan_herbal_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

// Update Cart Badge count
function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeElements = document.querySelectorAll('.cart-count-badge');
  badgeElements.forEach(el => {
    el.textContent = count;
    if (count > 0) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  const cartTotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalEls = document.querySelectorAll('.cart-total-badge');
  totalEls.forEach(el => {
    el.textContent = `Rs. ${cartTotalAmount.toLocaleString()}`;
  });
}

// Add Item to Cart
function addToCart(productId, qty = 1, silent = false) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      nameUrdu: product.nameUrdu,
      price: product.price,
      image: product.image,
      volume: product.volume,
      quantity: qty
    });
  }

  saveCart();

  if (!silent) {
    showToast(`"${product.name}" added to cart!`);
    openCartDrawer();
  }
}

// Change Quantity in Cart
function changeCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('Item removed from cart');
}

// Open/Close Cart Drawer
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    drawer.classList.add('translate-x-full');
  }
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const footer = document.getElementById('cartFooter');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const grandTotalEl = document.getElementById('cartGrandTotal');
  const freeShippingBar = document.getElementById('freeShippingProgressBar');
  const freeShippingText = document.getElementById('freeShippingText');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    footer.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  footer.classList.remove('hidden');

  let subtotal = 0;
  let itemsHtml = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    itemsHtml += `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/60 transition hover:border-amber-500/40">
        <img src="${item.image ? item.image.split('/').pop() : ''}" alt="${item.name}" class="w-16 h-16 object-contain rounded-lg bg-black/40 p-1 border border-emerald-800/40" />
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-semibold text-white truncate">${item.name}</h4>
          <p class="text-xs text-amber-400 font-medium">${item.volume} &bull; Rs. ${item.price.toLocaleString()}</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="changeCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-emerald-900/80 hover:bg-emerald-800 text-white flex items-center justify-center text-xs font-bold transition">&minus;</button>
            <span class="text-xs font-bold text-white px-2">${item.quantity}</span>
            <button onclick="changeCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-emerald-900/80 hover:bg-emerald-800 text-white flex items-center justify-center text-xs font-bold transition">&plus;</button>
          </div>
        </div>
        <div class="text-right flex flex-col justify-between items-end h-16">
          <button onclick="removeFromCart('${item.id}')" class="text-gray-400 hover:text-red-400 transition text-sm p-1" title="Remove">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
          <span class="text-xs font-bold text-amber-300">Rs. ${itemTotal.toLocaleString()}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  // Free shipping logic
  const isFreeShipping = subtotal >= STORE_INFO.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_INFO.shippingFee;
  const grandTotal = subtotal + shippingFee;

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (shippingEl) {
    shippingEl.textContent = isFreeShipping ? 'FREE' : `Rs. ${shippingFee}`;
    if (isFreeShipping) {
      shippingEl.className = 'text-sm font-semibold text-emerald-400';
    } else {
      shippingEl.className = 'text-sm font-semibold text-gray-300';
    }
  }
  if (grandTotalEl) grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;

  // Free shipping progress bar
  if (freeShippingBar && freeShippingText) {
    if (isFreeShipping) {
      freeShippingBar.style.width = '100%';
      freeShippingBar.className = 'h-full bg-emerald-400 rounded-full transition-all duration-500';
      freeShippingText.innerHTML = '<span class="text-emerald-400 font-semibold">🎉 Congratulations! You have unlocked FREE Delivery across Pakistan!</span>';
    } else {
      const remaining = STORE_INFO.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / STORE_INFO.freeShippingThreshold) * 100));
      freeShippingBar.style.width = `${pct}%`;
      freeShippingBar.className = 'h-full bg-amber-400 rounded-full transition-all duration-500';
      freeShippingText.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more to get <strong>FREE Delivery</strong>!`;
    }
  }
}

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-amber-400/40 text-sm font-medium transition-all duration-300 transform translate-y-3 opacity-0 ${
    type === 'success' ? 'bg-emerald-950/90 text-white' : 'bg-red-950/90 text-white'
  }`;
  
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-amber-400 animate-ping' : 'bg-red-400'}"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Open Product Detail Modal
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  activeModalImageTab = 'bottle';

  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');

  // Populate data
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalTitleUrdu').textContent = product.nameUrdu;
  document.getElementById('modalSubtitle').textContent = product.subtitle;
  document.getElementById('modalPrice').textContent = `Rs. ${product.price.toLocaleString()}`;
  document.getElementById('modalOriginalPrice').textContent = `Rs. ${product.originalPrice.toLocaleString()}`;
  document.getElementById('modalVolume').textContent = product.volume;
  document.getElementById('modalBatch').textContent = product.batchNo;
  document.getElementById('modalMfg').textContent = product.mfgDate;
  document.getElementById('modalExp').textContent = product.expDate;
  document.getElementById('modalQty').value = 1;

  // Image tab buttons
  const flyerBtn = document.getElementById('modalTabFlyerBtn');
  if (flyerBtn) {
    if (product.hasDetailFlyer) {
      flyerBtn.classList.remove('hidden');
    } else {
      flyerBtn.classList.add('hidden');
    }
  }
  updateModalImage();

  // Populate Description
  document.getElementById('modalDesc').textContent = product.description;
  document.getElementById('modalDescUrdu').textContent = product.descriptionUrdu;

  // Populate Benefits
  const benefitsList = document.getElementById('modalBenefitsList');
  benefitsList.innerHTML = product.benefits.map((b, i) => `
    <li class="flex items-start gap-2 text-sm text-gray-200">
      <span class="text-amber-400 mt-1 font-bold">&#10003;</span>
      <div>
        <p>${b}</p>
        <p class="text-xs text-emerald-400 font-urdu mt-0.5 text-right">${product.benefitsUrdu[i] || ''}</p>
      </div>
    </li>
  `).join('');

  // Populate Ingredients
  const ingredientsList = document.getElementById('modalIngredientsList');
  ingredientsList.innerHTML = product.ingredients.map(ing => `
    <div class="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-900/60 flex justify-between items-center">
      <div>
        <h5 class="text-xs font-bold text-amber-300">${ing.name}</h5>
        <p class="text-[11px] text-gray-300">${ing.desc}</p>
      </div>
      <span class="text-xs font-urdu text-emerald-300 font-semibold px-2 py-0.5 rounded bg-emerald-900/40">${ing.urdu}</span>
    </div>
  `).join('');

  // How to Apply
  document.getElementById('modalHowToApply').textContent = product.howToApply;
  document.getElementById('modalHowToApplyUrdu').textContent = product.howToApplyUrdu;
  document.getElementById('modalCaution').textContent = product.caution;

  // Show Modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  content.classList.remove('scale-95');
  content.classList.add('scale-100');
}

function updateModalImage() {
  if (!activeModalProduct) return;
  const mainImg = document.getElementById('modalMainImage');
  const bottleBtn = document.getElementById('modalTabBottleBtn');
  const flyerBtn = document.getElementById('modalTabFlyerBtn');

  if (activeModalImageTab === 'flyer' && activeModalProduct.hasDetailFlyer) {
    mainImg.src = activeModalProduct.detailImage;
    if (flyerBtn) flyerBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-black shadow-lg';
    if (bottleBtn) bottleBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-950/80 text-gray-300 hover:text-white border border-emerald-800';
  } else {
    mainImg.src = activeModalProduct.image;
    if (bottleBtn) bottleBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-black shadow-lg';
    if (flyerBtn) flyerBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-950/80 text-gray-300 hover:text-white border border-emerald-800';
  }
}

function setModalImageTab(tab) {
  activeModalImageTab = tab;
  updateModalImage();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');
  if (modal && content) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    content.classList.add('scale-95');
    content.classList.remove('scale-100');
  }
}

// Add From Modal
function addActiveProductToCart() {
  if (!activeModalProduct) return;
  const qtyInput = document.getElementById('modalQty');
  const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
  addToCart(activeModalProduct.id, qty);
  closeProductModal();
}

// Order Active Product Directly on WhatsApp
function orderActiveProductWhatsApp() {
  if (!activeModalProduct) return;
  const qtyInput = document.getElementById('modalQty');
  const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
  orderProductDirectWhatsApp(activeModalProduct.id, qty);
}

// Direct WhatsApp order for single product
function orderProductDirectWhatsApp(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const total = product.price * qty;
  const msg = `*Assalam o Alaikum Roshan Herbal!* 🌿
Main aap ka ye product order karna chahta/chahti hoon:

📌 *Product:* ${product.name} (${product.volume})
📌 *Quantity:* ${qty}
📌 *Total Price:* Rs. ${total.toLocaleString()}

*Mera Delivery Address:*
👤 Name: 
📞 Phone: 
📍 City: 
🏠 Complete Address: 

Baraye meherbani mera order confirm farmaiye. Shukriya!`;

  const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Open Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    renderCheckoutSummary();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
  }
}

function renderCheckoutSummary() {
  const summaryEl = document.getElementById('checkoutItemsList');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const shippingEl = document.getElementById('checkoutShipping');
  const grandTotalEl = document.getElementById('checkoutGrandTotal');

  if (!summaryEl) return;

  let subtotal = 0;
  let html = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    html += `
      <div class="flex justify-between items-center text-xs py-1.5 border-b border-emerald-950">
        <span class="text-gray-300">${item.name} &times; ${item.quantity}</span>
        <span class="font-bold text-amber-300">Rs. ${itemTotal.toLocaleString()}</span>
      </div>
    `;
  });

  const isFreeShipping = subtotal >= STORE_INFO.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_INFO.shippingFee;
  const grandTotal = subtotal + shippingFee;

  summaryEl.innerHTML = html;
  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'FREE' : `Rs. ${shippingFee}`;
  if (grandTotalEl) grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;
}

// Process Checkout Form (COD)
function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.customerName.value.trim();
  const phone = form.customerPhone.value.trim();
  const city = form.customerCity.value.trim();
  const address = form.customerAddress.value.trim();
  const notes = form.customerNotes.value.trim();

  if (!name || !phone || !city || !address) {
    showToast('Please fill all required fields!', 'error');
    return;
  }

  let subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const isFreeShipping = subtotal >= STORE_INFO.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_INFO.shippingFee;
  const grandTotal = subtotal + shippingFee;
  const orderId = 'RH-' + Math.floor(100000 + Math.random() * 900000);

  // Store order details in window for receipt/WhatsApp
  window.lastPlacedOrder = {
    orderId,
    name,
    phone,
    city,
    address,
    notes,
    items: [...cart],
    subtotal,
    shippingFee,
    grandTotal,
    date: new Date().toLocaleString()
  };

  // Clear Cart
  cart = [];
  saveCart();
  closeCheckoutModal();

  // Show Order Confirmation
  openOrderSuccessModal(window.lastPlacedOrder);
}

// WhatsApp Checkout from Checkout Form
function checkoutViaWhatsApp() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  const name = form.customerName.value.trim();
  const phone = form.customerPhone.value.trim();
  const city = form.customerCity.value.trim();
  const address = form.customerAddress.value.trim();
  const notes = form.customerNotes.value.trim();

  if (!name || !phone || !city || !address) {
    showToast('Please enter your Name, Phone, City and Address first!', 'error');
    return;
  }

  let subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const isFreeShipping = subtotal >= STORE_INFO.freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : STORE_INFO.shippingFee;
  const grandTotal = subtotal + shippingFee;

  let itemsText = cart.map(i => `▫️ *${i.name}* (${i.volume}) x ${i.quantity} = Rs. ${(i.price * i.quantity).toLocaleString()}`).join('\n');

  const msg = `*Assalam o Alaikum Roshan Herbal!* 🌿
Main new Cash On Delivery order place karna chahta hoon:

🛒 *ORDER DETAILS:*
${itemsText}

💰 *Subtotal:* Rs. ${subtotal.toLocaleString()}
🚚 *Delivery Charges:* ${isFreeShipping ? 'FREE' : 'Rs. ' + shippingFee}
💵 *Grand Total (COD):* Rs. ${grandTotal.toLocaleString()}

👤 *CUSTOMER DETAILS:*
• Name: ${name}
• Phone: ${phone}
• City: ${city}
• Delivery Address: ${address}
${notes ? `• Special Instructions: ${notes}` : ''}

Baraye meherbani order confirm karein aur tracking details share karein. Shukriya!`;

  const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  // Also clear cart and show confirmation
  const orderId = 'RH-' + Math.floor(100000 + Math.random() * 900000);
  window.lastPlacedOrder = {
    orderId,
    name,
    phone,
    city,
    address,
    notes,
    items: [...cart],
    subtotal,
    shippingFee,
    grandTotal,
    date: new Date().toLocaleString()
  };

  cart = [];
  saveCart();
  closeCheckoutModal();
  openOrderSuccessModal(window.lastPlacedOrder);
}

// Success Modal
function openOrderSuccessModal(order) {
  const modal = document.getElementById('orderSuccessModal');
  if (!modal) return;

  document.getElementById('successOrderId').textContent = order.orderId;
  document.getElementById('successCustomerName').textContent = order.name;
  document.getElementById('successCustomerPhone').textContent = order.phone;
  document.getElementById('successCustomerAddress').textContent = `${order.address}, ${order.city}`;
  document.getElementById('successTotal').textContent = `Rs. ${order.grandTotal.toLocaleString()}`;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
}

function closeOrderSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
  }
}

// Send receipt to WhatsApp from confirmation modal
function sendReceiptToWhatsApp() {
  if (!window.lastPlacedOrder) return;
  const o = window.lastPlacedOrder;
  const itemsText = o.items.map(i => `▫️ ${i.name} x ${i.quantity} = Rs. ${(i.price * i.quantity).toLocaleString()}`).join('\n');
  const msg = `*Assalam o Alaikum Roshan Herbal!*
Mera Order ID: *${o.orderId}* hai.
Customer: ${o.name} (${o.phone})
Address: ${o.address}, ${o.city}
Items:
${itemsText}
Total: Rs. ${o.grandTotal.toLocaleString()} (Cash On Delivery)

Kindly verify my order. Thank you!`;

  window.open(`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Render Customer Reviews
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = reviews.map(rev => `
    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border border-emerald-900/60 hover:border-amber-400/40">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-1 text-amber-400">
            ${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}
          </div>
          <span class="text-xs text-gray-400">${rev.date}</span>
        </div>
        <p class="text-sm text-gray-200 leading-relaxed italic mb-4">"${rev.comment}"</p>
      </div>
      <div class="pt-3 border-t border-emerald-950 flex items-center justify-between">
        <div>
          <h4 class="text-sm font-bold text-white flex items-center gap-1">
            ${rev.name}
            ${rev.verified ? '<span class="text-emerald-400 text-xs" title="Verified Buyer">✓</span>' : ''}
          </h4>
          <span class="text-xs text-emerald-400/80">${rev.city}</span>
        </div>
        <span class="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950 text-amber-300 border border-emerald-800 font-medium">
          ${rev.product}
        </span>
      </div>
    </div>
  `).join('');
}

// Handle Add Review
function handleAddReview(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.reviewerName.value.trim();
  const city = form.reviewerCity.value.trim();
  const product = form.reviewerProduct.value;
  const rating = parseInt(form.reviewerRating.value, 10);
  const comment = form.reviewerComment.value.trim();

  if (!name || !city || !comment) {
    showToast('Please fill all review fields', 'error');
    return;
  }

  const newReview = {
    id: Date.now(),
    name,
    city,
    product,
    rating,
    date: 'Just now',
    comment,
    verified: true
  };

  reviews.unshift(newReview);
  localStorage.setItem('roshan_herbal_reviews', JSON.stringify(reviews));
  renderReviews();
  form.reset();
  showToast('Thank you! Your review has been published.');
}

// WhatsApp Widget toggle
function toggleWhatsAppChat() {
  const popup = document.getElementById('whatsappChatPopup');
  if (popup) {
    popup.classList.toggle('hidden');
  }
}

function sendPresetWhatsApp(msg) {
  const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Product Filtering
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  const buttons = document.querySelectorAll('.filter-tab-btn');

  buttons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = 'filter-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-black shadow-lg shadow-amber-500/20';
    } else {
      btn.className = 'filter-tab-btn px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-950/70 text-gray-300 hover:text-white border border-emerald-800/60 transition';
    }
  });

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartDrawer();
  renderReviews();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeCheckoutModal();
      closeOrderSuccessModal();
    }
  });
});
