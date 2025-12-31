import { reactive } from "vue";

export const store = reactive({
  endpoints: {},
});

export const siteMeta = {
  siteName: "Gruppo Insubrico di Ornitologia",
  siteUrl: "https://gruppoinsubrico.com/",
  defaultImage: "",
};

export const metaDescriptions = {
  Homepage: {
    title: "Home",
    description:
      "Benvenuti nel sito del Gruppo Insubrico Ornitologico. Scopri le nostre attività di ricerca e conservazione.",
    image: null, // usa l'immagine di default
  },
  AboutUs: {
    title: "Chi Siamo",
    description:
      "Scopri chi siamo, la nostra storia e la missione del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  ScientificOutreach: {
    title: "Divulgazione",
    description:
      "Conferenze, corsi e eventi organizzati dal Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Socials: {
    title: "Social",
    description:
      "Seguici sui social media per restare aggiornato sulle nostre attività.",
    image: null,
  },
  Links: {
    title: "Link Utili",
    description: "Link utili e risorse per l'ornitologia ed il birdwatching.",
    image: null,
  },
  News: {
    title: "Notizie",
    description:
      "Ultime notizie e aggiornamenti dal Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Projects: {
    title: "Progetti",
    description:
      "I progetti di ricerca e conservazione del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Publications: {
    title: "Pubblicazioni",
    description: "Pubblicazioni divulgative del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  default: {
    title: "Home",
    description:
      "Gruppo Insubrico Ornitologico - Associazione per lo studio e la conservazione degli uccelli.",
    image: null,
  },
};

export const cookies = {
  text: "Non collezioniamo cookie.",
};

export const links = {
  ornithology: {
    1: {
      title: "Ornitho Italia",
      href: "https://www.ornitho.it",
    },
    2: {
      title: "Centro Italiano Studi Ornitologici",
      href: "https://www.ciso-coi.org",
    },
    3: {
      title: "Gruppo Piemontese Studi Ornitologici",
      href: "https://www.gpso.it",
    },
    4: {
      title: "CROS Varenna",
      href: "http://www.crosvarenna.it",
    },
    5: {
      title: "Gruppo Ornitologico Lombardo",
      href: "http://www.gol-onlus.it",
    },
    6: {
      title: "Associazione Ornitologi Emilia Romagna",
      href: "https://www.asoer.org",
    },
    7: {
      title: "Associazione Faunisti Veneti",
      href: "https://www.faunistiveneti.it",
    },
    8: {
      title:
        "Associazione Studi Ornitologici e Ricerche Ecologiche Friuli Venezia Giulia",
      href: "https://astorefvg.org",
    },
    9: {
      title: "Gruppo Ricerche Avifauna - Brescia",
      href: "https:/www.grupporicercheavifauna.it",
    },
    10: {
      title: "European Bird Census Council",
      href: "https://www.ebcc.info",
    },
    11: {
      title: "Vogelwarte Sempach (CH)",
      href: "https://www.vogelwarte.ch",
    },
    12: {
      title: "Ornitho - Svizzera",
      href: "https://www.ornitho.ch",
    },
    13: {
      title: "Ficedula (CH)",
      href: "https://www.ficedula.ch",
    },
    14: {
      title: "British Trust for Ornithology",
      href: "https://www.bto.org",
    },
    15: {
      title: "Institut Català d'Ornitologia",
      href: "https://www.ornitologia.org",
    },
    16: {
      title: "Società di Scienze Naturali del Verbano-Cusio-Ossola",
      href: "http://www.scienzenaturalivco.org",
    },
  },
  birdwatching: {
    1: {
      title: "EBN Italia",
      href: "https://www.ebnitalia.it",
    },
    2: {
      title: "Birdin' Lombardia",
      href: "https://www.birdinlombardia.it",
    },
    3: {
      title: "Cuneo Birding",
      href: "http://www.cuneobirding.it",
    },
    4: {
      title: "Liguria Birding",
      href: "https://www.liguriabirding.net",
    },
  },
  nature: {
    1: {
      title: "Lega Italiana Protezione Uccelli",
      href: "https://www.lipu.it",
    },
    2: {
      title: "World Wildlife Fund",
      href: "https://www.wwf.it",
    },
    3: {
      title: "BirdLife International",
      href: "https://www.birdlife.org",
    },
    4: {
      title: "RSPB - UK",
      href: "https://www.rspb.org.uk",
    },
    5: {
      title: "NABU - Germania",
      href: "https://www.nabu.de",
    },
    6: {
      title: "Ligue pour la Protection des Oiseaux",
      href: "https://www.lpo.fr",
    },
    7: {
      title: "Lega Abolizione Caccia",
      href: "https://www.abolizionecaccia.it",
    },
    8: {
      title: "Viaggiatori per natura",
      href: "https://www.animal-trip.com",
    },
  },
};
