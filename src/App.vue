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
};
</script>

<template>
  
</template>
