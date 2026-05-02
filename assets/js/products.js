// ============================================================
// SOLVOLT — TOODETE KATALOOG
// ============================================================
// KUIDAS LISADA UUS TOODE:
//   1. Kopeeri üks olemasolev objekt
//   2. Muuda id, slug, nimi, hind, kirjeldus jne
//   3. Lisa pilt kausta assets/pildid/
//   4. Loo Stripe'is toode + hind ? kopeeri Price ID siia
//   5. Salvesta fail ? GitHub ? Cloudflare uuendab automaatselt
// ============================================================

const TOOTED = [
  // -- 1. EVE LiFePO4 elemendid -----------------------------
  {
    id: "eve-mb31-314ah",
    slug: "eve-mb31-314ah",
    nimi: "EVE MB31 314Ah LiFePO4 elemendid (16tk)",
    lyhikirjeldus: "A-klassi EVE MB31 elemendid — 3.2V / 314Ah (mõõdetud keskmine 332.8Ah). 16tk komplekt, kaasas EVE ametlik testiraport.",
    kategooria: "lifepo4",
    hind: 1450,
    hind_vana: 1550,
    stripe_price_id: "price_1TIXrMPcV5reENb6WOJFaOhT",
    pilt: "assets/pildid/eve-mb31.png",
    pildid: [
      "assets/pildid/eve-mb31.png",
      "assets/pildid/eve-mb31-2.jpg",
      "assets/pildid/eve-mb31-3.jpg"
    ],
    ladu: true,
    eelmyyk: true,
    specs: {
      "Keemia": "LiFePO4 prismaatiline",
      "Nimimahtuvus": "314 Ah",
      "Mõõdetud keskmine": "332.8 Ah",
      "Nominaalpinge": "3.2 V",
      "Sisetakistus": "0.18 mO ± 0.05 mO",
      "Eluiga": "8000 tsüklit (70% SOH @ 25°C)",
      "Komplektis": "16 tk",
      "Tootja": "EVE",
      "Klass": "A-klass",
      "Sertifikaadid": "CE, UL, RoHS, UN38.3",
      "Tarne": "Eelmüük — täpsustamisel"
    },
    kirjeldus: `
      <p>Uued EVE MB31 LiFePO4 prismaatilised elemendid, tellitud otse EVE ametlikult edasimüüjalt. Iga partii on testitud — <strong>konkreetse partii mõõdetud keskmine mahutavus on 332.8 Ah</strong> (tehase nimiväärtus 314 Ah), kaasas on EVE ametlik testraport.</p>

      <p><strong>16 elemendiga 48V süsteemi energiamahutavus:</strong></p>
      <ul>
        <li>Nimiväärtuse järgi: ~16.1 kWh</li>
        <li>Mõõdetud keskmise järgi: ~17.0 kWh</li>
      </ul>

      <p><strong>Komplekti kuulub:</strong></p>
      <ul>
        <li>16× EVE MB31 element</li>
        <li>Ühendusplaadid (busbar), M6 poldid ja mutrid</li>
        <li>EVE ametlik partii testiraport</li>
      </ul>

      <ul>
        <li>Sobib: energiasalvestus, päikesepargid, UPS, elektrisõidukid</li>
        <li>Suuremate koguste puhul küsi personaalset pakkumist</li>
      </ul>

      <p><strong>NB:</strong> Tegemist on eelmüügiga. Tarneaja täpsustamiseks võta meiega ühendust.</p>
    `
  },

  // -- 2. EEL Battery V6 PRO --------------------------------
  {
    id: "eel-battery-v6-pro",
    slug: "eel-battery-v6-pro",
    nimi: "EEL Battery V6 PRO — 17kWh LiFePO4 akusüsteem",
    lyhikirjeldus: "Täielik 17kWh LiFePO4 akusüsteem EVE MB31 elementide, EEL V6 PRO kasti ja JK BMS V19-ga. Saadaval valmis komplektina või DIY kitina.",
    kategooria: "akud",
    hind: 1699,
    hind_vana: null,
    hind_prefix: "alates",
    href: "eel-v6-pro.html",
    stripe_price_id: null,
    pilt: "eel-battery-v6-pro.png",
    ladu: true,
    eelmyyk: true,
    specs: {
      "Mahtuvus": "17 kWh (330+ Ah)",
      "Elemendid": "16× EVE MB31 Grade A",
      "BMS": "JK BMS V19",
      "Pinge": "48V (51.2V nominaal)",
      "Variandid": "Valmis komplekt 1 899€ · DIY kit 1 699€",
      "Garantii": "5 aastat",
      "Tarne": "Eelmüük — kohe peale elementide saabumist"
    },
    kirjeldus: ``
  },

  // -- 3. Täielik Energiasalvestuse Komplekt ----------------
  {
    id: "energiasalvestuse-komplekt",
    slug: "energiasalvestuse-komplekt",
    nimi: "Täielik Energiasalvestuse Komplekt",
    lyhikirjeldus: "Vali Deye inverter (6–20kW) + EEL V6 PRO aku (16–64kWh) + Qilowatt juhtimine. Komplekti soodustus -5%. Konfigureeritav.",
    kategooria: "komplekt",
    hind: 3790,
    hind_vana: 3989,
    hind_prefix: "alates",
    href: "komplekt.html",
    stripe_price_id: null,
    pilt: "assets/pildid/komplekt.png",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Inverter": "Deye SG05LP3 — 6, 10, 12, 15 või 20 kW",
      "Aku": "EEL V6 PRO — 16, 32, 48 või 64 kWh",
      "Lisavalik": "Qilowatt juhtimismoodul +350 €",
      "Soodustus": "5% komplekti hinnalt",
      "Garantii": "5 aastat",
      "Tarne": "3–14 tööpäeva"
    },
    kirjeldus: ``
  },

  // -- 4. Deye 6–12kW inverterid ----------------------------
  {
    id: "deye-6-12kw",
    slug: "deye-6-12kw",
    nimi: "Deye SG05LP3 6–12kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye kolmefaasiline hübriidinverter 48V akusüsteemiga — 4 võimsust: 6kW, 8kW, 10kW, 12kW. Zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2090,
    hind_vana: null,
    hind_prefix: "alates",
    href: "deye-6-12kw.html",
    stripe_price_id: null,
    pilt: "assets/pildid/deye.png",
    pildid: [
      "assets/pildid/deye.png",
      "assets/pildid/deye2.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudelid": "6kW, 8kW, 10kW, 12kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },

  // -- 3. Deye 15–20kW inverterid ---------------------------
  {
    id: "deye-15-20kw",
    slug: "deye-15-20kw",
    nimi: "Deye SG05LP3 15–20kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye kolmefaasiline hübriidinverter 48V akusüsteemiga — 2 võimsust: 15kW ja 20kW. Kuni 350A aku vool, zero export, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2450,
    hind_vana: null,
    hind_prefix: "alates",
    href: "deye-15-20kw.html",
    stripe_price_id: null,
    pilt: "assets/pildid/deye3.webp",
    pildid: [
      "assets/pildid/deye3.webp",
      "assets/pildid/deye32.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht2.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudelid": "15kW, 20kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },

  // -- 4. Deye akud -----------------------------------------
  {
    id: "deye-se-f16-c-version",
    slug: "deye-se-f16-c-version",
    nimi: "Deye SE-F16 C version 16kWh LiFePO4 aku",
    lyhikirjeldus: "Deye seinale või põrandale paigaldatav 16kWh LiFePO4 aku. 314Ah, 51.2V, CAN/RS485/Bluetooth, kuni 32 tk paralleelis.",
    kategooria: "akud",
    hind: 2770,
    hind_vana: 2890,
    stripe_price_id: "price_1TIXufPcV5reENb6r6OZXfMg",
    pilt: "assets/pildid/deye-se-f16-c.png",
    pildid: [
      "assets/pildid/deye-se-f16-c.png",
    ],
    tooteleht_pdf: "assets/failid/deye-se-f16-tooteleht.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SE-F16 C version",
      "Keemia": "LiFePO4",
      "Mahtuvus Ah": "314 Ah",
      "Nominaalpinge": "51.2 V",
      "Tööpinge": "44.8–57.6 V",
      "Nominaalenergia": "16 kWh",
      "Maks. pidev laadimisvool": "160 A",
      "Maks. pidev tühjendusvool": "230 A",
      "Tippvool": "280 A (10 s)",
      "Soovituslik DoD": "90%",
      "Eluiga": "6000+ tsüklit",
      "Suhtlusprotokoll": "CAN2.0 / RS485 / Bluetooth + APP",
      "Kaitseklass": "IP21",
      "Paralleelühendus": "kuni 32 tk",
      "Mõõdud": "400 × 708 × 233 mm",
      "Kaal": "u 109 kg",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
    <p>Deye SE-F16 C version on 16kWh LiFePO4 akusüsteem koduse päikeseenergia salvestamiseks. Tegemist on kompaktse madalpinge akuga, mis sobib hästi Deye ja teiste ühilduvate inverteritega.</p>

    <ul>
      <li>16 kWh nominaalenergia ja 314 Ah mahtuvus</li>
      <li>51.2V süsteem — sobib madalpinge hübriidinverteritele</li>
      <li>CAN / RS485 / Bluetooth — lihtne monitooring ja inverteriga side</li>
      <li>Kuni 160A pidev laadimine ja kuni 230A pidev tühjendus</li>
      <li>Kuni 32 akut paralleelis suurema süsteemi ehitamiseks</li>
      <li>Seinale või põrandale paigaldatav lahendus</li>
    </ul>

    <p>Hea valik nii uue energiasalvestuse ehitamiseks kui olemasoleva süsteemi laiendamiseks.</p>
  `
  },
  {
    id: "deye-rw-f16",
    slug: "deye-rw-f16",
    nimi: "Deye RW-F16 16kWh LiFePO4 aku",
    lyhikirjeldus: "Deye RW-F16 LiFePO4 aku 51.2V / 314Ah. 16kWh nominaalmahtuvus, kasutatav energia 14.4kWh (DoD 90%), kuni 160A pidev charge/discharge.",
    kategooria: "akud",
    hind: 2655,
    hind_vana: 2760,
    stripe_price_id: "price_1TIXuwPcV5reENb62hoDL762",
    pilt: "assets/pildid/deye-rw-f16.png",
    pildid: [
      "assets/pildid/deye-rw-f16.png",
    ],
    tooteleht_pdf: "assets/failid/deye-rw-f16-tooteleht.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "RW-F16",
      "Keemia": "LiFePO4",
      "Mahtuvus Ah": "314 Ah",
      "Nominaalpinge": "51.2 V",
      "Nominaalenergia": "16 kWh",
      "Kasutatav energia": "14.4 kWh (DoD 90%)",
      "Maks. pidev laadimis-/tühjendusvool": "160 A",
      "Tippvool": "300 A (10 s)",
      "Kaitseklass": "IP20",
      "Paigaldus": "Seinale või põrandale",
      "Töötemperatuur": "Laadimine 0°C kuni 55°C / tühjendamine -20°C kuni 55°C",
      "Mõõdud": "480 × 830 × 235 mm",
      "Kaal": "u 122 kg",
      "Garantii": "5 aastat",
      "Sertifikaadid": "UN38.3, MSDS",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
    <p>Deye RW-F16 on suure mahutavusega LiFePO4 aku kodustele ja väiksematele ärilistele energiasalvestuslahendustele. Aku nominaalmahtuvus on <strong>16 kWh</strong> ning kasutatav energia on <strong>14.4 kWh (DoD 90%)</strong>.</p>

    <ul>
      <li>314 Ah ja 51.2V LiFePO4 aku</li>
      <li>14.4 kWh kasutatav energia (90% DoD)</li>
      <li>Kuni 160A pidev laadimis- ja tühjendusvool</li>
      <li>300A tippvool 10 sekundi jooksul</li>
      <li>Seina- või põrandapaigaldus</li>
      <li>Sobib hästi koduse päikeseenergia salvestuseks</li>
    </ul>

    <p>Kui soovid Deye inverteriga sobivat akulahendust, on RW-F16 üks väga tugev ja lihtsasti integreeritav variant.</p>
  `
  },

  // -- 5. Dyness akud ----------------------------------------
  {
    id: "dyness-stack100",
    slug: "dyness-stack100",
    nimi: "Dyness Stack100 LiFePO4 Akusüsteem",
    lyhikirjeldus: "Modulaarne virntatav LiFePO4 akusüsteem. 51.2V/100Ah moodul (5.12kWh), 3–15 moodulit klastris, kuni 12 klastrit paralleelselt. 1C kiirus, aerosool tulekustutus, 10a garantii.",
    kategooria: "akud",
    hind: 860,
    hind_vana: null,
    hind_prefix: "alates",
    href: "dyness-stack100.html",
    stripe_price_id: "price_1TN5YqPcV5reENb6ReR7U1sI",
    pilt: "assets/pildid/dyness-stack100.png",
    tooteleht_pdf: "assets/failid/dyness-stack100-tooteleht.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mudel": "Stack100",
      "Mooduli mahtuvus": "5.12 kWh (51.2V / 100Ah)",
      "Süsteemi energiavahemik": "15.36–76.8 kWh (1 klaster)",
      "Maks. süsteem": "921 kWh (12 klastrit paralleelselt)",
      "Laadimiskiirus": "1C (100A)",
      "Eluiga": "Piiramatu tsüklit / 10 aastat",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },

  {
    id: "dyness-powerbrick-pro-14kwh",
    slug: "dyness-powerbrick-pro-14kwh",
    nimi: "Dyness PowerBrick Pro 14.336kWh LiFePO4 aku (IP65)",
    lyhikirjeldus: "IP65 kaitsega Dyness PowerBrick Pro 14.336kWh — sobib sise- ja välitingimustesse. BMS sisseehitatud, 10a garantii.",
    kategooria: "akud",
    hind: 2540,
    hind_vana: 2700,
    stripe_price_id: "price_1TIXvbPcV5reENb6OzramLQn",
    pilt: "assets/pildid/dynesspro.png",
    pildid: [
      "assets/pildid/dynesspro.png",
      "assets/pildid/dynesspro2.png",
      "assets/pildid/dynesspro3.png",
    ],
    tooteleht_pdf: "assets/failid/dyness-tootelehtpro.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mudel": "PowerBrick Pro",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V (16S LiFePO4)",
      "Mahtuvus Ah": "280 Ah",
      "Maks. laadimisvool": "200 A",
      "Eluiga": "6000+ tsüklit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Kaitseklass": "IP65",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick Pro on täielikult integreeritud 14.336kWh LiFePO4 akusüsteem IP65 kaitseklassiga — sobib keldri, garaaži ja välitingimustes kasutamiseks.</p>
      <ul>
        <li>IP65 — tolmu- ja veekindel, sobib ka välitingimustesse paigaldamiseks</li>
        <li>Sisseehitatud professionaalne BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 — otsene suhtlus inverteriga (Deye, Goodwe, Huawei jt)</li>
        <li>6000+ tsüklit eluiga — ~16 aasta kasutus igapäevasel laadimisel</li>
        <li>Paralleelühendus kuni 16 akuga süsteemi laiendamiseks</li>
        <li>10 aasta garantii</li>
      </ul>
    `
  },
  {
    id: "dyness-powerbrick-14kwh",
    slug: "dyness-powerbrick-14kwh",
    nimi: "Dyness PowerBrick 14.336kWh LiFePO4 aku (51.2V / 280Ah)",
    lyhikirjeldus: "Dyness PowerBrick 14.336kWh LiFePO4 — sisseehitatud BMS, lai inverterite ühilduvus, 10a garantii.",
    kategooria: "akud",
    hind: 2435,
    hind_vana: 2500,
    stripe_price_id: "price_1TIXvtPcV5reENb6LsDVjxRK",
    pilt: "assets/pildid/dyness.png",
    pildid: [
      "assets/pildid/dyness.png",
      "assets/pildid/dyness2.png",
      "assets/pildid/dyness3.png",
    ],
    tooteleht_pdf: "assets/failid/dyness-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mudel": "PowerBrick",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V (16S LiFePO4)",
      "Mahtuvus Ah": "280 Ah",
      "Maks. laadimisvool": "200 A",
      "Eluiga": "6000+ tsüklit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick on populaarne valik koduse päikeseenergia salvestamiseks — kõik ühes pakis, lihtne paigaldus ja lai ühilduvus inverteritega.</p>
      <ul>
        <li>Sisseehitatud BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 suhtlus inverteriga — Deye, Goodwe, Huawei, Growatt jt</li>
        <li>6000+ tsüklit eluiga</li>
        <li>Paralleelühendus mitme akuga süsteemi laiendamiseks</li>
        <li>10 aasta garantii · Laos Eestis</li>
      </ul>
    `
  },

  // -- 6. Basen Green ----------------------------------------
  {
    id: "basen-green-16kwh",
    slug: "basen-green-16kwh",
    nimi: "Basen Green BR-OW-LV16KWH — 51.2V 320Ah 16kWh akukomplekt",
    lyhikirjeldus: "Basen Green 16kWh LiFePO4 akukomplekt sisseehitatud BMS-iga. Suur mahtuvus, CAN/RS485, 10a garantii.",
    kategooria: "akud",
    hind: 2049,
    hind_vana: 2399,
    stripe_price_id: "price_1TIXwEPcV5reENb6XMnSJZ7I",
    pilt: "assets/pildid/basen.jpg",
    pildid: [
      "assets/pildid/basen.jpg",
      "assets/pildid/basen2.jpg",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Basen",
      "Mudel": "BR-OW-LV16KWH",
      "Mahtuvus": "16 kWh",
      "Pinge": "51.2 V (16S LiFePO4)",
      "Mahtuvus Ah": "320 Ah",
      "Maks. laadimisvool": "100 A",
      "Eluiga": "6000+ tsüklit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Basen Green BR-OW-LV16KWH on 16kWh mahtuvusega LiFePO4 akukomplekt — elemendid, BMS ja korpus ühes pakis. 320Ah mahtuvus tagab parema puhvri suuremate majapidamiste päevasteks vajadusteks.</p>
      <ul>
        <li>16kWh — üks suurimaid standardpakke turul, vähendab vajadust paralleelühenduse järele</li>
        <li>Sisseehitatud professionaalne BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 — otsene suhtlus inverteriga (Deye, Goodwe, SolarEdge jt)</li>
        <li>6000+ tsüklit eluiga</li>
        <li>10 aasta garantii · Laos Eestis</li>
      </ul>
    `
  },

  // -- 7. Huawei ---------------------------------------------
  {
    id: "huawei-sun2000-4-6ktl",
    slug: "huawei-sun2000-4-6ktl",
    nimi: "Huawei SUN2000-4.6KTL-L1 hübriidinverter",
    lyhikirjeldus: "Huawei 4.6kW 1-faasiline hübriidinverter. Ühilduv Luna2000 akusüsteemiga. FusionSolar monitooring, IP65.",
    kategooria: "inverterid",
    hind: 860,
    hind_vana: null,
    stripe_price_id: "price_1TIXwTPcV5reENb6bp1cdEWL",
    pilt: "assets/pildid/huawei.png",
    pildid: [
      "assets/pildid/huawei.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Huawei",
      "Mudel": "SUN2000-4.6KTL-L1",
      "Võimsus": "4.6 kW",
      "Faasid": "1-faasiline",
      "MPPT": "2× MPPT",
      "Maks. PV pinge": "600 V",
      "Aku liides": "Huawei Luna2000 (CAN)",
      "Efektiivsus": "kuni 97.5%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Huawei SUN2000-4.6KTL-L1 on usaldusväärne 1-faasiline hübriidinverter, mis integreerub sujuvalt Huawei Luna2000 akusüsteemiga ja on optimeeritud Huawei energiahalduse ökosüsteemile.</p>
      <ul>
        <li>2× MPPT — saab ühendada erineva suunaga paneeliridu</li>
        <li>Madal käivituspinge — töötab ka pilvistel päevadel</li>
        <li>Huawei Luna2000 akud: lihtne laiendamine moodulite lisamisega</li>
        <li>FusionSolar äpp — monitooring ja juhtimine nutitelefonist</li>
        <li>IP65 kaitseklass · 5 aasta garantii</li>
      </ul>
    `
  },

  // -- 8. BMS ------------------------------------------------
  {
    id: "jk-bms-150a-1a",
    slug: "jk-bms-150a-1a",
    nimi: "JK (Jikong) BMS 8S–24S 150A — 1A aktiivne balanss",
    lyhikirjeldus: "Professionaalne BMS 1A aktiivse induktsioonbalanseerimisega. Bluetooth 5.0 + RS485. Sobib 8S–24S LiFePO4 akupankadele.",
    kategooria: "bms",
    hind: 130,
    hind_vana: null,
    stripe_price_id: "price_1TIXwfPcV5reENb6OvY9mLcc",
    pilt: "assets/pildid/jk.png",
    pildid: [
      "assets/pildid/jk.png",
      "assets/pildid/jk3.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "JK / Jikong",
      "Voolutugevus": "150 A pidev",
      "Rakuvahemik": "8S – 24S (24–77V)",
      "Balanss": "Aktiivne 1A (induktsioon)",
      "Kaitse": "Üle-/alalaeng, ülevool, lühis, temperatuur",
      "Liides": "Bluetooth 5.0 + RS485",
      "App": "iOS / Android (tasuta)",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>JK (Jikong) BMS on üks enimkasutatud ja usaldusväärsemaid BMS-e DIY energiasalvestusprojektides — tuntud täpse mõõtmise ja rikkaliku funktsionaalsuse poolest.</p>
      <ul>
        <li>Aktiivne induktsioonbalanseerimine 1A — pikendab rakkude eluiga</li>
        <li>Täielik kaitse: üle-/alalaeng, ülevool, lühis, üle-/alatemperatuur</li>
        <li>Bluetooth 5.0 + RS485 — monitooring äpist või CAN/RS485 kaudu inverteriga</li>
        <li>Toetab 8S–24S konfiguratsioone (24V kuni 77V)</li>
        <li>Sobib: EVE, CATL, Basen jt LiFePO4 elementidega</li>
      </ul>
    `
  },
  {
    id: "jk-bms-150a-2a",
    slug: "jk-bms-150a-2a",
    nimi: "JK (Jikong) BMS 8S–24S 150A — 2A aktiivne balanss",
    lyhikirjeldus: "Võimsam JK BMS 2A aktiivse balanseerimisega — kiirem tasakaalustamine suurematele akupankadele. Bluetooth 5.0 + RS485.",
    kategooria: "bms",
    hind: 155,
    hind_vana: null,
    stripe_price_id: "price_1TIXwsPcV5reENb6GbpF1p9a",
    pilt: "assets/pildid/jk.png",
    pildid: [
      "assets/pildid/jk.png",
      "assets/pildid/jk2.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "JK / Jikong",
      "Voolutugevus": "150 A pidev",
      "Rakuvahemik": "8S – 24S (24–77V)",
      "Balanss": "Aktiivne 2A (induktsioon)",
      "Kaitse": "Üle-/alalaeng, ülevool, lühis, temperatuur",
      "Liides": "Bluetooth 5.0 + RS485",
      "App": "iOS / Android (tasuta)",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>JK BMS 2A versioon — ideaalne suurematele akupankadele (=200Ah), kus kiirem balanseerimine tagab parema rakkudevahelise tasakaalu ja pikema eluea.</p>
      <ul>
        <li>Aktiivne induktsioonbalanseerimine 2A — 2× kiirem kui 1A versioon</li>
        <li>Täielik kaitse: üle-/alalaeng, ülevool, lühis, temperatuur</li>
        <li>Bluetooth 5.0 + RS485 — monitooring äpist või inverteriga liidestus</li>
        <li>Toetab 8S–24S konfiguratsioone</li>
        <li>Sobib: EVE MB31, Basen jt suure mahutavusega elementidega</li>
      </ul>
    `
  },

  // -- CALB LiFePO4 16kWh — JK BMS -----------------------------
  {
    id: "calb-lifepo4-16kwh",
    slug: "calb-lifepo4-16kwh",
    nimi: "CALB LiFePO4 16kWh Akukomplekt — JK BMS",
    lyhikirjeldus: "16kWh LiFePO4 akukomplekt CALB A-klassi 314Ah elementide ja JK BMS-iga. 51.2V / 320Ah. Vertikaalne või lamav korpus, 200A kaitse, tulekustutusaerosool.",
    kategooria: "akud",
    hind: 1799,
    hind_vana: null,
    hind_prefix: "alates",
    href: "calb-lifepo4-16kwh.html",
    stripe_price_id: null,
    pilt: "assets/pildid/calb-horisontal.png",
    ladu: true,
    eelmyyk: true,
    specs: {
      "Elemendid": "16× CALB 314Ah LiFePO4 A-klass",
      "BMS": "JK BMS (puuteekraan)",
      "Pinge": "51.2 V",
      "Mahtuvus": "320 Ah / 16 kWh",
      "Paralleelühendus": "kuni 16 akut",
      "Protokoll": "CAN / RS485 / RS232",
      "Tarne": "Eelmüük — täpsustamisel"
    },
    kirjeldus: ``
  },

  // -- Peidetud CALB variandid (kasutatakse calb-lifepo4-16kwh.html-s) --
  {
    id: "calb-16kwh-standing",
    slug: "calb-16kwh-standing",
    catalog_hidden: true,
    nimi: "CALB 16kWh LiFePO4 — Vertikaalne (seisev)",
    lyhikirjeldus: "16kWh LiFePO4 seisev vertikaalkorpus CALB A-klassi elementide ja JK BMS-iga. 200A kaitse, tulekustutusaerosool.",
    kategooria: "akud",
    hind: 1799,
    hind_vana: null,
    stripe_price_id: "price_1TMjqOPcV5reENb66qhNF5pT",
    pilt: "assets/pildid/calb-standing.png",
    pildid: [
      "assets/pildid/calb-standing.png",
    ],
    ladu: true,
    eelmyyk: true,
    specs: {
      "Korpus": "Vertikaalne",
      "Elemendid": "16× CALB 314Ah LiFePO4 A-klass",
      "BMS": "JK BMS (puuteekraan)",
      "Nominaalpinge": "51.2 V",
      "Mahtuvus": "320 Ah",
      "Energia": "16 kWh",
      "Maks. laadimisvool": "0.5C (200 A)",
      "Maks. tühjendusvool": "1C (320 A)",
      "Kaitse": "200A kaitselüliti",
      "Tulekustutus": "Temperatuuritundlik aerosool",
      "Protokoll": "CAN / RS485 / RS232",
      "Paralleelühendus": "kuni 16 akut",
      "Mõõdud": "410 × 275 × 805 mm",
      "Kaal": "u 119 kg",
      "Inverteri tugi": "Deye, Growatt, Goodwe, Victron, Sofar, Solis, SRNE",
      "Tarne": "Eelmüük — täpsustamisel"
    },
    kirjeldus: `
      <p>CALB 16kWh vertikaalkorpus on kompaktne ja elegantne lahendus kodustesse ruumidesse — sobib seina äärde või tehnoruumi, võtab vähe põrandapinda (275mm sügavus).</p>
      <ul>
        <li>CALB A-klassi 314Ah LiFePO4 elemendid — pikk eluiga ja kõrge töökindlus</li>
        <li>JK BMS 4-tollise puuteekraaniga — reaalajas seire ja seadistamine</li>
        <li>Sisseehitatud 200A kaitselüliti — täielik kaitse ülekoormuse eest</li>
        <li>Temperatuuritundlik tulekustutusaerosool — automaatne turvafunktsioon</li>
        <li>CAN / RS485 / RS232 — ühilduv Deye, Growatt, Goodwe, Victron jt inverteritega</li>
        <li>Kuni 16 akut paralleelselt RS485 kaudu — laienda mahtuvust kuni 256kWh</li>
        <li>Bluetoothi ühendus JK BMS mobiilirakendusega (iOS/Android) — mugav seire nutitelefonist</li>
      </ul>
      <p>Hind <strong>1 799 € + KM (kokku 2 230 €)</strong>. Tarneks registreeri eelmüüki — võtame ühendust, kui aku on saabumas.</p>
    `
  },
  {
    id: "calb-16kwh-lying",
    slug: "calb-16kwh-lying",
    catalog_hidden: true,
    nimi: "CALB 16kWh LiFePO4 — Lamav (horisontaalne)",
    lyhikirjeldus: "16kWh LiFePO4 lamav korpus CALB A-klassi elementide ja JK BMS-iga. Virnatav. 200A kaitse, tulekustutusaerosool.",
    kategooria: "akud",
    hind: 1799,
    hind_vana: null,
    stripe_price_id: "price_1TMjr9PcV5reENb6gZsAwfwW",
    pilt: "assets/pildid/calb-horisontal.png",
    pildid: [
      "assets/pildid/calb-horisontal.png",
    ],
    ladu: true,
    eelmyyk: true,
    specs: {
      "Korpus": "Lamav (virnatav)",
      "Elemendid": "16× CALB 314Ah LiFePO4 A-klass",
      "BMS": "JK BMS (puuteekraan)",
      "Nominaalpinge": "51.2 V",
      "Mahtuvus": "320 Ah",
      "Energia": "16 kWh",
      "Maks. laadimisvool": "0.5C (200 A)",
      "Maks. tühjendusvool": "1C (320 A)",
      "Kaitse": "200A kaitselüliti",
      "Tulekustutus": "Temperatuuritundlik aerosool",
      "Protokoll": "CAN / RS485 / RS232",
      "Paralleelühendus": "kuni 16 akut",
      "Mõõdud": "850 × 405 × 480 mm",
      "Kaal": "u 138 kg",
      "Inverteri tugi": "Deye, Growatt, Goodwe, Victron, Sofar, Solis, SRNE",
      "Tarne": "Eelmüük — täpsustamisel"
    },
    kirjeldus: `
      <p>CALB 16kWh lamav korpus on ideaalne lahendus, kui soovid akusid virnata — sobib garaažidesse, keldrisse või madalama laega ruumidesse. Madala profiiliga kuju paigutub mugavalt riiulitele.</p>
      <ul>
        <li>CALB A-klassi 314Ah LiFePO4 elemendid — tipptasemel töökindlus</li>
        <li>Virnatav disain — mitu akut saab üksteise otsa paigutada</li>
        <li>JK BMS 4-tollise puuteekraaniga — reaalajas seire ja seadistamine</li>
        <li>Sisseehitatud 200A kaitselüliti — täielik kaitse ülekoormuse eest</li>
        <li>Temperatuuritundlik tulekustutusaerosool — automaatne turvafunktsioon</li>
        <li>CAN / RS485 / RS232 — ühilduv Deye, Growatt, Goodwe, Victron jt inverteritega</li>
        <li>Kuni 16 akut paralleelselt RS485 kaudu — laienda mahtuvust kuni 256kWh</li>
      </ul>
      <p>Hind <strong>1 799 € + KM (kokku 2 230 €)</strong>. Tarneks registreeri eelmüüki — võtame ühendust, kui aku on saabumas.</p>
    `
  },

  // -- Peidetud üksikud Deye inverterid (kasutatakse toode.html-s) --
  {
    id: "deye-sun-6k",
    slug: "deye-sun-6k",
    catalog_hidden: true,
    nimi: "Deye SUN-6K-SG05LP3-EU-SM2 — 6kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 6kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2090,
    hind_vana: 2320,
    stripe_price_id: "price_1TIXryPcV5reENb6vBBAI5Pa",
    pilt: "assets/pildid/deye.png",
    pildid: [
      "assets/pildid/deye.png",
      "assets/pildid/deye2.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-6K-SG05LP3-EU-SM2",
      "Võimsus": "6 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "125 A",
      "Maks. PV sisend": "12 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-6K-SG05LP3-EU-SM2 on kolmefaasiline 6kW hübriidinverter, mis töötab nii võrguühendusega kui off-grid režiimis. 48V madalpinge aku — ühilduv Dyness, Basen jt populaarsete akudega.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>AC-coupling — sobib olemasoleva on-grid inverteri täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — monitooring ja juhtimine Deye SolarMAN äpist</li>
        <li>Deye AI juhtimine — arvestab tarbimist, tootlust, akuolekut ja elektrihindu</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame valida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },
  {
    id: "deye-sun-8k",
    slug: "deye-sun-8k",
    catalog_hidden: true,
    nimi: "Deye SUN-8K-SG05LP3-EU-SM2 — 8kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 8kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2130,
    hind_vana: 2230,
    stripe_price_id: "price_1TIXsePcV5reENb6THSDRcEj",
    pilt: "assets/pildid/deye.png",
    pildid: [
      "assets/pildid/deye.png",
      "assets/pildid/deye2.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-8K-SG05LP3-EU-SM2",
      "Võimsus": "8 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "165 A",
      "Maks. PV sisend": "16 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-8K-SG05LP3-EU-SM2 on kolmefaasiline 8kW hübriidinverter, mis töötab nii võrguühendusega kui off-grid režiimis. 48V madalpinge aku — ühilduv Dyness, Basen jt populaarsete akudega.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>AC-coupling — sobib olemasoleva on-grid inverteri täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — monitooring ja juhtimine Deye SolarMAN äpist</li>
        <li>Deye AI juhtimine — arvestab tarbimist, tootlust, akuolekut ja elektrihindu</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame valida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },
  {
    id: "deye-sun-10k",
    slug: "deye-sun-10k",
    catalog_hidden: true,
    nimi: "Deye SUN-10K-SG05LP3-EU-SM2 — 10kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 10kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Kuni 210A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2150,
    hind_vana: 2500,
    stripe_price_id: "price_1TIXszPcV5reENb6XJKXSFXs",
    pilt: "assets/pildid/deye.png",
    pildid: [
      "assets/pildid/deye.png",
      "assets/pildid/deye2.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-10K-SG05LP3-EU-SM2",
      "Võimsus": "10 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "210 A",
      "Maks. PV sisend": "20 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-10K-SG05LP3-EU-SM2 on võimas kolmefaasiline 10kW hübriidinverter nii kodu- kui äriklientidele. Töötab nii võrguühendusega kui off-grid režiimis, 48V madalpinge aku.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>100% tasakaalustamata väljund — kuni 50% nimivõimsusest (5kW) faasi kohta</li>
        <li>AC-coupling — sobib olemasoleva on-grid inverteri täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — Deye SolarMAN äpp + Deye AI juhtimine</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame valida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },
  {
    id: "deye-sun-12k",
    slug: "deye-sun-12k",
    catalog_hidden: true,
    nimi: "Deye SUN-12K-SG05LP3-EU-SM2 — 12kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 12kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Kuni 250A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2180,
    hind_vana: 2255,
    stripe_price_id: "price_1TIXtEPcV5reENb6xcCUC4kE",
    pilt: "assets/pildid/deye.png",
    pildid: [
      "assets/pildid/deye.png",
      "assets/pildid/deye2.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht1.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-12K-SG05LP3-EU-SM2",
      "Võimsus": "12 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "250 A",
      "Maks. PV sisend": "24 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-12K-SG05LP3-EU-SM2 on kolmefaasiline 12kW hübriidinverter suuremate majapidamiste ja väikeettevõtete tarvis. Töötab nii võrguühendusega kui off-grid režiimis.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>100% tasakaalustamata väljund — kuni 50% nimivõimsusest (6kW) faasi kohta</li>
        <li>AC-coupling — sobib olemasoleva on-grid inverteri täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — Deye SolarMAN äpp + Deye AI juhtimine</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame valida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },
  {
    id: "deye-sun-15k",
    slug: "deye-sun-15k",
    catalog_hidden: true,
    nimi: "Deye SUN-15K-SG05LP3-EU-SM2 — 15kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 15kW kolmefaasiline hübriidinverter. Kuni 310A aku vool, kuni 22.5kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2450,
    hind_vana: 2540,
    stripe_price_id: "price_1TIXtZPcV5reENb6O3TN4s0A",
    pilt: "assets/pildid/deye3.webp",
    pildid: [
      "assets/pildid/deye3.webp",
      "assets/pildid/deye32.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht2.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-15K-SG05LP3-EU-SM2",
      "Võimsus": "15 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "310 A",
      "Maks. PV sisend": "22.5 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-15K-SG05LP3-EU-SM2 on võimas kolmefaasiline 15kW hübriidinverter suurematele majapidamistele ja äriklientidele — maksimaalse paindlikkusega energia tootmisel, salvestamisel ja juhtimisel.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>100% tasakaalustamata väljund — kuni 50% nimivõimsusest (7.5kW) faasi kohta</li>
        <li>AC-coupling — sobib olemasoleva päikesesüsteemi täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — Deye SolarMAN äpp + Deye AI juhtimine (hind, tarbimine, tootlus)</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame leida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },
  {
    id: "deye-sun-20k",
    slug: "deye-sun-20k",
    catalog_hidden: true,
    nimi: "Deye SUN-20K-SG05LP3-EU-SM2 — 20kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 20kW kolmefaasiline hübriidinverter. Kuni 350A aku vool, kuni 30kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 3250,
    hind_vana: 3380,
    stripe_price_id: "price_1TIXtpPcV5reENb60TdOGWUm",
    pilt: "assets/pildid/deye3.webp",
    pildid: [
      "assets/pildid/deye3.webp",
      "assets/pildid/deye32.jpg",
    ],
    tooteleht_pdf: "assets/failid/deye-tooteleht2.pdf",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Mudel": "SUN-20K-SG05LP3-EU-SM2",
      "Võimsus": "20 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40–60V)",
      "Maks. aku vool": "350 A",
      "Maks. PV sisend": "30 kW",
      "MPPT": "2× (2+1 stringid), 160–650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-20K-SG05LP3-EU-SM2 on väga võimas kolmefaasiline 20kW hübriidinverter suurematele majapidamistele ja äriklientidele — maksimaalse paindlikkusega energia tootmisel, salvestamisel ja juhtimisel. Töötab nii võrguühendusega kui off-grid režiimis.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja päikeseenergia võrku müük vastavalt seadistusele</li>
        <li>100% tasakaalustamata väljund — kuni 50% nimivõimsusest (10kW) faasi kohta</li>
        <li>AC-coupling — sobib olemasoleva päikesesüsteemi täiendamiseks</li>
        <li>Smart load — boiler/küte aktiveerub automaatselt, kui akud täis või tootlus kõrge</li>
        <li>Generaatori ühendamise võimalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleelühendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis — Deye SolarMAN äpp + Deye AI juhtimine (hind, tarbimine, tootlus)</li>
      </ul>
      <p>Hind sisaldab käibemaksu. Aitame leida sobiva lahenduse — <a href="kontakt.html" style="color:var(--accent)">küsi nõu</a>.</p>
    `
  },

  // -- 12. Leapton EL-A16 16kWh aku --------------------------
  {
    id: "leapton-el-a16",
    slug: "leapton-el-a16",
    nimi: "Leapton EL-A16 16kWh LiFePO4 aku",
    lyhikirjeldus: "Täielik 16kWh LiFePO4 akusüsteem sisseehitatud BMS-iga. 51.2V / 320Ah, CAN/RS485, IP55, kuni 16 akut paralleelselt. 10 aasta garantii.",
    kategooria: "akud",
    hind: 2715,
    hind_vana: null,
    href: "leapton-el-a16.html",
    stripe_price_id: null,
    pilt: "assets/pildid/leapton-el-a16.png",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Leapton",
      "Mudel": "EL-A16",
      "Keemia": "LiFePO4",
      "Nominaalenergia": "16 kWh",
      "Nominaalpinge": "51.2 V",
      "Mahtuvus": "320 Ah",
      "Protokoll": "CAN / RS485",
      "Kaitseklass": "IP55",
      "Paralleelühendus": "kuni 16 akut",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },

  // -- 11. Leapton EL-A05 akumoodul --------------------------
  {
    id: "leapton-el-a05",
    slug: "leapton-el-a05",
    nimi: "Leapton EL-A05 LiFePO4 akumoodul",
    lyhikirjeldus: "Modulaarne Leapton LiFePO4 akumoodul. 5.12 kWh moodul, valikuks EH-A05 PCU + Base juhtimismoodul. Skaleeritav 1–15 moodulist.",
    kategooria: "akud",
    hind: 975,
    hind_vana: null,
    hind_prefix: "alates",
    href: "leapton-el-a05.html",
    stripe_price_id: null,
    pilt: "assets/pildid/leapton-el-a05.png",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Leapton",
      "Mudel": "EL-A05",
      "Keemia": "LiFePO4",
      "Mooduli energia": "5.12 kWh",
      "Mooduli pinge": "51.2 V",
      "Mooduli mahtuvus": "100 Ah",
      "Juhtimismoodul": "EH-A05 PCU + Base (lisavarustus)",
      "Protokoll": "CAN / RS485",
      "Eluiga": "6000+ tsüklit",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },
  {
    id: "leapton-eh-a05-pcu",
    slug: "leapton-eh-a05-pcu",
    catalog_hidden: true,
    nimi: "Leapton HV EH-A05 PCU + Base",
    lyhikirjeldus: "Leapton EL-A05 süsteemi BMS juhtimismoodul ja alustaraam. Vajalik täieliku akusüsteemi ehitamiseks.",
    kategooria: "akud",
    hind: 690,
    hind_vana: null,
    stripe_price_id: null,
    pilt: "assets/pildid/leapton-el-a05.png",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Leapton",
      "Mudel": "EH-A05 PCU + Base",
      "Funktsioon": "BMS juhtimismoodul + alustaraam",
      "Protokoll": "CAN / RS485",
      "Ühilduvus": "Leapton EL-A05 moodulitega"
    },
    kirjeldus: ``
  },

  // -- 10. Jinong BMS PB2A16S --------------------------------
  {
    id: "jinong-pb2a16s",
    slug: "jinong-pb2a16s",
    nimi: "Jinong BMS PB2A16S — aktiivse balanseerimisega BMS (2A)",
    lyhikirjeldus: "Jinong PB2A16S seeria BMS 2A aktiivse balanseerimisega. RS485 + CAN + Bluetooth. Saadaval 150A ja 200A.",
    kategooria: "bms",
    hind: 145,
    hind_vana: null,
    hind_prefix: "alates",
    href: "jinong-pb2a16s.html",
    pilt: "assets/pildid/BMS1.png",
    pildid: [
      "assets/pildid/BMS1.png",
      "assets/pildid/BMS-1.png",
      "assets/pildid/lisad-1.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudelid": "PB2A16S-15P (150A) / PB2A16S-20P (200A)",
      "Elementide arv": "8S–16S (20–70 V)",
      "Balanseerimine": "aktiivne, 2A",
      "Liidesed": "RS485, CAN, Bluetooth",
      "Tarneaeg": "3–7 tööpäeva"
    },
    kirjeldus: ``
  },

  // -- Peidetud Jinong BMS variandid (kasutatakse jinong-pb2a16s.html-s) --
  {
    id: "jinong-pb2a16s-150a",
    slug: "jinong-pb2a16s-150a",
    catalog_hidden: true,
    nimi: "Jinong BMS PB2A16S-15P — 150A",
    lyhikirjeldus: "Jinong 150A BMS 2A aktiivse balanseerimisega. RS485 + CAN + Bluetooth.",
    kategooria: "bms",
    hind: 145,
    hind_vana: null,
    stripe_price_id: "price_JINONG150A",
    pilt: "assets/pildid/BMS1.png",
    pildid: [
      "assets/pildid/BMS1.png",
      "assets/pildid/BMS-1.png",
      "assets/pildid/lisad-1.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudel": "PB2A16S-15P",
      "Pidev vool": "150 A",
      "Maksimaalne impulsvool": "300 A",
      "Sisetakistus": "1 mΩ",
      "Balanseerimine": "aktiivne, 2A",
      "Elementide arv": "8S–16S (20–70 V)",
      "Tööpinge": "20–70 V",
      "Ülevoolukaitse seadistus": "10–150 A",
      "Kaitsed": "ülevool, üle- ja alalaadimine, temperatuur, lühis",
      "Liidesed": "RS485, CAN, Bluetooth",
      "Bluetooth tugi": "Android, iOS, HarmonyOS",
      "Temperatuuriandurid": "1 sisemine + 4 välist",
      "Mõõtmed": "300 × 100 × 18 mm",
      "Tarneaeg": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Jinong PB2A16S-15P on professionaalne 150A BMS koduse energiasalvestuse jaoks, millel on 2A aktiivne balanseerimine.</p>
      <ul>
        <li>2A aktiivne balanseerimine — tagab elemetide ühtlase laetuse ja pikema eluea</li>
        <li>150A pidev vool, kuni 300A impulsvool — sobib ka suurematele koormustele</li>
        <li>RS485 ja CAN liides — otsene liidestus inverteritega (nt Deye, Growatt)</li>
        <li>Bluetooth (Android, iOS, HarmonyOS) — mugav jälgimine nutiseadmest</li>
        <li>5 temperatuuriandurit — 4 välist + 1 sisemine täielikuks termokontrolliks</li>
        <li>Akusoojenduse tugi (valikuline) — sobib ka külmematele tingimustele</li>
        <li>Coulomb-meeter, paralleellaadimise voolupiirang ja häiresireen — kõik vajalikud funktsioonid olemas</li>
      </ul>
    `
  },
  {
    id: "jinong-pb2a16s-200a",
    slug: "jinong-pb2a16s-200a",
    catalog_hidden: true,
    nimi: "Jinong BMS PB2A16S-20P — 200A",
    lyhikirjeldus: "Jinong 200A BMS 2A aktiivse balanseerimisega. RS485 + CAN + Bluetooth.",
    kategooria: "bms",
    hind: 165,
    hind_vana: null,
    stripe_price_id: "price_JINONG200A",
    pilt: "assets/pildid/BMS1.png",
    pildid: [
      "assets/pildid/BMS1.png",
      "assets/pildid/BMS-1.png",
      "assets/pildid/lisad-1.png",
    ],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudel": "PB2A16S-20P",
      "Pidev vool": "200 A",
      "Maksimaalne impulsvool": "400 A",
      "Sisetakistus": "0.35 mΩ",
      "Balanseerimine": "aktiivne, 2A",
      "Elementide arv": "8S–16S (20–70 V)",
      "Tööpinge": "20–70 V",
      "Ülevoolukaitse seadistus": "10–200 A",
      "Kaitsed": "ülevool, üle- ja alalaadimine, temperatuur, lühis",
      "Liidesed": "RS485, CAN, Bluetooth",
      "Bluetooth tugi": "Android, iOS, HarmonyOS",
      "Temperatuuriandurid": "1 sisemine + 4 välist",
      "Mõõtmed": "300 × 100 × 18 mm",
      "Tarneaeg": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Jinong PB2A16S-20P on võimsaim mudel PB2A16S seeriast — 200A pideva voolu ja madalaima sisetakistusega (0.35 mΩ). Ideaalne suurematele kodu- ja ärisüsteemidele.</p>
      <ul>
        <li>2A aktiivne balanseerimine — tagab elemtide ühtlase laetuse ja pikema eluea</li>
        <li>200A pidev vool, kuni 400A impulsvool — kõige võimsam valik</li>
        <li>0.35 mΩ sisetakistus — minimaalsed energiakaod ja soojenemine</li>
        <li>RS485 ja CAN liides — otsene liidestus inverteritega (nt Deye, Growatt)</li>
        <li>Bluetooth (Android, iOS, HarmonyOS) — mugav jälgimine nutiseadmest</li>
        <li>5 temperatuuriandurit — 4 välist + 1 sisemine täielikuks termokontrolliks</li>
        <li>Akusoojenduse tugi (valikuline) — sobib ka külmematele tingimustele</li>
        <li>Coulomb-meeter, paralleellaadimise voolupiirang ja häiresireen — kõik vajalikud funktsioonid olemas</li>
      </ul>
    `
  }
];

// Kategooriate pealkirjad
const KATEGOORIAD = {
  "komplekt": "Komplektid",
  "lifepo4": "LiFePO4 elemendid",
  "inverterid": "Hübriidinverterid",
  "akud": "Akud",
  "bms": "BMS"
};

// Ekspordi (kasutatakse teistes failides)
if (typeof module !== 'undefined') module.exports = { TOOTED, KATEGOORIAD };
