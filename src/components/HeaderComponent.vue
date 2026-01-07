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

      if (listPage.classList.contains("visible")) {
        // Chiusura: aggiungi classe closing per animazione uscita
        listPage.classList.add("closing");
        listPage.classList.remove("visible");
        
        // Rimuovi closing E nascondi il menu insieme
        setTimeout(() => {
          listPage.classList.remove("closing");
          listPage.style.visibility = "hidden";
        }, 500);
      } else {
        // Apertura: resetta lo style inline e aggiungi visible
        listPage.style.visibility = "";
        listPage.classList.add("visible");
      }
      
      bar2.classList.toggle("bar-active");
    },

    // To close menu when a link is clicked
    closeMenu(routeName) {
      const listPage = document.querySelector(".list-page");
      const bar2 = document.getElementById("bar-2");

      // Aggiungi classe closing per animazione uscita
      listPage.classList.add("closing");
      listPage.classList.remove("visible");
      
      // Rimuovi closing E nascondi il menu, poi naviga
      setTimeout(() => {
        listPage.classList.remove("closing");
        listPage.style.visibility = "hidden";
        
        // Naviga alla pagina dopo che l'animazione è finita (solo se routeName è definito)
        if (routeName) {
          this.$router.push({ name: routeName });
        }
      }, 500);
      
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
            <!-- Hamburger menu -->
            <div class="hamburger-menu-container d-flex">
              <div @click="toggleNavbarHamburger()" class="hamburger-menu">
                <span class="bar"></span>
                <span class="bar" id="bar-2"></span>
                <span class="bar"></span>
              </div>
            </div>
            <!-- END hamburger menu -->

            <!-- List page -->
            <div class="list-page">
              <!-- Logo top left -->
              <div class="menu-logo">
                <span>G I O</span>
              </div>

              <!-- Close button top right -->
              <div class="close-button-container">
                <button @click="closeMenu()">
                  <img src="../assets/images/header-menu/close-button.svg" alt="">
                </button>
              </div>

              <!-- Main navigation links -->
              <ul class="nav-menu">
                <li data-index="01">    
                  <router-link :to="{ name: 'Homepage' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('Homepage')">Home</a>
                  </router-link>
                </li>
                <li data-index="02">    
                  <router-link :to="{ name: 'AboutUs' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('AboutUs')">Chi siamo</a>
                  </router-link>
                </li>
                <li data-index="03">    
                  <router-link :to="{ name: 'Projects' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('Projects')">Progetti</a>
                  </router-link>
                </li>
                <li data-index="04">
                  <router-link :to="{ name: 'ScientificOutreach' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('ScientificOutreach')">Divulgazione</a>
                  </router-link>
                </li>
                <li data-index="05">
                  <router-link :to="{ name: 'Socials' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('Socials')">Social</a>
                  </router-link>
                </li>
                <li data-index="06">
                  <router-link :to="{ name: 'Publications' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('Publications')">Pubblicazioni</a>
                  </router-link>
                </li>
                <li data-index="07">
                  <router-link :to="{ name: 'News' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('News')">News</a>
                  </router-link>
                </li>
                <li data-index="08">
                  <router-link :to="{ name: 'Links' }" custom v-slot="{ href }">
                    <a :href="href" @click.prevent="closeMenu('Links')">Link utili</a>
                  </router-link>
                </li>
              </ul>

              <!-- Footer bar -->
              <div class="menu-footer">
                <div class="newsletter-section">
                  <form action="">
                    <input type="email" placeholder="Iscriviti alla Newsletter">
                    <button type="submit" aria-label="Invia">
                      <span>→</span>
                    </button>
                  </form>
                </div>
                <div class="company-name">
                  <span>Gruppo Insubrico di Ornitologia</span>
                </div>
                <div class="social-links">
                  <a href="#" target="_blank" rel="noopener">Instagram</a>
                  <a href="#" target="_blank" rel="noopener">Facebook</a>
                  <a href="#" @click.prevent="">Change</a>
                </div>
              </div>
            </div>
            <!-- END list page -->

            <!-- Search bar section -->
            <div class="search-bar-section">
              <div class="search-bar-box d-flex">
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
          </nav>
          <!-- END Nav menu -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

// Sticky header
.sticky-header {
  top: 0;
  z-index: 1000;
  position: sticky;
}
// END sticky header

.container {
  margin-bottom: 0px;

  .col {
    width: 100%;

    nav {
      width: 90%;
      height: 60px;
      margin: 0 auto;

      // Hamburger menu
      .hamburger-menu-container {
        width: 50%;
        position: relative;
        align-items: center;

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

      // List menu - KM27 Style
      .list-page {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 110;
        background: url(../assets/images/header-menu/cesena-desktop.webp) no-repeat center / cover;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: -1;
        }

        // Logo in alto a sinistra
        .menu-logo {
          position: absolute;
          top: 2rem;
          left: 3rem;
          
          span {
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 0.3em;
          }
        }

        // Close button in alto a destra
        .close-button-container {
          position: absolute;
          top: 2rem;
          right: 3rem;
          opacity: 0;

          button {
            border: none;
            cursor: pointer;
            background-color: transparent;
            transition: transform 0.3s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }

            img {
              width: 40px;
              height: 40px;
              filter: brightness(0) invert(1);
            }
          }
        }

        // Main navigation
        .nav-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 4.5rem 3rem 1rem;
          list-style: none;
          margin: 0;
          
          li {
            width: 60%;
            
            // Dispari: allineati a sinistra
            &:nth-child(odd) {
              text-align: left;
            }
            
            // Pari: allineati a destra
            &:nth-child(even) {
              text-align: right;
            }
          }

          li {
            position: relative;
            display: inline-block;
            margin-bottom: 0.15rem;
            opacity: 0;

            // Numero indice - sempre vicino al testo
            &::before {
              content: attr(data-index);
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              font-size: 0.875rem;
              color: rgba(255, 255, 255, 0.4);
              font-weight: 400;
              font-style: normal;
            }

            // Dispari: numero a sinistra del testo
            &:nth-child(odd)::before {
              right: calc(100% + 1rem);
            }

            // Pari: numero a destra del testo
            &:nth-child(even)::before {
              left: calc(100% + 1rem);
            }

            a {
              display: inline-block;
              font-size: clamp(1.5rem, 4.5vw, 3rem);
              font-weight: 700;
              text-transform: uppercase;
              text-decoration: none;
              color: transparent;
              -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
              font-style: italic;
              letter-spacing: -0.02em;
              transition: all 0.3s ease-out;
              cursor: pointer;

              &:hover {
                color: #fff;
                -webkit-text-stroke: 1px #fff;
              }
            }
          }
        }

        // Footer bar
        .menu-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);

          .newsletter-section {
            form {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.3);
              padding-bottom: 0.5rem;

              input {
                background: transparent;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.875rem;
                width: 200px;
                outline: none;

                &::placeholder {
                  color: rgba(255, 255, 255, 0.6);
                }
              }

              button {
                background: transparent;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
                font-size: 1rem;
                transition: color 0.3s ease;

                &:hover {
                  color: #fff;
                }
              }
            }
          }

          .company-name {
            span {
              color: rgba(255, 255, 255, 0.6);
              font-size: 0.875rem;
            }
          }

          .social-links {
            display: flex;
            gap: 2rem;

            a {
              color: rgba(255, 255, 255, 0.6);
              text-decoration: none;
              font-size: 0.875rem;
              transition: color 0.3s ease;

              &:hover {
                color: #fff;
              }
            }
          }
        }

        // Stato visibile
        &.visible {
          opacity: 1;
          visibility: visible;

          .menu-logo {
            opacity: 0;
            animation: fadeIn 0.4s ease-out forwards;
            animation-delay: 0.2s;
          }

          .close-button-container {
            opacity: 0;
            animation: fadeIn 0.4s ease-out forwards;
            animation-delay: 0.3s;
          }

          .nav-menu li {
            opacity: 0;
            animation: slideInFromBottom 0.5s ease-out forwards;
            
            @for $i from 1 through 8 {
              &:nth-child(#{$i}) {
                animation-delay: #{0.1 + $i * 0.06}s;
              }
            }
          }

          .menu-footer {
            opacity: 0;
            animation: fadeIn 0.4s ease-out forwards;
            animation-delay: 0.6s;
          }
        }

        // Stato chiusura
        &.closing {
          opacity: 1;
          visibility: visible;

          .nav-menu li {
            opacity: 1;
            animation: slideOutToTop 0.3s ease-in forwards;
            
            @for $i from 1 through 8 {
              &:nth-child(#{$i}) {
                animation-delay: #{(8 - $i) * 0.04}s;
              }
            }
          }

          .close-button-container,
          .menu-logo,
          .menu-footer {
            opacity: 1;
            animation: fadeOut 0.3s ease-in forwards;
          }
        }
      }
      // END list menu

      // Search bar
      .search-bar-section {
        width: 50%;
        position: relative;
        justify-content: end;

        .search-bar-box {
          width: 100%;
          padding-top: 1rem;
          position: relative;
          justify-content: end;

          button {
            border: none;
            cursor: pointer;
            text-align: end;
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
}

// Keyframes
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOutToTop {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

// ==========================================
// MEDIA QUERIES - TABLET
// ==========================================
@media (max-width: 992px) {
  .container .col nav {
    .list-page {
      .menu-logo {
        top: 1.5rem;
        left: 2rem;
      }

      .close-button-container {
        top: 1.5rem;
        right: 2rem;
      }

      .nav-menu {
        padding: 5rem 2rem;

        li {
          margin-left: 5% !important;
          
          a {
            font-size: clamp(2rem, 6vw, 4rem);
          }

          &::before {
            font-size: 0.75rem;
          }
        }
      }

      .menu-footer {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2rem;
        text-align: center;

        .newsletter-section form {
          justify-content: center;
        }

        .social-links {
          gap: 1.5rem;
        }
      }
    }
  }
}

// ==========================================
// MEDIA QUERIES - MOBILE
// ==========================================
@media (max-width: 576px) {
  .container {
    .col {
      nav {
        .hamburger-menu-container {
          .hamburger-menu {
            .bar {
              width: 30px;
              height: 2px;
            }
          }
        }

        .list-page {
          .menu-logo {
            top: 1rem;
            left: 1.5rem;
            
            span {
              font-size: 1.2rem;
            }
          }

          .close-button-container {
            top: 1rem;
            right: 1.5rem;

            button img {
              width: 20px;
              height: 20px;
            }
          }

          .nav-menu {
            padding: 4rem 1.5rem;
            justify-content: flex-start;
            padding-top: 5rem;

            li {
              margin-bottom: 0.25rem;
              margin-left: 0 !important;

              &::before {
                display: none;
              }

              a {
                font-size: clamp(1.8rem, 10vw, 2.5rem);
              }
            }
          }

          .menu-footer {
            padding: 1rem 1.5rem;

            .newsletter-section form input {
              width: 150px;
              font-size: 0.75rem;
            }

            .company-name span,
            .social-links a {
              font-size: 0.75rem;
            }

            .social-links {
              gap: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>