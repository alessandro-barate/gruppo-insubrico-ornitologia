<script>
// Imports
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CookieBanner from './components/CookieBanner.vue';

export default {
  name: "App",

  data() {
    return {
      visible: false,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    CookieBanner,
  },
  methods: {
    windowScroll(event) {
      this.visible = window.scrollY > 300 ? true : false;
    },

    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  created() {
    window.addEventListener("scroll", this.windowScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <div class="buttons-container d-flex">
    <!-- Cookies button -->
    <div id="cookies-button">
      <button>
        <img src="./assets/images/cookies-icon.svg" alt="Collegamento all'informativa dei cookie">
      </button>
    </div>
    <!-- END cookies button -->

    <!-- Up button -->
    <div id="up-button">
      <button aria-label="Torna in alto">
        <img
          v-show="visible"
          src="./assets/images/up-arrow.svg"
          alt="Freccia in alto per scorrere la pagina in su"
          @click="scrollUp()"
        />
      </button>
    </div>
    <!-- END up button -->
  </div>
  
  <CookieBanner />
  <FooterComponent></FooterComponent>
</template>

<style scoped>
button {
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
}

#cookies-button {
  left: 2%;
  bottom: 6%;
  position: fixed;

  img {
    width: 2em;
  }
}

#up-button {
  right: 2%;
  bottom: 6%;
  position: fixed;

  img {
    width: 2.5em;
  }  
}

/* Media queries */
/* Mobile layout */
@media (max-width: 936px) {
  #up-button {
    right: 7px;
    bottom: 53px;

    button:hover {
      transform: none;
    }
  }
}
</style>
