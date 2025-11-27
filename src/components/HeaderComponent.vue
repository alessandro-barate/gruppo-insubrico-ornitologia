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
    <div class="container gradient-color">
      <div class="row">
        <div class="col d-flex">
          <!-- Logo section -->
           <div class="logo-section">
            <img src="../assets/images/logo.svg" class="logo" alt=""></img>
          </div>
          <!-- END logo section -->

          <!-- Nav menu -->
          <nav>
            <ul class="nav-menu d-flex">
              <li>
                <a>
                  <router-link :to="{ name: 'Homepage' }">
                    Home
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'AboutUs' }">
                  Chi siamo
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Projects' }">
                  Progetti
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Birds' }">
                  Gli uccelli della provincia di Varese
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Conferences' }">
                  Conferenze
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Courses' }">
                  Corsi
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Publications' }">
                  Pubblicazioni
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'News' }">
                  News
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Links' }">
                  Link utili
                  </router-link>
                </a>
              </li>
            </ul>
          </nav>
          <!-- END Nav menu -->
          <!-- Search bar section -->
           <div class="search-bar-section">

           </div>
          <!-- Search bar section -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .sticky-header {
    top: 0;
    z-index: 1000;
    position: sticky;
  }


  .container {
    margin-bottom: 0px;
  }

  .logo-section {
    width: 10%;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-bottom: 1rem;

    .logo {
      width: 70%;
    }
  }

  nav {
    width: 80%;
  }

  .nav-menu {
    width: 100%;
    padding-top: 2.5rem;
    justify-content: space-evenly;

    a {
      transition: 0.5s ease-in-out;

      &:hover {
      color: bisque;
      }
    }
  }
</style>