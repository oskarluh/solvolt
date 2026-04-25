// ============================================================
// SOLVOLT ? TOODETE KATALOOG
// ============================================================
// KUIDAS LISADA UUS TOODE:
//   1. Kopeeri ?ks olemasolev objekt
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
    lyhikirjeldus: "A-klassi EVE MB31 elemendid ? 3.2V / 314Ah (m??detud keskmine 332.8Ah). 16tk komplekt, kaasas EVE ametlik testiraport.",
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
      "M??detud keskmine": "332.8 Ah",
      "Nominaalpinge": "3.2 V",
      "Sisetakistus": "0.18 mO ? 0.05 mO",
      "Eluiga": "8000 ts?klit (70% SOH @ 25?C)",
      "Komplektis": "16 tk",
      "Tootja": "EVE",
      "Klass": "A-klass",
      "Sertifikaadid": "CE, UL, RoHS, UN38.3",
      "Tarne": "Eelm??k ? t?psustamisel"
    },
    kirjeldus: `
      <p>Uued EVE MB31 LiFePO4 prismaatilised elemendid, tellitud otse EVE ametlikult edasim??jalt. Iga partii on testitud ? <strong>konkreetse partii m??detud keskmine mahutavus on 332.8 Ah</strong> (tehase nimiv??rtus 314 Ah), kaasas on EVE ametlik testraport.</p>

      <p><strong>16 elemendiga 48V s?steemi energiamahutavus:</strong></p>
      <ul>
        <li>Nimiv??rtuse j?rgi: ~16.1 kWh</li>
        <li>M??detud keskmise j?rgi: ~17.0 kWh</li>
      </ul>

      <p><strong>Komplekti kuulub:</strong></p>
      <ul>
        <li>16? EVE MB31 element</li>
        <li>?hendusplaadid (busbar), M6 poldid ja mutrid</li>
        <li>EVE ametlik partii testiraport</li>
      </ul>

      <ul>
        <li>Sobib: energiasalvestus, p?ikesepargid, UPS, elektris?idukid</li>
        <li>Suuremate koguste puhul k?si personaalset pakkumist</li>
      </ul>

      <p><strong>NB:</strong> Tegemist on eelm??giga. Tarneaja t?psustamiseks v?ta meiega ?hendust.</p>
    `
  },

  // -- 2. EEL Battery V6 PRO --------------------------------
  {
    id: "eel-battery-v6-pro",
    slug: "eel-battery-v6-pro",
    nimi: "EEL Battery V6 PRO ? 17kWh LiFePO4 akus?steem",
    lyhikirjeldus: "T?ielik 17kWh LiFePO4 akus?steem EVE MB31 elementide, EEL V6 PRO kasti ja JK BMS V19-ga. Saadaval valmis komplektina v?i DIY kitina.",
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
      "Elemendid": "16? EVE MB31 Grade A",
      "BMS": "JK BMS V19",
      "Pinge": "48V (51.2V nominaal)",
      "Variandid": "Valmis komplekt 1 899? ? DIY kit 1 699?",
      "Garantii": "5 aastat",
      "Tarne": "Eelm??k ? kohe peale elementide saabumist"
    },
    kirjeldus: ``
  },

  // -- 3. T?ielik Energiasalvestuse Komplekt ----------------
  {
    id: "energiasalvestuse-komplekt",
    slug: "energiasalvestuse-komplekt",
    nimi: "T?ielik Energiasalvestuse Komplekt",
    lyhikirjeldus: "Vali Deye inverter (6?20kW) + EEL V6 PRO aku (16?64kWh) + Qilowatt juhtimine. Komplekti soodustus -5%. Konfigureeritav.",
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
      "Inverter": "Deye SG05LP3 ? 6, 10, 12, 15 v?i 20 kW",
      "Aku": "EEL V6 PRO ? 16, 32, 48 v?i 64 kWh",
      "Lisavalik": "Qilowatt juhtimismoodul +350 ?",
      "Soodustus": "5% komplekti hinnalt",
      "Garantii": "5 aastat",
      "Tarne": "3?14 t??p?eva"
    },
    kirjeldus: ``
  },

  // -- 4. Deye 6?12kW inverterid ----------------------------
  {
    id: "deye-6-12kw",
    slug: "deye-6-12kw",
    nimi: "Deye SG05LP3 6?12kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye kolmefaasiline h?briidinverter 48V akus?steemiga ? 4 v?imsust: 6kW, 8kW, 10kW, 12kW. Zero export, AC-coupling, IP65, Wi-Fi.",
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
      "Akupinge": "48V madalpinge (40?60V)",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: ``
  },

  // -- 3. Deye 15?20kW inverterid ---------------------------
  {
    id: "deye-15-20kw",
    slug: "deye-15-20kw",
    nimi: "Deye SG05LP3 15?20kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye kolmefaasiline h?briidinverter 48V akus?steemiga ? 2 v?imsust: 15kW ja 20kW. Kuni 350A aku vool, zero export, IP65, Wi-Fi.",
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
      "Akupinge": "48V madalpinge (40?60V)",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: ``
  },

  // -- 4. Deye akud -----------------------------------------
  {
    id: "deye-se-f16-c-version",
    slug: "deye-se-f16-c-version",
    nimi: "Deye SE-F16 C version 16kWh LiFePO4 aku",
    lyhikirjeldus: "Deye seinale v?i p?randale paigaldatav 16kWh LiFePO4 aku. 314Ah, 51.2V, CAN/RS485/Bluetooth, kuni 32 tk paralleelis.",
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
      "T??pinge": "44.8?57.6 V",
      "Nominaalenergia": "16 kWh",
      "Maks. pidev laadimisvool": "160 A",
      "Maks. pidev t?hjendusvool": "230 A",
      "Tippvool": "280 A (10 s)",
      "Soovituslik DoD": "90%",
      "Eluiga": "6000+ ts?klit",
      "Suhtlusprotokoll": "CAN2.0 / RS485 / Bluetooth + APP",
      "Kaitseklass": "IP21",
      "Paralleel?hendus": "kuni 32 tk",
      "M??dud": "400 ? 708 ? 233 mm",
      "Kaal": "u 109 kg",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
    <p>Deye SE-F16 C version on 16kWh LiFePO4 akus?steem koduse p?ikeseenergia salvestamiseks. Tegemist on kompaktse madalpinge akuga, mis sobib h?sti Deye ja teiste ?hilduvate inverteritega.</p>

    <ul>
      <li>16 kWh nominaalenergia ja 314 Ah mahtuvus</li>
      <li>51.2V s?steem ? sobib madalpinge h?briidinverteritele</li>
      <li>CAN / RS485 / Bluetooth ? lihtne monitooring ja inverteriga side</li>
      <li>Kuni 160A pidev laadimine ja kuni 230A pidev t?hjendus</li>
      <li>Kuni 32 akut paralleelis suurema s?steemi ehitamiseks</li>
      <li>Seinale v?i p?randale paigaldatav lahendus</li>
    </ul>

    <p>Hea valik nii uue energiasalvestuse ehitamiseks kui olemasoleva s?steemi laiendamiseks.</p>
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
      "Maks. pidev laadimis-/t?hjendusvool": "160 A",
      "Tippvool": "300 A (10 s)",
      "Kaitseklass": "IP20",
      "Paigaldus": "Seinale v?i p?randale",
      "T??temperatuur": "Laadimine 0?C kuni 55?C / t?hjendamine -20?C kuni 55?C",
      "M??dud": "480 ? 830 ? 235 mm",
      "Kaal": "u 122 kg",
      "Garantii": "5 aastat",
      "Sertifikaadid": "UN38.3, MSDS",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
    <p>Deye RW-F16 on suure mahutavusega LiFePO4 aku kodustele ja v?iksematele ?rilistele energiasalvestuslahendustele. Aku nominaalmahtuvus on <strong>16 kWh</strong> ning kasutatav energia on <strong>14.4 kWh (DoD 90%)</strong>.</p>

    <ul>
      <li>314 Ah ja 51.2V LiFePO4 aku</li>
      <li>14.4 kWh kasutatav energia (90% DoD)</li>
      <li>Kuni 160A pidev laadimis- ja t?hjendusvool</li>
      <li>300A tippvool 10 sekundi jooksul</li>
      <li>Seina- v?i p?randapaigaldus</li>
      <li>Sobib h?sti koduse p?ikeseenergia salvestuseks</li>
    </ul>

    <p>Kui soovid Deye inverteriga sobivat akulahendust, on RW-F16 ?ks v?ga tugev ja lihtsasti integreeritav variant.</p>
  `
  },

  // -- 5. Dyness akud ----------------------------------------
  {
    id: "dyness-powerbrick-pro-14kwh",
    slug: "dyness-powerbrick-pro-14kwh",
    nimi: "Dyness PowerBrick Pro 14.336kWh LiFePO4 aku (IP65)",
    lyhikirjeldus: "IP65 kaitsega Dyness PowerBrick Pro 14.336kWh ? sobib sise- ja v?litingimustesse. BMS sisseehitatud, 10a garantii.",
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
      "Eluiga": "6000+ ts?klit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Kaitseklass": "IP65",
      "Garantii": "10 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick Pro on t?ielikult integreeritud 14.336kWh LiFePO4 akus?steem IP65 kaitseklassiga ? sobib keldri, garaa?i ja v?litingimustes kasutamiseks.</p>
      <ul>
        <li>IP65 ? tolmu- ja veekindel, sobib ka v?litingimustesse paigaldamiseks</li>
        <li>Sisseehitatud professionaalne BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 ? otsene suhtlus inverteriga (Deye, Goodwe, Huawei jt)</li>
        <li>6000+ ts?klit eluiga ? ~16 aasta kasutus igap?evasel laadimisel</li>
        <li>Paralleel?hendus kuni 16 akuga s?steemi laiendamiseks</li>
        <li>10 aasta garantii</li>
      </ul>
    `
  },
  {
    id: "dyness-powerbrick-14kwh",
    slug: "dyness-powerbrick-14kwh",
    nimi: "Dyness PowerBrick 14.336kWh LiFePO4 aku (51.2V / 280Ah)",
    lyhikirjeldus: "Dyness PowerBrick 14.336kWh LiFePO4 ? sisseehitatud BMS, lai inverterite ?hilduvus, 10a garantii.",
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
      "Eluiga": "6000+ ts?klit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Garantii": "10 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick on populaarne valik koduse p?ikeseenergia salvestamiseks ? k?ik ?hes pakis, lihtne paigaldus ja lai ?hilduvus inverteritega.</p>
      <ul>
        <li>Sisseehitatud BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 suhtlus inverteriga ? Deye, Goodwe, Huawei, Growatt jt</li>
        <li>6000+ ts?klit eluiga</li>
        <li>Paralleel?hendus mitme akuga s?steemi laiendamiseks</li>
        <li>10 aasta garantii ? Laos Eestis</li>
      </ul>
    `
  },

  // -- 6. Basen Green ----------------------------------------
  {
    id: "basen-green-16kwh",
    slug: "basen-green-16kwh",
    nimi: "Basen Green BR-OW-LV16KWH ? 51.2V 320Ah 16kWh akukomplekt",
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
      "Eluiga": "6000+ ts?klit",
      "Suhtlusprotokoll": "CAN / RS485",
      "Garantii": "10 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Basen Green BR-OW-LV16KWH on 16kWh mahtuvusega LiFePO4 akukomplekt ? elemendid, BMS ja korpus ?hes pakis. 320Ah mahtuvus tagab parema puhvri suuremate majapidamiste p?evasteks vajadusteks.</p>
      <ul>
        <li>16kWh ? ?ks suurimaid standardpakke turul, v?hendab vajadust paralleel?henduse j?rele</li>
        <li>Sisseehitatud professionaalne BMS aktiivse balanseerimise ja kaitsefunktsioonidega</li>
        <li>CAN/RS485 ? otsene suhtlus inverteriga (Deye, Goodwe, SolarEdge jt)</li>
        <li>6000+ ts?klit eluiga</li>
        <li>10 aasta garantii ? Laos Eestis</li>
      </ul>
    `
  },

  // -- 7. Huawei ---------------------------------------------
  {
    id: "huawei-sun2000-4-6ktl",
    slug: "huawei-sun2000-4-6ktl",
    nimi: "Huawei SUN2000-4.6KTL-L1 h?briidinverter",
    lyhikirjeldus: "Huawei 4.6kW 1-faasiline h?briidinverter. ?hilduv Luna2000 akus?steemiga. FusionSolar monitooring, IP65.",
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
      "V?imsus": "4.6 kW",
      "Faasid": "1-faasiline",
      "MPPT": "2? MPPT",
      "Maks. PV pinge": "600 V",
      "Aku liides": "Huawei Luna2000 (CAN)",
      "Efektiivsus": "kuni 97.5%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Huawei SUN2000-4.6KTL-L1 on usaldusv??rne 1-faasiline h?briidinverter, mis integreerub sujuvalt Huawei Luna2000 akus?steemiga ja on optimeeritud Huawei energiahalduse ?kos?steemile.</p>
      <ul>
        <li>2? MPPT ? saab ?hendada erineva suunaga paneeliridu</li>
        <li>Madal k?ivituspinge ? t??tab ka pilvistel p?evadel</li>
        <li>Huawei Luna2000 akud: lihtne laiendamine moodulite lisamisega</li>
        <li>FusionSolar ?pp ? monitooring ja juhtimine nutitelefonist</li>
        <li>IP65 kaitseklass ? 5 aasta garantii</li>
      </ul>
    `
  },

  // -- 8. BMS ------------------------------------------------
  {
    id: "jk-bms-150a-1a",
    slug: "jk-bms-150a-1a",
    nimi: "JK (Jikong) BMS 8S?24S 150A ? 1A aktiivne balanss",
    lyhikirjeldus: "Professionaalne BMS 1A aktiivse induktsioonbalanseerimisega. Bluetooth 5.0 + RS485. Sobib 8S?24S LiFePO4 akupankadele.",
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
      "Rakuvahemik": "8S ? 24S (24?77V)",
      "Balanss": "Aktiivne 1A (induktsioon)",
      "Kaitse": "?le-/alalaeng, ?levool, l?his, temperatuur",
      "Liides": "Bluetooth 5.0 + RS485",
      "App": "iOS / Android (tasuta)",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>JK (Jikong) BMS on ?ks enimkasutatud ja usaldusv??rsemaid BMS-e DIY energiasalvestusprojektides ? tuntud t?pse m??tmise ja rikkaliku funktsionaalsuse poolest.</p>
      <ul>
        <li>Aktiivne induktsioonbalanseerimine 1A ? pikendab rakkude eluiga</li>
        <li>T?ielik kaitse: ?le-/alalaeng, ?levool, l?his, ?le-/alatemperatuur</li>
        <li>Bluetooth 5.0 + RS485 ? monitooring ?pist v?i CAN/RS485 kaudu inverteriga</li>
        <li>Toetab 8S?24S konfiguratsioone (24V kuni 77V)</li>
        <li>Sobib: EVE, CATL, Basen jt LiFePO4 elementidega</li>
      </ul>
    `
  },
  {
    id: "jk-bms-150a-2a",
    slug: "jk-bms-150a-2a",
    nimi: "JK (Jikong) BMS 8S?24S 150A ? 2A aktiivne balanss",
    lyhikirjeldus: "V?imsam JK BMS 2A aktiivse balanseerimisega ? kiirem tasakaalustamine suurematele akupankadele. Bluetooth 5.0 + RS485.",
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
      "Rakuvahemik": "8S ? 24S (24?77V)",
      "Balanss": "Aktiivne 2A (induktsioon)",
      "Kaitse": "?le-/alalaeng, ?levool, l?his, temperatuur",
      "Liides": "Bluetooth 5.0 + RS485",
      "App": "iOS / Android (tasuta)",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>JK BMS 2A versioon ? ideaalne suurematele akupankadele (=200Ah), kus kiirem balanseerimine tagab parema rakkudevahelise tasakaalu ja pikema eluea.</p>
      <ul>
        <li>Aktiivne induktsioonbalanseerimine 2A ? 2? kiirem kui 1A versioon</li>
        <li>T?ielik kaitse: ?le-/alalaeng, ?levool, l?his, temperatuur</li>
        <li>Bluetooth 5.0 + RS485 ? monitooring ?pist v?i inverteriga liidestus</li>
        <li>Toetab 8S?24S konfiguratsioone</li>
        <li>Sobib: EVE MB31, Basen jt suure mahutavusega elementidega</li>
      </ul>
    `
  },

  // -- Peidetud ?ksikud Deye inverterid (kasutatakse toode.html-s) --
  {
    id: "deye-sun-6k",
    slug: "deye-sun-6k",
    catalog_hidden: true,
    nimi: "Deye SUN-6K-SG05LP3-EU-SM2 ? 6kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 6kW kolmefaasiline h?briidinverter 48V akus?steemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
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
      "V?imsus": "6 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "125 A",
      "Maks. PV sisend": "12 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-6K-SG05LP3-EU-SM2 on kolmefaasiline 6kW h?briidinverter, mis t??tab nii v?rgu?hendusega kui off-grid re?iimis. 48V madalpinge aku ? ?hilduv Dyness, Basen jt populaarsete akudega.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>AC-coupling ? sobib olemasoleva on-grid inverteri t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? monitooring ja juhtimine Deye SolarMAN ?pist</li>
        <li>Deye AI juhtimine ? arvestab tarbimist, tootlust, akuolekut ja elektrihindu</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame valida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },
  {
    id: "deye-sun-8k",
    slug: "deye-sun-8k",
    catalog_hidden: true,
    nimi: "Deye SUN-8K-SG05LP3-EU-SM2 ? 8kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 8kW kolmefaasiline h?briidinverter 48V akus?steemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
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
      "V?imsus": "8 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "165 A",
      "Maks. PV sisend": "16 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-8K-SG05LP3-EU-SM2 on kolmefaasiline 8kW h?briidinverter, mis t??tab nii v?rgu?hendusega kui off-grid re?iimis. 48V madalpinge aku ? ?hilduv Dyness, Basen jt populaarsete akudega.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>AC-coupling ? sobib olemasoleva on-grid inverteri t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? monitooring ja juhtimine Deye SolarMAN ?pist</li>
        <li>Deye AI juhtimine ? arvestab tarbimist, tootlust, akuolekut ja elektrihindu</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame valida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },
  {
    id: "deye-sun-10k",
    slug: "deye-sun-10k",
    catalog_hidden: true,
    nimi: "Deye SUN-10K-SG05LP3-EU-SM2 ? 10kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 10kW kolmefaasiline h?briidinverter 48V akus?steemiga. Kuni 210A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
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
      "V?imsus": "10 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "210 A",
      "Maks. PV sisend": "20 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-10K-SG05LP3-EU-SM2 on v?imas kolmefaasiline 10kW h?briidinverter nii kodu- kui ?riklientidele. T??tab nii v?rgu?hendusega kui off-grid re?iimis, 48V madalpinge aku.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>100% tasakaalustamata v?ljund ? kuni 50% nimiv?imsusest (5kW) faasi kohta</li>
        <li>AC-coupling ? sobib olemasoleva on-grid inverteri t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? Deye SolarMAN ?pp + Deye AI juhtimine</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame valida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },
  {
    id: "deye-sun-12k",
    slug: "deye-sun-12k",
    catalog_hidden: true,
    nimi: "Deye SUN-12K-SG05LP3-EU-SM2 ? 12kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 12kW kolmefaasiline h?briidinverter 48V akus?steemiga. Kuni 250A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
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
      "V?imsus": "12 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "250 A",
      "Maks. PV sisend": "24 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-12K-SG05LP3-EU-SM2 on kolmefaasiline 12kW h?briidinverter suuremate majapidamiste ja v?ikeettev?tete tarvis. T??tab nii v?rgu?hendusega kui off-grid re?iimis.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>100% tasakaalustamata v?ljund ? kuni 50% nimiv?imsusest (6kW) faasi kohta</li>
        <li>AC-coupling ? sobib olemasoleva on-grid inverteri t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? Deye SolarMAN ?pp + Deye AI juhtimine</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame valida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },
  {
    id: "deye-sun-15k",
    slug: "deye-sun-15k",
    catalog_hidden: true,
    nimi: "Deye SUN-15K-SG05LP3-EU-SM2 ? 15kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 15kW kolmefaasiline h?briidinverter. Kuni 310A aku vool, kuni 22.5kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
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
      "V?imsus": "15 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "310 A",
      "Maks. PV sisend": "22.5 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-15K-SG05LP3-EU-SM2 on v?imas kolmefaasiline 15kW h?briidinverter suurematele majapidamistele ja ?riklientidele ? maksimaalse paindlikkusega energia tootmisel, salvestamisel ja juhtimisel.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>100% tasakaalustamata v?ljund ? kuni 50% nimiv?imsusest (7.5kW) faasi kohta</li>
        <li>AC-coupling ? sobib olemasoleva p?ikeses?steemi t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? Deye SolarMAN ?pp + Deye AI juhtimine (hind, tarbimine, tootlus)</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame leida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },
  {
    id: "deye-sun-20k",
    slug: "deye-sun-20k",
    catalog_hidden: true,
    nimi: "Deye SUN-20K-SG05LP3-EU-SM2 ? 20kW 3-faasiline h?briidinverter",
    lyhikirjeldus: "Deye 20kW kolmefaasiline h?briidinverter. Kuni 350A aku vool, kuni 30kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
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
      "V?imsus": "20 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48V madalpinge (40?60V)",
      "Maks. aku vool": "350 A",
      "Maks. PV sisend": "30 kW",
      "MPPT": "2? (2+1 stringid), 160?650V",
      "Maks. PV pinge": "800 V",
      "Efektiivsus": "kuni 97.6%",
      "Kaitseklass": "IP65",
      "Garantii": "5 aastat",
      "Tarne": "3?7 t??p?eva"
    },
    kirjeldus: `
      <p>Deye SUN-20K-SG05LP3-EU-SM2 on v?ga v?imas kolmefaasiline 20kW h?briidinverter suurematele majapidamistele ja ?riklientidele ? maksimaalse paindlikkusega energia tootmisel, salvestamisel ja juhtimisel. T??tab nii v?rgu?hendusega kui off-grid re?iimis.</p>

      <p><strong>Peamised omadused:</strong></p>
      <ul>
        <li>Zero export / aku- ja p?ikeseenergia v?rku m??k vastavalt seadistusele</li>
        <li>100% tasakaalustamata v?ljund ? kuni 50% nimiv?imsusest (10kW) faasi kohta</li>
        <li>AC-coupling ? sobib olemasoleva p?ikeses?steemi t?iendamiseks</li>
        <li>Smart load ? boiler/k?te aktiveerub automaatselt, kui akud t?is v?i tootlus k?rge</li>
        <li>Generaatori ?hendamise v?imalus, sh energia salvestamine generaatorist</li>
        <li>Kuni 10 Deye inverteri paralleel?hendus (on-grid ja off-grid)</li>
        <li>Wi-Fi komplektis ? Deye SolarMAN ?pp + Deye AI juhtimine (hind, tarbimine, tootlus)</li>
      </ul>
      <p>Hind sisaldab k?ibemaksu. Aitame leida sobiva lahenduse ? <a href="kontakt.html" style="color:var(--accent)">k?si n?u</a>.</p>
    `
  },

  // -- 9. Jinong BMS PB2A16S ---------------------------------
  {
    id: "jinong-pb2a16s",
    slug: "jinong-pb2a16s",
    nimi: "Jinong BMS PB2A16S ? 150A / 200A aktiivne balanss",
    lyhikirjeldus: "Kodu-energiasalvestuse BMS 2A aktiivse balanseerimisega. Vali 150A voi 200A versioon. RS485 + CAN + Bluetooth. Sobib 8S-16S LiFePO4 akupankadele.",
    kategooria: "bms",
    hind: 179,
    hind_vana: null,
    hind_prefix: "alates",
    href: "jinong-pb2a16s.html",
    pilt: "assets/pildid/jinong-bms.png",
    pildid: ["assets/pildid/jinong-bms.png"],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudelid": "PB2A16S-15P (150A) / PB2A16S-20P (200A)",
      "Rakuvahemik": "8S - 16S (20-70V)",
      "Balanss": "Aktiivne 2A",
      "Liides": "RS485 + CAN + Bluetooth",
      "Tarne": "3-7 toopaeva"
    },
    kirjeldus: ``
  },

  {
    id: "jinong-pb2a16s-150a",
    slug: "jinong-pb2a16s-150a",
    catalog_hidden: true,
    nimi: "Jinong BMS PB2A16S-15P ? 150A",
    lyhikirjeldus: "Jinong 150A BMS 2A aktiivse balanseerimisega. RS485 + CAN + Bluetooth.",
    kategooria: "bms",
    hind: 179,
    hind_vana: null,
    stripe_price_id: "price_JINONG150A",
    pilt: "assets/pildid/jinong-bms.png",
    pildid: ["assets/pildid/jinong-bms.png"],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudel": "PB2A16S-15P",
      "Pidev vool": "150 A",
      "Maks. impulsvool": "300 A",
      "Sisetakistus": "1 mOhm",
      "Balanss": "Aktiivne 2A",
      "Rakuvahemik": "8S - 16S (20-70V)",
      "Tooepinge": "20-70 V",
      "Kaitsepiiri seade": "10-150 A",
      "Kaitse": "Uelevool, ule-/alalaeng, temperatuur, luhis",
      "Liides": "RS485 + CAN + Bluetooth",
      "Bluetooth": "Android, Apple, HarmonyOS",
      "Temperatuuriandurid": "1 sisemine + 4 valist",
      "Mootmed": "300 x 100 x 18 mm",
      "Tarne": "3-7 toopaeva"
    },
    kirjeldus: `
      <p>Jinong PB2A16S-15P on professionaalne 150A kodu-energiasalvestuse BMS aktiivse 2A balanseerimisega — moeldud suurtele DIY akupankadele ja kodu salvestussuesteemidele.</p>
      <ul>
        <li>2A aktiivne balanseerimine — tagab rakkude uehtlase laetuse ja pikema eluea</li>
        <li>150A pidev vaeljundvool, kuni 300A impulsvool — sobib suurematele koormustele</li>
        <li>RS485 + CAN — otsene liidestus inverteritega (Deye, Growatt jt)</li>
        <li>Bluetooth (Android, Apple, HarmonyOS) — mugav monitooring nutiseadmest</li>
        <li>4 valist + 1 sisemine temperatuuriandur — taielik termokontroll</li>
        <li>Akukuumutuse tugi (valikuline) — sobib ka kuelmematele tingimustele</li>
        <li>Coulomb-meeter, paralleel-laadimise voolupiirang ja haerisireen toetatud</li>
      </ul>
    `
  },
  {
    id: "jinong-pb2a16s-200a",
    slug: "jinong-pb2a16s-200a",
    catalog_hidden: true,
    nimi: "Jinong BMS PB2A16S-20P ? 200A",
    lyhikirjeldus: "Jinong 200A BMS 2A aktiivse balanseerimisega. RS485 + CAN + Bluetooth.",
    kategooria: "bms",
    hind: 219,
    hind_vana: null,
    stripe_price_id: "price_JINONG200A",
    pilt: "assets/pildid/jinong-bms.png",
    pildid: ["assets/pildid/jinong-bms.png"],
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Jinong",
      "Mudel": "PB2A16S-20P",
      "Pidev vool": "200 A",
      "Maks. impulsvool": "400 A",
      "Sisetakistus": "0.35 mOhm",
      "Balanss": "Aktiivne 2A",
      "Rakuvahemik": "8S - 16S (20-70V)",
      "Tooepinge": "20-70 V",
      "Kaitsepiiri seade": "10-200 A",
      "Kaitse": "Uelevool, ule-/alalaeng, temperatuur, luhis",
      "Liides": "RS485 + CAN + Bluetooth",
      "Bluetooth": "Android, Apple, HarmonyOS",
      "Temperatuuriandurid": "1 sisemine + 4 valist",
      "Mootmed": "300 x 100 x 18 mm",
      "Tarne": "3-7 toopaeva"
    },
    kirjeldus: `
      <p>Jinong PB2A16S-20P on voeimsaim mudel PB2A16S seeriast — 200A pideva vooluga ja madalaima sisetakistusega (0.35 mOhm). Sobib ideaalselt suurematele kodu- ja aeri-energiasalvestussuesteemidele.</p>
      <ul>
        <li>2A aktiivne balanseerimine — tagab rakkude uehtlase laetuse ja pikema eluea</li>
        <li>200A pidev vaeljundvool, kuni 400A impulsvool — koige voeimsam valik</li>
        <li>0.35 mOhm sisetakistus — minimaalsed energiakaod ja soojenemine</li>
        <li>RS485 + CAN — otsene liidestus inverteritega (Deye, Growatt jt)</li>
        <li>Bluetooth (Android, Apple, HarmonyOS) — mugav monitooring nutiseadmest</li>
        <li>4 valist + 1 sisemine temperatuuriandur — taielik termokontroll</li>
        <li>Akukuumutuse tugi (valikuline) — sobib ka kuelmematele tingimustele</li>
        <li>Coulomb-meeter, paralleel-laadimise voolupiirang ja haerisireen toetatud</li>
      </ul>
    `
  }
];

// Kategooriate pealkirjad
const KATEGOORIAD = {
  "komplekt": "Komplektid",
  "lifepo4": "LiFePO4 elemendid",
  "inverterid": "H?briidinverterid",
  "akud": "Akud",
  "bms": "BMS"
};

// Ekspordi (kasutatakse teistes failides)
if (typeof module !== 'undefined') module.exports = { TOOTED, KATEGOORIAD };
