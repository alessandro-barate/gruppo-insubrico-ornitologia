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

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
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

    // To show the search input field
    openSearchBar(event) {
      event.stopPropagation();
      const inputField = document.querySelector('.input-field');
      inputField.classList.add('visible');
    },

    handleClickOutside(event) {
      const searchSection = document.querySelector('.search-bar-section');
      const inputField = document.querySelector('.input-field');

      if (searchSection && !searchSection.contains(event.target)) {
        inputField.classList.remove('visible');
      }
    }
  },
};
</script>

<template>
  <header>
    <div class="container gradient-color">
      <div class="row">
        <div class="col d-flex">
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
                  Aviofauna
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'ConferencesCourses' }">
                  Conferenze e Corsi
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Socials' }">
                  Socials
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
            <div class="search-bar-box">
              <button @click="openSearchBar">
                <img src="../assets/images/magnifier.svg" alt="Icona della ricerca nel sito">
              </button>
            </div>
            <div class="input-field">
              <form action="">
                <label for="search-field"></label>
                <input type="search" id="search-field" name="search-field" placeholder="Cerca nel sito" style="color: #ffffffb3">
              </form>
            </div>
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
    position: relative;

    nav {
      width: 90%;
      margin: 0 auto;

      .nav-menu {
        width: 100%;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        justify-content: space-evenly;

        a {
          transition: 0.4s ease-in-out;

          &:hover {
          color: bisque;
          }
        }
      }
    }

    .search-bar-section {
      width: 10%;
      position: relative;

      .search-bar-box {
        width: 100%;
        padding-top: 1rem;
        text-align: start;

        button {
          border: none;
          cursor: pointer;
          padding-top: 0.2rem;
          background-color: transparent;

          img {
          width: 20%;
          transition: transform 0.5s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .input-field {
      right: 0;
      top: 100%;
      display: none;
      position: absolute;
      padding-top: 0.5rem;
      padding-right: 0.5rem;

      &.visible {
        display: block;
      }
    }
  }

  input {
    border: none;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 2rem;
    padding-bottom: 0.5rem;
    text-align: center;
    border-radius: 0.4rem;
    background-color: black;
  }

  // Input font
  // Per Chrome, Safari, Opera...
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Sora", sans-serif;
  }

  // Per Firefox
  ::-moz-input-placeholder {
    color: white;
    font-family: "Sora", sans-serif;
  }

  // Per Internet Explorer
  ::-ms-input-placeholder {
    color: rgb(255, 255, 255);
    font-family: "Sora", sans-serif;
  }
</style>