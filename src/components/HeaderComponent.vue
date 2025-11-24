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
                  Chi siamo
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Projects' }" class="link">
                  Progetti
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Birds' }" class="link">
                  Gli uccelli della provincia di Varese
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Conferences' }" class="link">
                  Conferenze
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Courses' }" class="link">
                  Corsi
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Publications' }" class="link">
                  Pubblicazioni
                  </router-link>
                  </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'News' }" class="link">
                  News
                  </router-link>
                  </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Links' }" class="link">
                  Link utili
                  </router-link>
                </a>
              </li>
            </ul>
            <!-- END Nav menu -->
          </nav>
          <div class="banner-container">
            <div class="banner-img">
              <img src="../assets/images/banner-with-logo.jpg" alt="">
            </div>
          </div>
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
    margin-bottom: 50px;
    background-color: rgba(0, 119, 255, 0.89);
  }

  nav {
    width: 70%;
    margin: 0 auto;
  }

  .nav-menu {
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: space-evenly;
  }

  .banner-container {
    width: 100%;
  }

  .banner-img {
    width: 83%;
    margin: 0 auto;

    img {
      margin-bottom: -4px;
      border-radius: 20px 20px 0 0 ;
      box-shadow: 0 0 20px 5px rgba(143, 167, 199, 1);
    }
  }

</style>