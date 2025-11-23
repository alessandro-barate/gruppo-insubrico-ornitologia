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

    // To make the nav list disappear when a link is clicked
    listDisappearance() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    },

    // To make the events and news container appear when a link is clicked
    containerAppearance() {
      const newsEvents = document.getElementById("news-events-container");

      newsEvents.classList.remove("display-none");
      newsEvents.classList.add("display-block");
    },

    // To make the events and news container disappear when a link is clicked
    containerDisappearance() {
      const newsEvents = document.getElementById("news-events-container");

      newsEvents.classList.remove("display-block");
      newsEvents.classList.add("display-none");
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
                        <ul>
                            <li>chi siamo</li>
                            <li>progetti</li>
                            <li>gli uccelli della provincia di varese</li>
                            <li>conferenze e corsi</li>
                            <li>pubblicazioni</li>
                            <li>news</li>
                            <li>link utili</li>
                        </ul>
                        <!-- END Nav menu -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>