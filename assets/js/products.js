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
    lyhikirjeldus: "A-klassi EVE MB31 elemendid — 3.2V / 314Ah. Ideaalne koduseks energiasalvestuseks.",
    kategooria: "lifepo4",
    hind: 1450,
    hind_vana: 1550,
    stripe_price_id: "LISA_SIIA", // <- Stripe Price ID, nt "price_1ABC..."
    pilt: "assets/pildid/eve-mb31.jpg",
    ladu: true,
    eelmyyk: true,
    specs: {
      "Keemia": "LiFePO4",
      "Mahtuvus": "314 Ah",
      "Nominaalpinge": "3.2 V",
      "Komplektis": "16 tk",
      "Tootja": "EVE",
      "Klass": "A-klass",
      "Tarne": "2–4 nädalat (eelmüük)"
    },
    kirjeldus: `
      <p>Uued EVE MB31 (314Ah) LiFePO4 prismaatilised elemendid — tellitud otse ametlikult edasimüüjalt. A-klassi tooted, testitud ja sertifitseeritud.</p>
      <p>16 elemendiga komplekt sobib ideaalselt 48V / ~15kWh koduse energiasalvestuse ehitamiseks koos hübriidinverteriga.</p>
      <ul>
        <li>Otse EVE ametlikult edasimüüjalt — ei mingeid B-klass tooteid</li>
        <li>Komplektiga kaasas tehase testiraport</li>
        <li>Sobib: Deye, Huawei, Growatt jt inverteritega</li>
      </ul>
      <p><strong>NB:</strong> Tegemist on eelmüügiga. Tarne 2–4 nädalat.</p>
    `
  },
  {
    id: "jk-bms-150a-1a",
    slug: "jk-bms-150a-1a",
    nimi: "JK (Jikong) BMS 8S–24S 150A — 1A aktiivne balanss",
    lyhikirjeldus: "Professionaalne BMS aktiivse balanseerimisega. Sobib 8S kuni 24S LiFePO4 akupankadele.",
    kategooria: "bms",
    hind: 130,
    hind_vana: null,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/jk-bms.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "JK / Jikong",
      "Voolutugevus": "150 A",
      "Ühilduvus": "8S – 24S",
      "Balanss": "Aktiivne 1A",
      "Liides": "Bluetooth + App",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>JK (Jikong) BMS on üks populaarsemaid ja usaldusväärsemaid BMS-e DIY energiasalvestusprojektides üle maailma.</p>
      <ul>
        <li>Aktiivne balanseerimine 1A — kaitseb elementi üle- ja alakoormusest</li>
        <li>Bluetooth ühendus + tasuta mobiilirakendus (iOS / Android)</li>
        <li>Toetab 8S kuni 24S konfiguratsioone</li>
        <li>Sobib: EVE, CATL, Basen jt LiFePO4 elementidega</li>
      </ul>
    `
  },
  {
    id: "jk-bms-150a-2a",
    slug: "jk-bms-150a-2a",
    nimi: "JK (Jikong) BMS 8S–24S 150A — 2A aktiivne balanss",
    lyhikirjeldus: "Võimsama 2A balanseerimisega JK BMS. Kiirem balanseerimine suurematele akupankadele.",
    kategooria: "bms",
    hind: 155,
    hind_vana: null,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/jk-bms.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "JK / Jikong",
      "Voolutugevus": "150 A",
      "Ühilduvus": "8S – 24S",
      "Balanss": "Aktiivne 2A",
      "Liides": "Bluetooth + App",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>JK BMS 2A balanseerimisega versioon — ideaalne suurematele akupankadele, kus kiirem balanseerimine on oluline.</p>
      <ul>
        <li>Aktiivne balanseerimine 2A — 2× kiirem kui 1A versioon</li>
        <li>Bluetooth ühendus + tasuta mobiilirakendus (iOS / Android)</li>
        <li>Toetab 8S kuni 24S konfiguratsioone</li>
      </ul>
    `
  },
  {
    id: "huawei-sun2000-4-6ktl",
    slug: "huawei-sun2000-4-6ktl",
    nimi: "Huawei SUN2000-4.6KTL-L1 hübriidinverter",
    lyhikirjeldus: "Huawei 4.6kW 1-faasiline hübriidinverter koos Luna2000 akusüsteemi toega.",
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
      "Aku liides": "Luna2000 / CAN",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Huawei SUN2000-4.6KTL-L1 on professionaalne 1-faasiline hübriidinverter, mis on ühilduv Huawei Luna2000 akusüsteemiga.</p>
      <ul>
        <li>Madal käivituspinge — töötab ka pilvistel päevadel</li>
        <li>Integreeritud MPPT laadimiskontroller</li>
        <li>Ühilduv: Huawei Luna2000 akudega</li>
        <li>Monitooring Huawei FusionSolar äpi kaudu</li>
      </ul>
    `
  },
  {
    id: "dyness-powerbrick-pro-14kwh",
    slug: "dyness-powerbrick-pro-14kwh",
    nimi: "Dyness PowerBrick Pro 14.336kWh LiFePO4 aku (IP65)",
    lyhikirjeldus: "Kaitstud IP65 korpusega Dyness PowerBrick Pro — sobib nii sise- kui välitingimustes kasutamiseks.",
    kategooria: "akud",
    hind: 2540,
    hind_vana: 2700,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/dyness-powerbrick-pro.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V / 280 Ah",
      "Kaitseklass": "IP65",
      "Keemia": "LiFePO4",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick Pro on täielikult integreeritud LiFePO4 energiasalvestusseade IP65 kaitseklassiga — sobib nii keldri, garaaži kui välitingimustesse.</p>
      <ul>
        <li>IP65 kaitseklass — tolmu- ja veekindel</li>
        <li>Sisseehitatud BMS</li>
        <li>Ühilduv: Deye, Goodwe, Huawei, Growatt jt inverteritega</li>
        <li>10 aasta garantii</li>
      </ul>
    `
  },
  {
    id: "dyness-powerbrick-14kwh",
    slug: "dyness-powerbrick-14kwh",
    nimi: "Dyness PowerBrick 14.336kWh LiFePO4 aku (51.2V / 280Ah)",
    lyhikirjeldus: "Dyness PowerBrick — usaldusväärne 14.336kWh LiFePO4 energiasalvestus kodule.",
    kategooria: "akud",
    hind: 2435,
    hind_vana: 2500,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/dyness-powerbrick.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Dyness",
      "Mahtuvus": "14.336 kWh",
      "Pinge": "51.2 V / 280 Ah",
      "Keemia": "LiFePO4",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Dyness PowerBrick on populaarne valik koduse päikeseenergia salvestamiseks — sisseehitatud BMS, lihtne paigaldus ja lai ühilduvus.</p>
      <ul>
        <li>Sisseehitatud BMS ja aktiivne balanseerimine</li>
        <li>Laia inverterite toega: Deye, Goodwe, Huawei jt</li>
        <li>10 aasta garantii</li>
        <li>Laos Eestis — kiire tarne</li>
      </ul>
    `
  },
  {
    id: "deye-sun-6k",
    slug: "deye-sun-6k",
    nimi: "Deye SUN-6K-SG05LP3-EU — 6kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 6kW kolmefaasiline hübriidinverter 48V akusüsteemiga. Madalpinge (48V) — koduakudega ühilduv.",
    kategooria: "inverterid",
    hind: 2090,
    hind_vana: 2320,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-6k.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Võimsus": "6 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48 V (madalpinge)",
      "MPPT": "2× MPPT",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-6K-SG05LP3-EU on kolmefaasiline hübriidinverter, mis töötab madalpinge (48V) akusüsteemiga — ühilduv Dyness, Basen jt populaarsete akudega.</p>
      <ul>
        <li>3-faasiline — sobib majaomanikele kolmefaasilise liitumisega</li>
        <li>Madalpinge 48V aku — lai akude valik</li>
        <li>2× MPPT laadimiskontroller</li>
        <li>Ühilduv: Dyness PowerBrick, Basen jt akudega</li>
      </ul>
    `
  },
  {
    id: "deye-sun-10k",
    slug: "deye-sun-10k",
    nimi: "Deye SUN-10K-SG05LP3-EU — 10kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 10kW kolmefaasiline hübriidinverter suurtele majapidamistele.",
    kategooria: "inverterid",
    hind: 2150,
    hind_vana: 2500,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-10k.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Võimsus": "10 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48 V (madalpinge)",
      "MPPT": "2× MPPT",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Deye SUN-10K — 10kW kolmefaasiline hübriidinverter suuremate majapidamiste ja väikeettevõtete tarvis.</p>
      <ul>
        <li>10kW pidev väljundvõimsus</li>
        <li>Madalpinge 48V aku</li>
        <li>2× MPPT laadimiskontroller</li>
        <li>Lai ühilduvus akudega</li>
      </ul>
    `
  },
  {
    id: "deye-sun-12k",
    slug: "deye-sun-12k",
    nimi: "Deye SUN-12K-SG05LP3-EU — 12kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 12kW kolmefaasiline hübriidinverter suurtele päikesejaamadele.",
    kategooria: "inverterid",
    hind: 2180,
    hind_vana: 2255,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-12k.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Võimsus": "12 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48 V (madalpinge)",
      "MPPT": "2× MPPT",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `<p>Deye SUN-12K — 12kW võimsusega hübriidinverter suurema tootmisvõimsusega päikesejaamadele.</p>
      <ul><li>12kW pidev väljundvõimsus</li><li>Madalpinge 48V aku</li><li>2× MPPT</li></ul>`
  },
  {
    id: "deye-sun-15k",
    slug: "deye-sun-15k",
    nimi: "Deye SUN-15K-SG05LP3-EU — 15kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 15kW professionaalne kolmefaasiline hübriidinverter.",
    kategooria: "inverterid",
    hind: 2450,
    hind_vana: 2540,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-15k.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Võimsus": "15 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48 V (madalpinge)",
      "MPPT": "2× MPPT",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `<p>Deye SUN-15K — 15kW professionaalne hübriidinverter äri- ja suurmajapiidamistele.</p>
      <ul><li>15kW pidev väljundvõimsus</li><li>Madalpinge 48V aku</li><li>2× MPPT</li></ul>`
  },
  {
    id: "deye-sun-20k",
    slug: "deye-sun-20k",
    nimi: "Deye SUN-20K-SG05LP3-EU — 20kW 3-faasiline hübriidinverter",
    lyhikirjeldus: "Deye 20kW tippklassi kolmefaasiline hübriidinverter suurtele projektidele.",
    kategooria: "inverterid",
    hind: 3250,
    hind_vana: 3380,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/deye-20k.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Deye",
      "Võimsus": "20 kW",
      "Faasid": "3-faasiline",
      "Akupinge": "48 V (madalpinge)",
      "MPPT": "2× MPPT",
      "Garantii": "5 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `<p>Deye SUN-20K — 20kW tippklassi hübriidinverter suurtele kaubandus- ja tootmisettevõtetele.</p>
      <ul><li>20kW pidev väljundvõimsus</li><li>Madalpinge 48V aku</li><li>2× MPPT</li></ul>`
  },
  {
    id: "basen-green-16kwh",
    slug: "basen-green-16kwh",
    nimi: "Basen Green BR-OW-LV16KWH — 51.2V 320Ah 16kWh akukomplekt",
    lyhikirjeldus: "Basen Green 16kWh LiFePO4 akukomplekt sisseehitatud BMS-iga. Suur mahtuvus kodule.",
    kategooria: "akud",
    hind: 2049,
    hind_vana: 2399,
    stripe_price_id: "LISA_SIIA",
    pilt: "assets/pildid/basen-green.jpg",
    ladu: true,
    eelmyyk: false,
    specs: {
      "Tootja": "Basen",
      "Mahtuvus": "16 kWh",
      "Pinge": "51.2 V / 320 Ah",
      "Keemia": "LiFePO4",
      "BMS": "Sisseehitatud",
      "Garantii": "10 aastat",
      "Tarne": "3–7 tööpäeva"
    },
    kirjeldus: `
      <p>Basen Green BR-OW-LV16KWH on 16kWh mahtuvusega LiFePO4 akukomplekt, mis sisaldab kõike vajalikku — elemendid, BMS ja korpus ühes pakendis.</p>
      <ul>
        <li>16kWh — suur mahtuvus suurema koduse tarbimise katmiseks</li>
        <li>Sisseehitatud professionaalne BMS</li>
        <li>Ühilduv: Deye, Goodwe, SolarEdge jt inverteritega</li>
        <li>10 aasta garantii</li>
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
