// ============================================================
// SOLVOLT — TOODETE KATALOOG
// ============================================================
// KUIDAS LISADA UUS TOODE:
//   1. Kopeeri üks olemasolev objekt
//   2. Muuda id, slug, nimi, hind, kirjeldus jne
//   3. Lisa pilt kausta assets/pildid/
//   4. Loo Stripe'is toode + hind → kopeeri Price ID siia
//   5. Salvesta fail → GitHub → Netlify uuendab automaatselt
// ============================================================

const TOOTED = [
  {
    id: "eve-mb31-314ah",
    slug: "eve-mb31-314ah",
    nimi: "EVE MB31 314Ah LiFePO4 elemendid (16tk)",
    lyhikirjeldus: "A-klassi EVE MB31 elemendid — 3.2V / 314Ah (mõõdetud keskmine 332.8Ah). 16tk komplekt, kaasas EVE ametlik testiraport.",
    kategooria: "lifepo4",
    hind: 1450,
    hind_vana: 1550,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/eve-mb31.png",
    ladu: true,
    eelmyyk: true,
    specs: {
      "Keemia": "LiFePO4 prismaatiline",
      "Nimimahtuvus": "314 Ah",
      "Mõõdetud keskmine": "332.8 Ah",
      "Nominaalpinge": "3.2 V",
      "Sisetakistus": "0.18 mΩ ± 0.05 mΩ",
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
        <li>Ühildub Deye, Huawei, Growatt jt hübriidinverteritega</li>
        <li>Suuremate koguste puhul küsi personaalset pakkumist</li>
      </ul>

      <p><strong>NB:</strong> Tegemist on eelmüügiga. Tarneaja täpsustamiseks võta meiega ühendust.</p>
    `
  },
  {
    id: "jk-bms-150a-1a",
    slug: "jk-bms-150a-1a",
    nimi: "JK (Jikong) BMS 8S–24S 150A — 1A aktiivne balanss",
    lyhikirjeldus: "Professionaalne BMS 1A aktiivse induktsioonbalanseerimisega. Bluetooth 5.0 + RS485. Sobib 8S–24S LiFePO4 akupankadele.",
    kategooria: "bms",
    hind: 130,
    hind_vana: null,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/jk-bms.jpg",
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
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/jk-bms.jpg",
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
      <p>JK BMS 2A versioon — ideaalne suurematele akupankadele (≥200Ah), kus kiirem balanseerimine tagab parema rakkudevahelise tasakaalu ja pikema eluea.</p>
      <ul>
        <li>Aktiivne induktsioonbalanseerimine 2A — 2× kiirem kui 1A versioon</li>
        <li>Täielik kaitse: üle-/alalaeng, ülevool, lühis, temperatuur</li>
        <li>Bluetooth 5.0 + RS485 — monitooring äpist või inverteriga liidestus</li>
        <li>Toetab 8S–24S konfiguratsioone</li>
        <li>Sobib: EVE MB31, Basen jt suure mahutavusega elementidega</li>
      </ul>
    `
  },
  {
    id: "huawei-sun2000-4-6ktl",
    slug: "huawei-sun2000-4-6ktl",
    nimi: "Huawei SUN2000-4.6KTL-L1 hübriidinverter",
    lyhikirjeldus: "Huawei 4.6kW 1-faasiline hübriidinverter. Ühilduv Luna2000 akusüsteemiga. FusionSolar monitooring, IP65.",
    kategooria: "inverterid",
    hind: 860,
    hind_vana: null,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/huawei-sun2000.jpg",
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
  {
    id: "dyness-powerbrick-pro-14kwh",
    slug: "dyness-powerbrick-pro-14kwh",
    nimi: "Dyness PowerBrick Pro 14.336kWh LiFePO4 aku (IP65)",
    lyhikirjeldus: "IP65 kaitsega Dyness PowerBrick Pro 14.336kWh — sobib sise- ja välitingimustesse. BMS sisseehitatud, 10a garantii.",
    kategooria: "akud",
    hind: 2540,
    hind_vana: 2700,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/dyness-powerbrick-pro.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mudel": "PowerBrick Pro",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V (16S LiFePO4)",
      "Mahtuvus Ah": "280 Ah",
      "Maks. laadimisvool": "100 A",
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
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/dyness-powerbrick.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mudel": "PowerBrick",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V (16S LiFePO4)",
      "Mahtuvus Ah": "280 Ah",
      "Maks. laadimisvool": "100 A",
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
  {
    id: "deye-sun-6k",
    slug: "deye-sun-6k",
    nimi: "Deye SUN-6K-SG05LP3-EU-SM2 — 6kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 6kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2090,
    hind_vana: 2320,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-6k.jpg",
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
    nimi: "Deye SUN-8K-SG05LP3-EU-SM2 — 8kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 8kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Zero export, AC-coupling, smart load, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2130, // <- UUENDA HIND
    hind_vana: 2230,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-8k.jpg",
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
    nimi: "Deye SUN-10K-SG05LP3-EU-SM2 — 10kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 10kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Kuni 210A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2150,
    hind_vana: 2500,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-10k.jpg",
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
    nimi: "Deye SUN-12K-SG05LP3-EU-SM2 — 12kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 12kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Kuni 250A aku vool, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2180,
    hind_vana: 2255,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-12k.jpg",
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
    nimi: "Deye SUN-15K-SG05LP3-EU-SM2 — 15kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 15kW kolmefaasiline hübriidinverter. Kuni 310A aku vool, kuni 22.5kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 2450,
    hind_vana: 2540,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-15k.jpg",
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
    nimi: "Deye SUN-20K-SG05LP3-EU-SM2 — 20kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 20kW kolmefaasiline hübriidinverter. Kuni 350A aku vool, kuni 30kW PV, zero export, AC-coupling, IP65, Wi-Fi.",
    kategooria: "inverterid",
    hind: 3250,
    hind_vana: 3380,
    stripe_price_id: "price_1TEvzFPcV5reENb68Q2o6uqi",
    pilt: "assets/pildid/deye-20k.jpg",
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
  {
    id: "basen-green-16kwh",
    slug: "basen-green-16kwh",
    nimi: "Basen Green BR-OW-LV16KWH — 51.2V 320Ah 16kWh akukomplekt",
    lyhikirjeldus: "Basen Green 16kWh LiFePO4 akukomplekt sisseehitatud BMS-iga. Suur mahtuvus, CAN/RS485, 10a garantii.",
    kategooria: "akud",
    hind: 2049,
    hind_vana: 2399,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/basen-green.jpg",
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
  }
];

// Kategooriate pealkirjad
const KATEGOORIAD = {
  "lifepo4": "LiFePO4 elemendid",
  "inverterid": "Hübriidinverterid",
  "akud": "Akud",
  "bms": "BMS"
};

// Ekspordi (kasutatakse teistes failides)
if (typeof module !== 'undefined') module.exports = { TOOTED, KATEGOORIAD };
