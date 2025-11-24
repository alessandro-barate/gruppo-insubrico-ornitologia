<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  created() {
    window.addEventListener("scroll", this.headerFixed);
  },

  methods: {
    // To make the header fixed to the top
    headerFixed() {
      const container = document.querySelector("header");

      if (
        window.innerWidth < 1000 ||
        (window.scrollY > 50 && window.innerWidth >= 1000)
      ) {
        container.classList.add("sticky-header");
      } else {
        container.classList.remove("sticky-header");
      }
    },

    // To make the nav list appear when the hamburger menu is clicked
    toggleNavbarHamburger() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },
  },
};
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <nav>
                        <!-- Nav menu -->
                        <ul class="nav-menu d-flex">
                            <li>
                              <a>
                                <router-link :to="{ name: 'AboutUs' }" class="link">
                                  chi siamo
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Projects' }" class="link">
                                  progetti
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Birds' }" class="link">
                                  gli uccelli della provincia di varese
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Conferences' }" class="link">
                                  conferenze
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Courses' }" class="link">
                                  corsi
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Publications' }" class="link">
                                  pubblicazioni
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'News' }" class="link">
                                  news
                                </router-link>
                              </a>
                            </li>
                            <li>
                              <a>
                                <router-link :to="{ name: 'Links' }" class="link">
                                  link utili
                                </router-link>
                              </a>
                            </li>
                        </ul>
                        <!-- END Nav menu -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
  .sticky-header {
    top: 0;
    z-index: 1000;
    position: sticky;
    transition: all 0.2s ease-in-out;
  }

  .container {
    background-color: rgba(0, 119, 255, 0.89);
  }

  nav {
    width: 65%;
    margin: 0 auto;
  }

  .nav-menu {
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-evenly;
  }

</style>