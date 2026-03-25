# Solvolt — Veebileht

## Failide struktuur

```
solvolt/
├── index.html          ← Avaleht
├── tooted.html         ← Kõik tooted
├── toode.html          ← Üksiku toote leht (template)
├── ostukorv.html       ← Ostukorv + checkout
├── edasi.html          ← Makse õnnestus
├── meist.html          ← Meist leht
├── kontakt.html        ← Kontaktivorm
├── assets/
│   ├── css/style.css   ← Kõik stiilid
│   ├── js/
│   │   ├── products.js ← ⭐ SIIN HALDAD TOOTEID
│   │   └── main.js     ← Ostukorv + üldine loogika
│   └── pildid/         ← Tootepildid siia
├── netlify/functions/
│   └── create-checkout.js  ← Stripe makse (serveris)
├── netlify.toml        ← Netlify seaded
└── package.json        ← Stripe sõltuvus
```

## Uue toote lisamine

1. Ava `assets/js/products.js`
2. Kopeeri olemasolev toote objekt
3. Muuda andmed (id, nimi, hind, pilt jne)
4. Lisa pilt kausta `assets/pildid/`
5. Loo Stripe'is toode → kopeeri Price ID `stripe_price_id` väljale
6. Commit + push → leht uueneb automaatselt

## Netlify seadistamine

### Stripe keskkonna muutujad
Netlify Dashboard → Site Settings → Environment Variables:
```
STRIPE_SECRET_KEY = sk_live_...   (Stripe Dashboard > Developers > API Keys)
```

### Stripe Price ID-de lisamine
1. Stripe Dashboard → Products → Create Product
2. Loo igale tootele toode + hind
3. Kopeeri Price ID (price_xxx) → products.js `stripe_price_id` väljale

## Google Ads / Analytics

Lisa `index.html`, `tooted.html`, `toode.html` `<head>` sektsiooni:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX'); // ← sinu Measurement ID
</script>
```

## Shopify URLide redirect

Loo fail `_redirects` projekti juurkausta:
```
/products/:slug    /toode.html    301
/collections/*     /tooted.html   301
/pages/contact     /kontakt.html  301
/pages/meist       /meist.html    301
```
