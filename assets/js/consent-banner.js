// Cookie Consent Manager — solvolt.ee
// Implements Google Consent Mode v2 banner in Estonian
(function () {
  var STORAGE_KEY = 'sv_consent';

  function updateConsent(granted) {
    if (typeof gtag === 'function') {
      var state = granted ? 'granted' : 'denied';
      gtag('consent', 'update', {
        ad_storage: state,
        analytics_storage: state,
        ad_user_data: state,
        ad_personalization: state
      });
    }
  }

  function hideBanner(banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 300);
  }

  function showBanner() {
    // Remove existing banner if reopened via settings link
    var existing = document.getElementById('sv-cookie-banner');
    if (existing) existing.parentNode.removeChild(existing);

    var banner = document.createElement('div');
    banner.id = 'sv-cookie-banner';
    banner.innerHTML =
      '<div style="max-width:600px">' +
        '<strong style="display:block;margin-bottom:5px;color:#f0efea;font-size:15px">Küpsised</strong>' +
        '<span style="color:#888480;font-size:13px;line-height:1.5">Kasutame Google Analyticsi ja Google Adsi küpsiseid veebilehe kasutuse analüüsimiseks ning reklaamimõõtmiseks. ' +
        'Teie andmeid jagatakse Google\'iga ainult Teie nõusolekul. ' +
        '<a href="/privaatsuspoliitika.html" style="color:#3dffa0;text-decoration:none">Loe lähemalt</a></span>' +
      '</div>' +
      '<div style="display:flex;gap:8px;flex-shrink:0">' +
        '<button id="sv-cookie-accept" style="background:#3dffa0;color:#000;border:none;padding:9px 20px;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px;white-space:nowrap">Nõustun</button>' +
        '<button id="sv-cookie-decline" style="background:transparent;color:#888480;border:1px solid #2e2e2e;padding:9px 16px;border-radius:6px;cursor:pointer;font-size:13px;white-space:nowrap">Keeldu</button>' +
      '</div>';

    var s = banner.style;
    s.position = 'fixed';
    s.bottom = '20px';
    s.left = '50%';
    s.transform = 'translateX(-50%)';
    s.background = '#161616';
    s.border = '1px solid #222';
    s.borderRadius = '10px';
    s.padding = '16px 20px';
    s.display = 'flex';
    s.alignItems = 'center';
    s.justifyContent = 'space-between';
    s.gap = '20px';
    s.zIndex = '9999';
    s.maxWidth = '780px';
    s.width = 'calc(100% - 40px)';
    s.boxShadow = '0 8px 32px rgba(0,0,0,0.6)';
    s.transition = 'opacity .3s, transform .3s';
    s.flexWrap = 'wrap';
    s.fontFamily = 'inherit';
    s.boxSizing = 'border-box';

    document.body.appendChild(banner);

    document.getElementById('sv-cookie-accept').onclick = function () {
      localStorage.setItem(STORAGE_KEY, 'granted');
      updateConsent(true);
      hideBanner(banner);
    };

    document.getElementById('sv-cookie-decline').onclick = function () {
      localStorage.setItem(STORAGE_KEY, 'denied');
      updateConsent(false);
      hideBanner(banner);
    };
  }

  // Allow footer "Cookie Settings" link to reopen the banner
  window.svOpenCookieSettings = function () {
    localStorage.removeItem(STORAGE_KEY);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  };

  // Show banner on first visit (no stored choice)
  if (!localStorage.getItem(STORAGE_KEY)) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }
})();
