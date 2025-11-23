import { createRouter, createWebHistory } from "vue-router";

// Pages
import AboutUs from "./pages/AboutUs.vue";
import Birds from "./pages/Birds.vue";
import Conferences from "./pages/Conferences.vue";
import Courses from "./pages/Courses.vue";
import Homepage from "./pages/Homepage.vue";
import Links from "./pages/Links.vue";
import News from "./pages/News.vue";
import Projects from "./pages/Projects.vue";
import Publications from "./pages/Publications.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/conferences',
    name: 'Conferences',
    component: Conferences
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
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