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
      const listPage = document.querySelector(".list-page");
      const bar2 = document.getElementById("bar-2");

      listPage.classList.toggle("visible");
      bar2.classList.toggle("bar-active");
    },

    // To close menu when a link is clicked
    closeMenu() {
      const listPage = document.querySelector(".list-page");
      const bar2 = document.getElementById("bar-2");

      listPage.classList.remove("visible");
      bar2.classList.remove("bar-active");
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
            <div class="list-page">
              <!-- Left list -->
              <ul class="nav-menu">
                <li>    
                  <router-link :to="{ name: 'Homepage' }" @click="closeMenu()"> Home </router-link>
                </li>
                <li>    
                  <router-link :to="{ name: 'AboutUs' }" @click="closeMenu()">
                    Chi siamo
                  </router-link>
                </li>
                <li>    
                  <router-link :to="{ name: 'Projects' }" @click="closeMenu()">
                    Progetti
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'ScientificOutreach' }" @click="closeMenu()">
                    Divulgazione
                  </router-link>
                </li>
              </ul>
              <!-- END left list -->

              <!-- Right list -->
              <ul class="nav-menu">
                <li>
                  <router-link :to="{ name: 'Socials' }" @click="closeMenu()">Social </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Publications' }" @click="closeMenu()">
                    Pubblicazioni
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'News' }" @click="closeMenu()"> News</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Links' }" @click="closeMenu()">
                    Link utili
                  </router-link>
                </li>
              </ul>
              <!-- END right list -->
               <div class="close-button-container">
                <button @click="closeMenu()">
                  <img src="../assets/images/header-menu/close-button.svg" alt="">
                </button>
               </div>
            </div>
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

      // Hamburger menu
      .hamburger-menu-container {
        width: 10%;
        position: relative;
        align-items: center;
        justify-content: center;

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 7%;
          height: 70%;
          width: 2px;
          background-color: black;
        }

        .hamburger-menu {
          cursor: pointer;

          .bar {
            display: block;
            width: 35px;
            height: 3px;
            margin: 8px auto;
            border-radius: 30%;
            background-color: rgb(0, 0, 0);
            transition: transform 0.6s ease-in-out;
          }

          .bar-active {
            left: 0;
            position: relative;
            transform: translateX(10px);
          }
        }
      }
      // END hamburger menu

      // List menu
      .list-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        position: absolute;
        top: 3.76rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        background: url(../assets/images/header-menu/cesena-desktop.webp) no-repeat center / cover;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        justify-content: space-evenly;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.6s ease-in-out, visibility 0.6s ease-in-out, transform 0.6s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.65);
          z-index: -1;
        }

        &.visible {
          opacity: 1;
          visibility: visible;
        }

        .nav-menu {
          font-size: 5vw;
          font-weight: 600;
          animation: slideInTop 1s ease-in-out;

          li {
            padding-top: 1rem;
            margin-bottom: 2rem;

            a {
              position: relative;
              color: beige;
              -webkit-text-stroke: 2px beige;
              text-decoration: none;
              transition: color 0.3s ease-in-out;

              &:hover {
                color: transparent;
              }

              // Pseudo-elemento per la sottolineatura animata (parte dal centro)
              &::after {
                content: '';
                position: absolute;
                bottom: -0.4rem;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 2px;
                background-color: beige;
                transition: width 0.4s ease-in-out 0.15s;
              }

              &:hover::after {
                width: 100%;
              }
            }
          }
        }

        // Close button
        .close-button-container {
          padding-top: 2rem;

          button {
            border: none;
            cursor: pointer;
            background-color: transparent;
            transition: transform 0.5s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }

            img {
              width: 90%;
            }
          }
        }
        // END close button
      }
      // END list menu
    }

    // Search bar
    .search-bar-section {
      width: 10%;
      position: relative;

      .search-bar-box {
        width: 100%;
        padding-top: 1rem;
        text-align: start;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -20%;
          height: 90%;
          width: 2px;
          background-color: black;
        }

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
    }
  }
}

// ==========================================
// MEDIA QUERIES - TABLET
// ==========================================
</style>