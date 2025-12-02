import {reactive} from 'vue';

export const store = reactive({
    
    endpoints: {
    }
});

// export const metaDescriptions = {
//   default: "Gruppo Insubrico Ornitologico - Associazione per lo studio e la conservazione degli uccelli.",
//   Homepage: "Benvenuti nel sito del Gruppo Insubrico Ornitologico. Scopri le nostre attività di ricerca e conservazione.",
//   AboutUs: "Scopri chi siamo, la nostra storia e la missione del Gruppo Insubrico Ornitologico.",
//   Birds: "Esplora le specie di uccelli presenti nel nostro territorio e le schede identificative.",
//   ConferencesCourses: "Conferenze, corsi ed eventi organizzati dal Gruppo Insubrico Ornitologico.",
//   Socials: "Seguici sui social media per restare aggiornato sulle nostre attività.",
//   Links: "Link utili e risorse per l'ornitologia ed il birdwatching.",
//   News: "Ultime notizie e aggiornamenti dal Gruppo Insubrico Ornitologico.",
//   Projects: "I progetti del Gruppo Insubrico Ornitologico.",
//   Publications: "Pubblicazioni divulgative del Gruppo Insubrico Ornitologico."
// };

export const siteMeta = {
  siteName: "Gruppo Insubrico di Ornitologia",
  siteUrl: "https://gruppoinsubrico.com/",
  defaultImage: ""
};

export const metaDescriptions = {
  Homepage: {
    title: "Home",
    description: "Benvenuti nel sito del Gruppo Insubrico Ornitologico. Scopri le nostre attività di ricerca e conservazione.",
    image: null, // usa l'immagine di default
  },
  AboutUs: {
    title: "Chi Siamo",
    description: "Scopri chi siamo, la nostra storia e la missione del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Birds: {
    title: "Uccelli",
    description: "Esplora le specie di uccelli presenti nel nostro territorio.",
    image: "", // Immagine specifica per questa pagina
  },
  ConferencesCourses: {
    title: "Conferenze e Corsi",
    description: "Conferenze, corsi e eventi organizzati dal Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Socials: {
    title: "Social",
    description: "Seguici sui social media per restare aggiornato sulle nostre attività.",
    image: null,
  },
  Links: {
    title: "Link Utili",
    description: "Link utili e risorse per l'ornitologia ed il birdwatching.",
    image: null,
  },
  News: {
    title: "Notizie",
    description: "Ultime notizie e aggiornamenti dal Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Projects: {
    title: "Progetti",
    description: "I progetti di ricerca e conservazione del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  Publications: {
    title: "Pubblicazioni",
    description: "Pubblicazioni divulgative del Gruppo Insubrico Ornitologico.",
    image: null,
  },
  default: {
    title: "Home",
    description: "Gruppo Insubrico Ornitologico - Associazione per lo studio e la conservazione degli uccelli.",
    image: null,
  }
};

export const cookies = {
  text: 'Non collezioniamo cookie.'
};