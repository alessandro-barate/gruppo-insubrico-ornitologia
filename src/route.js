import { createRouter, createWebHistory } from "vue-router";
import { metaDescriptions } from "./store";

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

// Rooutes
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    meta: { title: 'Homepage' }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: { title: 'Chi siamo' }
  },
  {
    path: '/birds',
    name: 'Birds',
    component: Birds,
    meta: { title: 'Avifauna' }
  },
  {
    path: '/conferences-courses',
    name: 'ConferencesCourses',
    component: ConferencesCourses,
    meta: { title: 'Conferenze e Corsi' }
  },
  {
    path: '/courses',
    name: 'Socials',
    component: Socials,
    meta: { title: 'Social' }
  },
  {
    path: '/links',
    name: 'Links',
    component: Links,
    meta: { title: 'Link Utili' }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: { title: 'News' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Progetti' }
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications,
    meta: { title: 'Pubblicazioni' }
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to update title and description
router.beforeEach((to, from, next) => {

  // Update the page title
  const pageTitle = to.meta.title || 'Homepage';
  document.title = `Gruppo Insubrico Ornitologico - ${pageTitle}`;

  // Update the meta description
  const description = metaDescriptions[to.name] || metaDescriptions.default;
  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  next();
})