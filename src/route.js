import { createRouter, createWebHistory } from "vue-router";
import { siteMeta, metaDescriptions } from "./store";

// Pages
import AboutUs from "./pages/AboutUs.vue";
import Bol from "./pages/Bol.vue";
import Books from "./pages/Books.vue";
import Conferences from "./pages/Conferences.vue";
import Courses from "./pages/Courses.vue";
import Events from "./pages/Events.vue";
import Homepage from "./pages/Homepage.vue";
import Iwc from "./pages/Iwc.vue";
import Links from "./pages/Links.vue";
import News from "./pages/News.vue";
import PressReview from "./pages/PressReview.vue";
import Projects from "./pages/Projects.vue";
import Publications from "./pages/Publications.vue";
import Report from "./pages/Report.vue";
import ScientificOutreach from "./pages/ScientificOutreach.vue";
import Socials from "./pages/Socials.vue";
import Swifts from "./pages/Swifts.vue";
import Zps from "./pages/Zps.vue";
import { usePageTransition } from "./composables/usePageTransition";

// Routes
const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/chi-siamo",
    name: "Chi Siamo",
    component: AboutUs,
  },
  {
    path: "/pubblicazioni/bol",
    name: "Bol",
    component: Bol,
  },
  {
    path: "/pubblicazioni/quaderni",
    name: "Quaderni",
    component: Books,
  },
  {
    path: "/divulgazione/convegni",
    name: "Convegni",
    component: Conferences,
  },
  {
    path: "/divulgazione/corsi",
    name: "Corsi",
    component: Courses,
  },
  {
    path: "/divulgazione/eventi",
    name: "Eventi",
    component: Events,
  },
  {
    path: "/progetti/iwc",
    name: "Iwc",
    component: Iwc,
  },
  {
    path: "/links",
    name: "Links",
    component: Links,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/divulgazione/rassegna-stampa",
    name: "Rassegna Stampa",
    component: PressReview,
  },
  {
    path: "/progetti",
    name: "Progetti",
    component: Projects,
  },
  {
    path: "/pubblicazioni",
    name: "Pubblicazioni",
    component: Publications,
  },
  {
    path: "/pubblicazioni/resoconto-ornitologico",
    name: "Resoconto Ornitologico",
    component: Report,
  },
  {
    path: "/divulgazione",
    name: "Divulgazione",
    component: ScientificOutreach,
  },
  {
    path: "/socials",
    name: "Socials",
    component: Socials,
  },
  {
    path: "/progetti/rondoni",
    name: "Rondoni",
    component: Swifts,
  },
  {
    path: "/progetti/zps",
    name: "Zps",
    component: Zps,
  },
];

function updateMetaTag(attribute, value, content) {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateMeta(routeName, fullPath) {
  const meta = metaDescriptions[routeName] || metaDescriptions.default;
  const fullTitle = `${siteMeta.siteName} - ${meta.title}`;
  const fullUrl = `${siteMeta.siteUrl}${fullPath}`;
  const image = meta.image
    ? `${siteMeta.siteUrl}${meta.image}`
    : siteMeta.defaultImage;

  // Title
  document.title = fullTitle;

  // Standard meta
  updateMetaTag("name", "description", meta.description);

  // Open Graph
  updateMetaTag("property", "og:title", fullTitle);
  updateMetaTag("property", "og:description", meta.description);
  updateMetaTag("property", "og:image", image);
  updateMetaTag("property", "og:url", fullUrl);
  updateMetaTag("property", "og:type", "website");
  updateMetaTag("property", "og:site_name", siteMeta.siteName);

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", fullUrl);
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to update title and description
router.beforeEach(async (to, from, next) => {
  if (from.name) {
    const { animatePageChange } = usePageTransition({
      fadeOutDuration: 400,
      fadeInDuration: 400,
      // scrollDelay: 150,
    });
    await animatePageChange();
  }

  updateMeta(to.name, to.fullPath);

  next();
});
