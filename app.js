"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("round-app");
    if (!root) {
        console.error("Kunde inte hitta elementet #round-app.");
        return;
    }

    const data = [
  {
    "id": "45765",
    "name": "Blodtrycksmätare",
    "brand": "OMRON",
    "model": "HEM-907",
    "purchase": "2006-10-31",
    "fu": "2024-05-13",
    "place": "DLM",
    "note": "Acc 2024"
  },
  {
    "id": "50887",
    "name": "BLODTRYCKSMÄTARE EL AMBULATORISK",
    "brand": "SPIRARE",
    "model": "ABPM",
    "purchase": "2009-05-08",
    "fu": "2024-02-06",
    "place": "DLM",
    "note": "Batt 2025"
  },
  {
    "id": "69487",
    "name": "BLODTRYCKSMÄTARE EL AMBULATORISK",
    "brand": "SPIRARE",
    "model": "ABPM",
    "purchase": "2018-12-12",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": "Batt 2024-02"
  },
  {
    "id": "71864",
    "name": "BLODTRYCKSMÄTARE EL AMBULATORISK",
    "brand": "SPIRARE",
    "model": "ABPM",
    "purchase": "2021-04-09",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": "Batt 2024-02"
  },
  {
    "id": "56347",
    "name": "BLODTRYCKSMÄTARE EL AMBULATORISK",
    "brand": "SPIRARE",
    "model": "ABPM",
    "purchase": "2012-03-01",
    "fu": "2025-05-29",
    "place": "DLM",
    "note": "Ej FU, varit hos leverntör"
  },
  {
    "id": "49202",
    "name": "CENTRIFUG BORDS-",
    "brand": "HETTICH",
    "model": "Universal 320",
    "purchase": "2008-05-05",
    "fu": "2019-01-24",
    "place": "DLM",
    "note": "Protokoll"
  },
  {
    "id": "75128",
    "name": "DEFIBRILLATOR AUTOMATISK",
    "brand": "Mindray",
    "model": "BeneHeart D1 Pro",
    "purchase": "2021-10-01",
    "fu": "",
    "place": "DLM",
    "note": "Kolla batt-status, larm"
  },
  {
    "id": "72712",
    "name": "DIATERMIAPPARAT KIRURGISK",
    "brand": "ERBE",
    "model": "VIO 100C",
    "purchase": "2020-01-09",
    "fu": "2025-06-10",
    "place": "DLM",
    "note": "Falun? Mora?"
  },
  {
    "id": "79345",
    "name": "EKG-SKRIVARE >4 KANALER",
    "brand": "SCHILLER",
    "model": "AT-102 G2",
    "purchase": "2021-11-19",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "67853",
    "name": "EKG-SKRIVARE >4 KANALER",
    "brand": "SCHILLER",
    "model": "AT-102 Plus",
    "purchase": "2018-02-28",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": "Batt 2023"
  },
  {
    "id": "20060",
    "name": "FIBERLJUSAGGREGAT",
    "brand": "HEINE",
    "model": "HK 4000",
    "purchase": "1995-09-26",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "20055",
    "name": "FIBERLJUSAGGREGAT",
    "brand": "HEINE",
    "model": "HK 4000",
    "purchase": "1995-08-30",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5428",
    "name": "FIBERLJUSAGGREGAT",
    "brand": "HEINE",
    "model": "HK 150-2 ENDO",
    "purchase": "1988-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "9186",
    "name": "FIBERLJUSAGGREGAT",
    "brand": "HEINE",
    "model": "HK 4000",
    "purchase": "1994-01-17",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "39289",
    "name": "INHALATOR TRANSPORT GAS",
    "brand": "MAXIN",
    "model": "MA3",
    "purchase": "2001-12-10",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101551",
    "name": "INHALATOR TRANSPORT GAS",
    "brand": "MAXIN",
    "model": "MA3",
    "purchase": "2023-01-24",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5343",
    "name": "INSTRUMENTVÄRMARE",
    "brand": "UMEDICO",
    "model": "VH 0005",
    "purchase": "1988-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71090",
    "name": "KORNEAL-/HORNHINNEMIKROSKOP",
    "brand": "KEELER",
    "model": "Symphony 40H",
    "purchase": "2020-01-07",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "38516",
    "name": "KORNEALFRÄS",
    "brand": "OCULUS",
    "model": "5319",
    "purchase": "1995-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "32378",
    "name": "LARYNXSPEGELVÄRMARE",
    "brand": "Okänd",
    "model": "11W",
    "purchase": "1985-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71762",
    "name": "MIKROSKOP OPERATIONS-",
    "brand": "ZEISS",
    "model": "OPMI PICO",
    "purchase": "2021-01-14",
    "fu": "2024-03-01",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5695",
    "name": "MIKROSKOP RUTIN-",
    "brand": "ZEISS",
    "model": "KF 2",
    "purchase": "1983-01-01",
    "fu": "2019-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5892",
    "name": "MIKROSKOP RUTIN-",
    "brand": "ZEISS",
    "model": "KF 2",
    "purchase": "1986-04-01",
    "fu": "2019-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "50548",
    "name": "OPERATÖRSSTOL",
    "brand": "MERCADO MEDIC",
    "model": "9100",
    "purchase": "2000-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": "Batt 2022-11"
  },
  {
    "id": "79860",
    "name": "PANNLAMPA KIRURGI-UNDERSÖKN",
    "brand": "HEINE",
    "model": "ML4 LED",
    "purchase": "2022-12-02",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "33617",
    "name": "PROVRÖRSVAGGA",
    "brand": "MIXER",
    "model": "820",
    "purchase": "1999-12-08",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5694",
    "name": "PROVRÖRSVAGGA",
    "brand": "LIC",
    "model": "440",
    "purchase": "1979-01-01",
    "fu": "2019-02-05",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101554",
    "name": "PROVTAGNINGSSTOL",
    "brand": "OSCAR",
    "model": "710",
    "purchase": "2024-01-08",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "49168",
    "name": "PROVTAGNINGSSTOL",
    "brand": "OSCAR",
    "model": "410",
    "purchase": "2008-04-21",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "47186",
    "name": "PROVTAGNINGSSTOL",
    "brand": "OSCAR",
    "model": "610",
    "purchase": "2008-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "47187",
    "name": "PROVTAGNINGSSTOL",
    "brand": "OSCAR",
    "model": "610",
    "purchase": "2008-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "40510",
    "name": "PROVTAGNINGSSTOL",
    "brand": "VEGORIA",
    "model": "PROVICA",
    "purchase": "2003-06-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "95318",
    "name": "SUG DRÄNAGE EL",
    "brand": "MEDELA",
    "model": "BASIC 03612",
    "purchase": "1997-03-18",
    "fu": "2023-05-03",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5412",
    "name": "SUG DRÄNAGE EL",
    "brand": "MEDELA",
    "model": "045 MEDIAN",
    "purchase": "1990-05-09",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "7867",
    "name": "SUG DRÄNAGE EL",
    "brand": "MEDELA",
    "model": "045 MEDIAN",
    "purchase": "1991-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "74465",
    "name": "SUG SVALG GAS",
    "brand": "QMT",
    "model": "Goliat slits O2 ",
    "purchase": "2021-08-10",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "60406",
    "name": "SUG SVALG GAS",
    "brand": "AGA",
    "model": "MS 33",
    "purchase": "2014-12-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71596",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO 6000",
    "purchase": "2020-12-03",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71812",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO 6000",
    "purchase": "2021-03-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101827",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO 6000",
    "purchase": "2024-04-12",
    "fu": "",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "69085",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO 6000",
    "purchase": "2018-08-14",
    "fu": "2019-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "56809",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO4000  TYP 6021",
    "purchase": "2012-07-02",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71633",
    "name": "TONOMETER",
    "brand": "ICARE",
    "model": "IC100",
    "purchase": "2020-03-23",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "20023",
    "name": "TONOMETER",
    "brand": "HAAG-STREIT",
    "model": "AT 900 R",
    "purchase": "1988-03-22",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT105737",
    "name": "ULTRALJUDSAPP BILDGIVANDE F URINBLÅSDIAGNOSTIK",
    "brand": "CubeScan",
    "model": "Biocon-700",
    "purchase": "2025-05-02",
    "fu": "",
    "place": "DLM",
    "note": "Ej FU"
  },
  {
    "id": "37150",
    "name": "ULTRALJUDSAPP BILDGIVANDE F URINBLÅSDIAGNOSTIK",
    "brand": "DU",
    "model": "BLADDERSCAN BVI 3000",
    "purchase": "2000-02-10",
    "fu": "2020-09-21",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71568",
    "name": "ULTRALJUDSAPP BILDGIVANDE F URINBLÅSDIAGNOSTIK",
    "brand": "CubeScan",
    "model": "Biocon-700",
    "purchase": "2020-03-04",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71089",
    "name": "UNDERSÖKNINGSBORD, EL",
    "brand": "Holmbergbordet",
    "model": "Eye2",
    "purchase": "2020-01-07",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "42883",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "SONESTA",
    "model": "6006",
    "purchase": "2004-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "65376",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "454",
    "purchase": "2016-12-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT100507",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "910 ELEKTRISK ",
    "purchase": "2023-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101553",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "910 ELEKTRISK ",
    "purchase": "2023-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT105369",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "910 ELEKTRISK ",
    "purchase": "2023-09-01",
    "fu": "",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71761",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2020-03-20",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101548",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2020-04-02",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101549",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2023-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101550",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2023-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT101552",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2023-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "51723",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "Sjöbloms",
    "model": "ELEKTR M CHOCKLÄGE o HJUL",
    "purchase": "2007-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "MT102781",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "EVAB",
    "model": "HYD HÖJ OCH SÄNKBAR",
    "purchase": "1994-01-01",
    "fu": "",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71763",
    "name": "UNDERSÖKNINGSLAMPA TAK",
    "brand": "Provita",
    "model": "5",
    "purchase": "2020-08-25",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "45921",
    "name": "Undersökningsstol gyn",
    "brand": "SONESTA",
    "model": "GYNBORD",
    "purchase": "2006-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "35213",
    "name": "Undersökningsstol gyn",
    "brand": "EVAB",
    "model": "GYNBORD",
    "purchase": "1994-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "37573",
    "name": "Undersökningsstol gyn",
    "brand": "EVAB",
    "model": "GYNBORD",
    "purchase": "1985-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "5949",
    "name": "VÅG BARN",
    "brand": "SECA",
    "model": "727",
    "purchase": "1988-01-01",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "36301",
    "name": "VÅG PERSON",
    "brand": "SECA",
    "model": "DELTA 707",
    "purchase": "1999-05-17",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "40551",
    "name": "VÅG PERSON",
    "brand": "SECA",
    "model": "770 ALPHA",
    "purchase": "2002-11-19",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "69557",
    "name": "VÅG PERSON",
    "brand": "Marsden",
    "model": "M-420",
    "purchase": "2019-02-22",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "79082",
    "name": "VÅG PERSON",
    "brand": "ADE",
    "model": "M320000",
    "purchase": "2021-05-07",
    "fu": "2024-02-02",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "71811",
    "name": "VÅG PERSON",
    "brand": "Marsden",
    "model": "M-420",
    "purchase": "2021-02-25",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "7866",
    "name": "VÅG PERSON",
    "brand": "SECA",
    "model": "708",
    "purchase": "1991-01-01",
    "fu": "2024-01-24",
    "place": "DLM",
    "note": ""
  },
  {
    "id": "65332",
    "name": "Blodtrycksmätare",
    "brand": "OMRON",
    "model": "HEM-907",
    "purchase": "2016-12-06",
    "fu": "2024-05-13",
    "place": "DSM",
    "note": "Acc 2024"
  },
  {
    "id": "49955",
    "name": "KALIBRERINGSSPRUTA LUFTVOLYM",
    "brand": "Hans Rudolph",
    "model": "3L",
    "purchase": "2008-12-08",
    "fu": "2019-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "40480",
    "name": "KOMPRESSIONSPUMP F CIRK-BEH",
    "brand": "HUNTLEIGH",
    "model": "FLOWTRON AC 200/2 HC",
    "purchase": "2002-10-04",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "42717",
    "name": "KOMPRESSIONSPUMP F CIRK-BEH",
    "brand": "HUNTLEIGH",
    "model": "FLOWTRON PLUS AC 200/2 SWE",
    "purchase": "2004-12-17",
    "fu": "2019-02-05",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "56345",
    "name": "KOMPRESSIONSPUMP F CIRK-BEH",
    "brand": "HUNTLEIGH",
    "model": "FLOWTRON AC 200/2 HC",
    "purchase": "2012-02-28",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "51975",
    "name": "TERMOMETER EL F PATIENT",
    "brand": "BRAUN",
    "model": "THERMOSCAN PRO4000  TYP 6021",
    "purchase": "2010-02-12",
    "fu": "2024-02-02",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "65375",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "454",
    "purchase": "2016-12-01",
    "fu": "2024-02-02",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "66284",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "454",
    "purchase": "2016-12-16",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "66285",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "454",
    "purchase": "2016-12-16",
    "fu": "2024-02-02",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "66286",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "454",
    "purchase": "2016-12-16",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "79220",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2021-03-11",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "50547",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "Sjöbloms",
    "model": "ELEKTR M CHOCKLÄGE o HJUL",
    "purchase": "2007-01-01",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "49755",
    "name": "VÅG PERSON",
    "brand": "SECA",
    "model": "704",
    "purchase": "2008-10-17",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "65328",
    "name": "ÖRONSPOL",
    "brand": "Okänd",
    "model": "EWACS",
    "purchase": "2016-12-05",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "49174",
    "name": "ÖRONSPOL",
    "brand": "Okänd",
    "model": "EWACS",
    "purchase": "2008-04-23",
    "fu": "2024-01-24",
    "place": "DSM",
    "note": ""
  },
  {
    "id": "MT105454",
    "name": "PROVTAGNINGSSTOL",
    "brand": "VEGORIA",
    "model": "FOTICA",
    "purchase": "2022-01-28",
    "fu": "2024-02-12",
    "place": "DIAB",
    "note": "Fotv. Märk upp slipen."
  },
  {
    "id": "MT105452",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2020-01-01",
    "fu": "",
    "place": "DIAB",
    "note": ""
  },
  {
    "id": "MT105453",
    "name": "UNDERSÖKNINGSBRITS F VUXEN",
    "brand": "OSCAR",
    "model": "915",
    "purchase": "2021-09-30",
    "fu": "2024-02-19",
    "place": "DIAB",
    "note": ""
  },
  {
    "id": "41166",
    "name": "VÅG PERSON",
    "brand": "SECA",
    "model": "771",
    "purchase": "2003-03-27",
    "fu": "2024-01-24",
    "place": "DIAB",
    "note": ""
  },
  {
    "id": "44368",
    "name": "VÅG PERSON",
    "brand": "Vetek",
    "model": "VB2-200-20",
    "purchase": "2005-12-21",
    "fu": "2024-01-24",
    "place": "DIAB",
    "note": ""
  },
  {
    "id": "5926",
    "name": "MIKROSKOP RUTIN-",
    "brand": "Olympus",
    "model": "CH-2",
    "purchase": "1991-02-22",
    "fu": "2024-02-02",
    "place": "UM",
    "note": ""
  },
  {
    "id": "51730",
    "name": "Undersökningsstol gyn",
    "brand": "OSCAR",
    "model": "481",
    "purchase": "2008-01-01",
    "fu": "2024-01-24",
    "place": "UM",
    "note": ""
  },
  {
    "id": "MT102358",
    "name": "Blodtrycksmätare",
    "brand": "OMRON",
    "model": "M4 INTELLI IT",
    "purchase": "2024-12-02",
    "fu": "",
    "place": "VC",
    "note": "Plac om"
  },
  {
    "id": "MT102359",
    "name": "Blodtrycksmätare",
    "brand": "OMRON",
    "model": "M4 INTELLI IT",
    "purchase": "2024-12-02",
    "fu": "",
    "place": "VC",
    "note": "Plac om"
  },
  {
    "id": "75874",
    "name": "DERMATOSKOP OPTISK",
    "brand": "HEINE",
    "model": "iC1",
    "purchase": "2022-01-01",
    "fu": "",
    "place": "VC",
    "note": "Kolla knappar"
  }
];

    const labels = {
        id: "Inv.nr",
        name: "Benämning",
        brand: "Fabrikat",
        model: "Modell",
        purchase: "Inköpsdatum",
        fu: "Senaste FU",
        place: "Placering",
        note: "Anmärkning"
    };

    let columns = ["id", "name", "brand", "model", "fu", "place", "note"];
    let page = 0;
    const pageSize = 10;
    let active = null;
    let reportCompleted = false;
    const records = {};

    const tools = [
        "Multimeter",
        "Elsäkerhetstestare",
        "Flödesmätare",
        "Tryckmätare",
        "Varvräknare",
        "Temperaturgivare",
        "Testlunga",
        "Vågvikter",
        "Ljudnivåmätare",
        "Optisk testare",
        "Batteritestare",
        "Annat"
    ];

    let selectedTools = new Set([
        "Multimeter",
        "Elsäkerhetstestare",
        "Flödesmätare",
        "Tryckmätare",
        "Temperaturgivare",
        "Batteritestare"
    ]);

    const $ = (selector) => root.querySelector(selector);

    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);

    function visibleColumns(view = "todo") {
        if (view === "done") return columns.filter((key) => key !== "note");
        return columns.filter((key) => key !== "note");
    }

    function columnTemplate(view = "todo") {
        const viewColumns = visibleColumns(view);
        const base = viewColumns.map((key) => {
            if (key === "id") return "var(--inventory-column-width, 110px)";
            if (key === "name") return "minmax(210px, 1.4fr)";
            if (key === "place") return "minmax(150px, 1.25fr)";
            return "minmax(120px, 1fr)";
        });
        if (view === "done") base.push("minmax(160px, 1fr)", "minmax(240px, 1.5fr)", "72px", "120px");
        return base.join(" ");
    }

    function renderHeader(element, view = "todo") {
        if (!element) return;
        const viewColumns = visibleColumns(view);
        element.style.setProperty("--cols", columnTemplate(view));
        element.innerHTML = viewColumns
            .map((key) => `<div class="cell">${escapeHtml(labels[key])}</div>`)
            .concat(view === "done" ? [
                '<div class="cell">Kondition</div>',
                '<div class="cell">Testutrustning</div>',
                '<div class="cell status-head" title="Anmärkning">Medd.</div>',
                '<div class="cell status-head">Åtgärd</div>'
            ] : [])
            .join("");
    }

    function getFilteredRows() {
        const input = $("#searchInput");
        const query = input ? input.value.trim().toLowerCase() : "";
        return data.filter((item) =>
            !records[item.id]?.done &&
            (!query || item.id.toLowerCase().includes(query))
        );
    }

    function createRow(item, view = "todo") {
        const viewColumns = visibleColumns(view);
        const record = records[item.id] || {};
        const comment = String(record.comment ?? "").trim();
        const note = String(item.note ?? "").trim();
        const hasMessage = Boolean(comment || note);
        const conditionLabel = [...$("#condition").options]
            .find((option) => option.value === record.condition)?.textContent || "–";
        const equipmentLabel = record.equipment?.join(", ") || "–";
        const statusCells = view === "done" ? `
            <div class="cell review-cell condition-cell" title="${escapeHtml(conditionLabel)}">${escapeHtml(conditionLabel)}</div>
            <div class="cell review-cell equipment-cell" title="${escapeHtml(equipmentLabel)}">${escapeHtml(equipmentLabel)}</div>
            <div class="cell status-cell note-status" title="${hasMessage ? escapeHtml(comment || note) : "Ingen anmärkning"}">
                ${hasMessage ? '<span class="message-icon" aria-label="Har anmärkning" title="Har anmärkning">&#128172;</span>' : '<span class="status-empty">–</span>'}
            </div>
            <div class="cell status-cell action-status" title="${record.action ? "Kräver åtgärd" : "Kräver inte åtgärd"}">
                <input class="action-indicator" type="checkbox" ${record.action ? "checked" : ""} tabindex="-1" aria-label="${record.action ? "Kräver åtgärd" : "Kräver inte åtgärd"}">
            </div>
        ` : "";
        return `
            <button
                type="button"
                class="trow ${view === "done" ? "done-row" : "todo-row"}"
                style="--cols: ${columnTemplate(view)}"
                data-id="${escapeHtml(item.id)}"
            >
                ${viewColumns.map((key) => `
                    <div
                        class="cell ${key === "id" ? "id" : ""}"
                        title="${escapeHtml(item[key])}"
                    >
                        ${escapeHtml(item[key] || "–")}
                    </div>
                `).join("")}
                ${statusCells}
            </button>
        `;
    }

    function render() {
        renderHeader($("#todoHead"), "todo");
        renderHeader($("#doneHead"), "done");

        const list = getFilteredRows();
        const pages = Math.max(1, Math.ceil(list.length / pageSize));
        page = Math.max(0, Math.min(page, pages - 1));

        const visibleRows = list.slice(page * pageSize, (page + 1) * pageSize);
        const todoRows = $("#todoRows");
        todoRows.innerHTML = visibleRows.length
            ? visibleRows.map((item) => createRow(item, "todo")).join("")
            : '<div class="empty">Inga rader matchar sökningen.</div>';

        const first = list.length ? page * pageSize + 1 : 0;
        const last = Math.min((page + 1) * pageSize, list.length);
        $("#todoInfo").textContent = list.length
            ? `Visar ${first}–${last} av ${list.length} kvar`
            : "0 rader kvar";
        $("#pageText").textContent = `Sida ${page + 1} av ${pages}`;
        $("#prevBtn").disabled = page === 0;
        $("#nextBtn").disabled = page >= pages - 1;

        const done = data.filter((item) => records[item.id]?.done);
        $("#doneRows").innerHTML = done.length
            ? done.map((item) => createRow(item, "done")).join("")
            : '<div class="empty">Inga rader har bearbetats ännu.</div>';
        $("#doneBadge").textContent = `${done.length} klara`;
        $("#doneTabBadge").textContent = done.length;
        $("#todoBadge").textContent = data.length - done.length;
        $("#progressText").textContent = `${done.length} av ${data.length}`;
        $("#progressFill").style.width = `${data.length ? (done.length / data.length) * 100 : 0}%`;

        const allRowsDone = data.length > 0 && done.length === data.length;
        [$("#completeReportTodo"), $("#completeReportDone")].forEach((button) => {
            if (!button) return;
            button.hidden = !allRowsDone;
            button.disabled = reportCompleted;
            button.textContent = reportCompleted ? "Rapport klarmarkerad" : "Klarmarkera rapport";
        });

        bindRowEvents();
    }

    function bindRowEvents() {
        root.querySelectorAll(".trow[data-id]").forEach((button) => {
            button.addEventListener("click", () => openItem(button.dataset.id));
        });
    }

    function openItem(id) {
        active = data.find((item) => item.id === id);
        if (!active) return;

        const record = records[id] || {};
        $("#modalTitle").textContent = active.name;
        $("#modalId").textContent = `Inventarie-id ${active.id}`;
        $("#itemSummary").innerHTML = `
            <div>Fabrikat<b>${escapeHtml(active.brand || "–")}</b></div>
            <div>Modell<b>${escapeHtml(active.model || "–")}</b></div>
            <div>Placering<b>${escapeHtml(active.place || "–")}</b></div>
        `;
        $("#needsAction").checked = Boolean(record.action);
        $("#isDone").checked = Boolean(record.done);
        $("#comment").value = record.comment ?? active.note;
        $("#condition").value = record.condition || "3";
        renderEquipment(record.equipment || []);
        $("#overlay").classList.add("open");
    }

    function renderEquipment(chosen = []) {
        const container = $("#equipmentOptions");
        if (selectedTools.size === 0) {
            container.innerHTML = "<span>Välj verktyg under Inställningar.</span>";
            return;
        }
        container.innerHTML = [...selectedTools].map((tool) => `
            <label>
                <input
                    type="checkbox"
                    value="${escapeHtml(tool)}"
                    ${chosen.includes(tool) ? "checked" : ""}
                >
                ${escapeHtml(tool)}
            </label>
        `).join("");
    }

    function closeModal() {
        active = null;
        $("#overlay").classList.remove("open");
    }

    let toastTimer = null;
    function showToast(message) {
        const toast = $("#toast");
        toast.textContent = message;
        toast.style.display = "block";
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.style.display = "none";
        }, 1800);
    }

    function renderSettings() {
        const box = $("#columnList");
        box.innerHTML = columns.map((key, index) => `
            <div class="column-item">
                <span>${escapeHtml(labels[key])}</span>
                <button
                    type="button"
                    class="tiny up"
                    data-index="${index}"
                    ${index === 0 ? "disabled" : ""}
                    aria-label="Flytta ${escapeHtml(labels[key])} uppåt"
                >↑</button>
                <button
                    type="button"
                    class="tiny down"
                    data-index="${index}"
                    ${index === columns.length - 1 ? "disabled" : ""}
                    aria-label="Flytta ${escapeHtml(labels[key])} nedåt"
                >↓</button>
            </div>
        `).join("");

        box.querySelectorAll(".up").forEach((button) => {
            button.addEventListener("click", () => moveColumn(Number(button.dataset.index), -1));
        });
        box.querySelectorAll(".down").forEach((button) => {
            button.addEventListener("click", () => moveColumn(Number(button.dataset.index), 1));
        });

        $("#toolGrid").innerHTML = tools.map((tool) => `
            <label>
                <input
                    type="checkbox"
                    value="${escapeHtml(tool)}"
                    ${selectedTools.has(tool) ? "checked" : ""}
                >
                ${escapeHtml(tool)}
            </label>
        `).join("");
    }

    function moveColumn(index, direction) {
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= columns.length) return;
        [columns[index], columns[newIndex]] = [columns[newIndex], columns[index]];
        renderSettings();
        render();
    }

    let lastListView = "todo";

    function showView(viewName) {
        if (viewName === "todo" || viewName === "done") {
            lastListView = viewName;
        }

        root.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
        const targetView = $(`#view-${viewName}`);
        if (targetView) targetView.classList.add("active");

        root.querySelectorAll(".view-tab[data-view]").forEach((button) => {
            const isActive = button.dataset.view === viewName;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", String(isActive));
        });

        const settingsButton = $("#settingsBtn");
        if (settingsButton) settingsButton.classList.toggle("active", viewName === "settings");

        const description = $("#viewDescription");
        if (description) {
            if (viewName === "todo") description.textContent = "Välj en rad för att registrera kontrollen";
            if (viewName === "done") description.textContent = "Kontroller som har markerats som klara";
            if (viewName === "settings") description.textContent = "Anpassa rondvyn och formulärets verktygslista";
        }

        if (viewName === "settings") renderSettings();
    }

    root.querySelectorAll("[data-view]").forEach((button) => {
        button.addEventListener("click", () => showView(button.dataset.view));
    });

    $("#backFromSettings").addEventListener("click", () => showView(lastListView));

    $("#searchInput").addEventListener("input", () => {
        page = 0;
        render();
    });

    $("#prevBtn").addEventListener("click", () => {
        page = Math.max(0, page - 1);
        render();
    });

    $("#nextBtn").addEventListener("click", () => {
        page += 1;
        render();
    });

    $("#closeModal").addEventListener("click", closeModal);
    $("#cancelModal").addEventListener("click", closeModal);
    $("#overlay").addEventListener("click", (event) => {
        if (event.target === $("#overlay")) closeModal();
    });


    function completeReport() {
        const doneCount = data.filter((item) => records[item.id]?.done).length;
        if (doneCount !== data.length || data.length === 0) return;
        reportCompleted = true;
        render();
        showToast("Rapporten är klarmarkerad");
    }

    [$("#completeReportTodo"), $("#completeReportDone")].forEach((button) => {
        if (button) button.addEventListener("click", completeReport);
    });
    $("#itemForm").addEventListener("submit", (event) => {
        event.preventDefault();
        if (!active) return;

        const id = active.id;
        records[id] = {
            action: $("#needsAction").checked,
            done: $("#isDone").checked,
            comment: $("#comment").value.trim(),
            condition: $("#condition").value,
            equipment: [...$("#equipmentOptions").querySelectorAll("input:checked")]
                .map((input) => input.value)
        };

        const wasDone = records[id].done;
        closeModal();
        render();
        showToast(wasDone
            ? "Kontrollen sparades och flyttades till Bearbetade"
            : "Uppgifterna sparades"
        );
    });

    $("#saveSettings").addEventListener("click", () => {
        selectedTools = new Set(
            [...$("#toolGrid").querySelectorAll("input:checked")].map((input) => input.value)
        );
        $("#savedMessage").textContent = `Sparat. ${selectedTools.size} verktyg visas i formuläret.`;
        setTimeout(() => {
            $("#savedMessage").textContent = "";
        }, 2500);
    });

    $("#voiceBtn").addEventListener("click", () => {
        showToast("Röstsökning är visualiserad i prototypen");
    });

    let scannerControls = null;
    let ocrWorker = null;
    let ocrReading = false;
    let ocrTimer = null;

    async function stopScanner() {
        if (scannerControls) {
            scannerControls.stop();
            scannerControls = null;
        }
        if (ocrTimer) {
            clearInterval(ocrTimer);
            ocrTimer = null;
        }
        document.getElementById("scannerOverlay")?.remove();
    }

    function normalizeInventoryValue(value) {
        return String(value || "").toUpperCase().replace(/\s+/g, "").trim();
    }

    function findInventoryId(value) {
        const cleaned = normalizeInventoryValue(value);
        if (!cleaned) return "";
        const exact = data.find((item) => normalizeInventoryValue(item.id) === cleaned);
        if (exact) return exact.id;
        const embedded = data.find((item) => cleaned.includes(normalizeInventoryValue(item.id)));
        return embedded?.id || cleaned.match(/MT\d{5,8}|\d{4,8}/)?.[0] || "";
    }

    function useScannedValue(rawValue) {
        const scannedValue = findInventoryId(rawValue);
        if (!scannedValue) return false;
        $("#searchInput").value = scannedValue;
        page = 0;
        render();
        stopScanner();
        $("#searchInput").focus();
        showToast(`Söker efter ${scannedValue}`);
        return true;
    }

    async function readInventoryText() {
        const status = document.getElementById("scannerStatus");
        const video = document.getElementById("scannerVideo");
        if (!window.Tesseract) {
            status.textContent = "Textläsningen kunde inte laddas.";
            return;
        }
        if (!video || video.readyState < 2) {
            status.textContent = "Kameran är inte redo ännu.";
            return;
        }
        if (ocrReading) return;
        ocrReading = true;
        status.textContent = "Söker efter kod eller inventarienummer…";
        try {
            const canvas = document.createElement("canvas");
            const vw = video.videoWidth;
            const vh = video.videoHeight;
            const cropW = Math.round(vw * 0.80);
            const cropH = Math.round(vh * 0.34);
            const sx = Math.round((vw - cropW) / 2);
            const sy = Math.round((vh - cropH) / 2);
            canvas.width = cropW;
            canvas.height = cropH;
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            ctx.drawImage(video, sx, sy, cropW, cropH, 0, 0, cropW, cropH);
            const image = ctx.getImageData(0, 0, cropW, cropH);
            const d = image.data;
            for (let i = 0; i < d.length; i += 4) {
                const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
                const level = gray > 150 ? 255 : 0;
                d[i] = d[i + 1] = d[i + 2] = level;
            }
            ctx.putImageData(image, 0, 0);
            if (!ocrWorker) {
                ocrWorker = await Tesseract.createWorker("eng");
                await ocrWorker.setParameters({
                    tessedit_char_whitelist: "MT0123456789 ",
                    preserve_interword_spaces: "1"
                });
            }
            const result = await ocrWorker.recognize(canvas);
            const text = result.data.text || "";
            const id = findInventoryId(text);
            if (id) {
                useScannedValue(id);
                return;
            }
            status.textContent = "Kunde inte läsa numret. Håll etiketten nära och centrerad och försök igen.";
        } catch (error) {
            console.error("OCR-fel:", error);
            status.textContent = "Kunde inte läsa inventarienumret. Försök igen.";
        } finally {
            ocrReading = false;
        }
    }

    async function startScanner() {
        if (document.getElementById("scannerOverlay")) return;
        const overlay = document.createElement("div");
        overlay.id = "scannerOverlay";
        overlay.className = "scanner-overlay";
        overlay.innerHTML = `
            <section class="scanner-dialog" role="dialog" aria-modal="true" aria-labelledby="scannerTitle">
                <header class="scanner-header">
                    <div>
                        <span class="scanner-kicker">MT ROND</span>
                        <h2 id="scannerTitle">Skanna inventarie</h2>
                        <p>Rikta kameran mot kod eller inventarienummer. Läsningen sker automatiskt.</p>
                    </div>
                    <button type="button" class="scanner-close" id="scannerClose" aria-label="Stäng">×</button>
                </header>
                <div class="scanner-camera-shell">
                    <video id="scannerVideo" autoplay playsinline muted></video>
                    <div class="scanner-shade"></div>
                    <div class="scanner-target" aria-hidden="true">
                        <span class="scanner-corner tl"></span><span class="scanner-corner tr"></span>
                        <span class="scanner-corner bl"></span><span class="scanner-corner br"></span>
                    </div>
                    <div class="scanner-camera-label">Placera kod eller inventarienummer här</div>
                </div>
                <div class="scanner-status-row">
                    <span class="scanner-status-dot" aria-hidden="true"></span>
                    <p id="scannerStatus" aria-live="polite">Startar kameran…</p>
                </div>
                <div class="scanner-actions">
                    <button type="button" class="scanner-cancel-button" id="scannerCancel">Avbryt</button>
                </div>
            </section>`;
        document.body.appendChild(overlay);
        const status = document.getElementById("scannerStatus");
        const video = document.getElementById("scannerVideo");
        document.getElementById("scannerClose").addEventListener("click", stopScanner);
        document.getElementById("scannerCancel").addEventListener("click", stopScanner);
        overlay.addEventListener("click", (event) => { if (event.target === overlay) stopScanner(); });
        if (!window.ZXingBrowser) {
            status.textContent = "ZXing kunde inte laddas. Kontrollera internetanslutningen.";
            return;
        }
        try {
            const devices = await ZXingBrowser.BrowserCodeReader.listVideoInputDevices();
            if (!devices.length) {
                status.textContent = "Ingen kamera hittades.";
                return;
            }
            const selectedDevice = devices[devices.length - 1];
            const reader = new ZXingBrowser.BrowserMultiFormatReader();
            status.textContent = "Kameran är redo – söker efter kod";
            scannerControls = await reader.decodeFromVideoDevice(selectedDevice.deviceId, video, (result, error, controls) => {
                if (controls && !scannerControls) scannerControls = controls;
                if (result) useScannedValue(result.getText());
            });
            ocrTimer = setInterval(() => {
                if (document.getElementById("scannerOverlay") && !ocrReading) readInventoryText();
            }, 1800);
        } catch (error) {
            console.error("ZXing/kamerafel:", error);
            status.textContent = error?.name === "NotAllowedError"
                ? "Kameraåtkomst nekades. Tillåt kameran och försök igen."
                : "Kameran kunde inte starta.";
        }
    }

    $("#scanBtn").addEventListener("click", startScanner);

    renderSettings();
    render();
});
