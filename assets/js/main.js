// ============================================================
// SOLVOLT — Cart + shared utilities
// ============================================================

const Cart = {
  _key: 'solvolt_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
    this._updateBadge();
    window.dispatchEvent(new Event('cartUpdated'));
  },

  add(toode, kogus = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === toode.id);
    if (existing) {
      existing.kogus = Math.min(existing.kogus + kogus, 10);
    } else {
      items.push({
        id: toode.id,
        nimi: toode.nimi,
        hind: toode.hind,
        pilt: toode.pilt,
        kategooria: toode.kategooria,
        stripe_price_id: toode.stripe_price_id,
        kogus
      });
    }
    this.save(items);
    showToast(`✓ Lisatud ostukorvi`);
  },

  remove(id) {
    this.save(this.get().filter(i => i.id !== id));
  },

  updateQty(id, kogus) {
    const items = this.get();
    const item = items.find(i => i.id === id);
    if (item) {
      if (kogus <= 0) return this.remove(id);
      item.kogus = Math.min(kogus, 10);
      this.save(items);
    }
  },

  count() {
    return this.get().reduce((s, i) => s + i.kogus, 0);
  },

  total() {
    return this.get().reduce((s, i) => s + i.hind * i.kogus, 0);
  },

  clear() {
    this.save([]);
  },

  _updateBadge() {
    const el = document.getElementById('cart-count');
    if (el) {
      const c = this.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'inline-flex' : 'none';
    }
  }
};

// ── Toast ──────────────────────────────────────────────────────
function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Format price ──────────────────────────────────────────────
function formatPrice(cents) {
  return new Intl.NumberFormat('et-EE', {
    style: 'currency', currency: 'EUR', minimumFractionDigits: 0
  }).format(cents);
}

// ── Active nav link ───────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path);
  });
}

// ── Mobile nav ────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

// ── Init on every page ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Cart._updateBadge();
  setActiveNav();
  initMobileNav();
});
