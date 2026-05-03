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

  // WhatsApp ujuv nupp
  (function() {
    var btn = document.createElement('a');
    btn.href = 'https://wa.me/37253928910';
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Kirjuta WhatsAppis');
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L.057 23.25a.75.75 0 00.916.916l5.376-1.478A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-5.004-1.386l-.36-.214-3.732 1.026 1.026-3.732-.214-.36A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>';
    btn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;width:52px;height:52px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.35);transition:transform .2s,box-shadow .2s;text-decoration:none;';
    btn.addEventListener('mouseenter', function() { this.style.transform='scale(1.1)'; this.style.boxShadow='0 6px 22px rgba(0,0,0,.45)'; });
    btn.addEventListener('mouseleave', function() { this.style.transform='scale(1)'; this.style.boxShadow='0 4px 16px rgba(0,0,0,.35)'; });
    document.body.appendChild(btn);
  })();

  // Telefonilingi klikk-konversioon
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag === 'function') gtag('event', 'conversion', { send_to: 'AW-17385949286/WONqCLXYr6YcEOaQouJA', value: 3.0, currency: 'EUR' });
    });
  });

  // Lehevaatamise konversioon
  if (typeof gtag === 'function') gtag('event', 'conversion', { send_to: 'AW-17385949286/WBpmCL3gr6YcEOaQouJA' });
});
