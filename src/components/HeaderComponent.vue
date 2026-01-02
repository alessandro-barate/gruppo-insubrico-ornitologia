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
      const hamburger = document.querySelector(".hamburger-menu");
      const navMenu = document.querySelector(".nav-menu");
      const bar2 = document.getElementById("bar-2");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      bar2.classList.toggle("bar-active");
    },

    // To show the search input field
    openSearchBar(event) {
      event.stopPropagation();
      const inputField = document.querySelector(".input-field");
      inputField.classList.add("visible");
    },

    handleClickOutside(event) {
      const searchSection = document.querySelector(".search-bar-section");
      const inputField = document.querySelector(".input-field");

      if (searchSection && !searchSection.contains(event.target)) {
        inputField.classList.remove("visible");
      }
    },
  },
};
</script>

<template>
  <header>
    <div class="container gradient-color">
      <div class="row">
        <div class="col d-flex">
          <!-- Nav menu -->
          <nav class="d-flex">
            <div class="hamburger-menu-container d-flex">
              <div @click="toggleNavbarHamburger()" class="hamburger-menu">
                <span class="bar"></span>
                <span class="bar" id="bar-2"></span>
                <span class="bar"></span>
              </div>
            </div>
            <ul class="nav-menu">
              <li>
                <a>
                  <router-link :to="{ name: 'Homepage' }"> Home </router-link>
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
                  <router-link :to="{ name: 'ScientificOutreach' }">
                    Divulgazione
                  </router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="{ name: 'Socials' }"> Social </router-link>
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
                  <router-link :to="{ name: 'News' }"> News </router-link>
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
                <img
                  src="../assets/images/magnifier.svg"
                  alt="Icona della ricerca nel sito"
                />
              </button>
            </div>
            <div class="input-field">
              <form action="">
                <label for="search-field"></label>
                <input
                  type="search"
                  id="search-field"
                  name="search-field"
                  placeholder="Cerca nel sito"
                  style="color: #ffffffb3"
                />
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

  .col {
    nav {
      width: 90%;
      height: 60px;
      margin: 0 auto;

      .hamburger-menu-container {
        width: 10%;
        justify-content: center;
        background-color: red;
        align-items: center;

        .hamburger-menu {
          transition: all 2s ease-in-out;

          .bar {
            display: block;
            width: 35px;
            height: 2px;
            margin: 8px auto;
            border-radius: 30%;
            background-color: rgb(0, 0, 0);
          }

          .bar-active {
            left: 20%;
            position: relative;
            transform: translateX(10px);
          }
        }
      }

      .nav-menu {
        width: 90%;
        display: none;
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
// For Chrome, Safari, Opera...
::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Sora", sans-serif;
}

// For Firefox
::-moz-input-placeholder {
  color: white;
  font-family: "Sora", sans-serif;
}

// For Internet Explorer
::-ms-input-placeholder {
  color: rgb(255, 255, 255);
  font-family: "Sora", sans-serif;
}

// ==========================================
// MEDIA QUERIES - TABLET
// ==========================================
</style>
