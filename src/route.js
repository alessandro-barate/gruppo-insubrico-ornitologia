import { createRouter, createWebHistory } from "vue-router";

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

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/birds',
    name: 'Birds',
    component: Birds
  },
  {
    path: '/conferences-courses',
    name: 'ConferencesCourses',
    component: ConferencesCourses
  },
  {
    path: '/courses',
    name: 'Socials',
    component: Socials
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});