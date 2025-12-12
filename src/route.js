import { createRouter, createWebHistory } from "vue-router";
import { siteMeta, metaDescriptions } from "./store";

// Pages
import AboutUs from "./pages/AboutUs.vue";
import Birds from "./pages/Birds.vue";
import ConferencesCourses from "./pages/ConferencesCourses.vue";
import Homepage from "./pages/Homepage.vue";
import Links from "./pages/Links.vue";
import News from "./pages/News.vue";
import Projects from "./pages/Projects.vue";
import Publications from "./pages/Publications.vue";
import Socials from "./pages/Socials.vue";
import { usePageTransition } from "./composables/usePageTransition";

// Routes
const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/birds",
    name: "Birds",
    component: Birds,
  },
  {
    path: "/conferences-courses",
    name: "ConferencesCourses",
    component: ConferencesCourses,
  },
  {
    path: "/courses",
    name: "Socials",
    component: Socials,
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
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/publications",
    name: "Publications",
    component: Publications,
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
