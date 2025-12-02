<script>
import { cookies } from "../store";

export default {
  name: "CookieBanner",

  props: {
    forceShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      cookies,
      showCookieBanner: false,
      consentValidityDays: 180,
    };
  },

  created() {
    this.checkCookieConsent();
  },

  computed: {
    shouldShowBanner() {
      // Shows the banner if forced from the outside or if the internal logic needs to
      return this.forceShow || this.showCookieBanner;
    },
  },

  methods: {
    checkCookieConsent() {
      // Check if the cookie privacy is valid
      const cookieAccepted = localStorage.getItem("cookieAccepted");
      const expiryDateStr = localStorage.getItem("cookieExpiryDate");

      // Check if the user has already accepted the cookie
      if (cookieAccepted !== "true") {
        setTimeout(() => {
          this.showCookieBanner = true;
        }, 6000);
      }

      // Check if the expiry date exists
      if (!expiryDateStr) {
        this.setConsentExpiry();
        return;
      }

      // Check if the expiry date passed by
      const expiryDate = new Date(expiryDateStr);
      const currentDate = new Date();

      if (currentDate > expiryDate) {
        // If the consent expired, show the banner again
        console.log("Cookie consent expired. Showing the banner again");
        this.showCookieBanner = true;
      } else {
        this.showCookieBanner = false;
      }
    },

    // Function to set the consent's expiry date
    setConsentExpiry() {
      const expiryDate = new Date();
      // Add the days setted above to the actual date
      expiryDate.setDate(expiryDate.getDate() + this.consentValidityDays);
      // Save the expiry date into local storage
      localStorage.setItem("cookieExpiryDate", expiryDate.toISOString());
    },

    // Function to accept the cookie
    acceptCookies() {
      // Save the acceptance in localStorage
      localStorage.setItem("cookieAccepted", "true");
      // Set the expiry date
      this.setConsentExpiry();
      // Hide the banner
      this.showCookieBanner = false;
      // Emit close event to close also the banner if forced by the button
      this.$emit("close");
    },
  },
};
</script>

<template>
  <!-- Cookie panel -->
  <Transition name="fade-scale">
    <div class="cookies-overlay" v-if="shouldShowBanner">
      <!-- Black-overlay -->
      <div class="overlay-background"></div>
      <!-- END black-overlay -->

      <!-- Centered banner -->
      <div class="cookie-zoomed-container">
        <div class="cookie-banner overlay gradient-color-subscribe-cookie">
          <!-- Cookie banner title -->
          <div class="cookie-banner-title">
            <h3>Cookies</h3>
          </div>
          <!-- END cookie banner title -->

          <hr />

          <!-- Cookie banner description -->
          <div class="cookie-banner-description">
            <p>{{ cookies.text }}</p>
          </div>
          <!-- END cookie banner description -->

          <!-- Cookie banner button -->
          <div class="cookie-banner-button">
            <button @click="acceptCookies">Ho capito</button>
          </div>
          <!-- END cookie banner button -->
        </div>
      </div>
    </div>
  </Transition>
  <!-- END cookie panel -->
</template>

<style scoped lang="scss">
.fade-scale-enter-active,
.fade-scale-leave-active {
  .overlay-background {
    opacity: 0;
  }

  .cookie-zoomed-container {
    opacity: 0;
    transform: translateX(-50%) scale(0.95);
  }
}

.fade-scale-leave-to,
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);

  .cookie-zoomed-container {
    opacity: 0;
    transform: translateX(-50%) scale(0.95);
  }
}

.cookie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
}

.overlay-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: all;
  opacity: 1;
  transition: all 1.5s ease;
}

.cookie-zoomed-container {
  width: 30%;
  position: fixed;
  bottom: 10%;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  opacity: 1;
  transition: all 1.5s ease;

  .overlay {
    border-radius: 1rem;
  }
}

.cookie-banner {
  padding: 20px;

  &.overlay {
    padding: 40px;
    transform: none;
  }

  .cookie-banner-title,
  .cookie-banner-description {
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
  }

  hr {
    width: 20%;
    border: none;
    margin-left: 5rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  }

  p {
    font-size: 16px;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .cookie-banner-button {
    text-align: center;
    margin-top: 20px;

    button {
      border: none;
      color: black;
      font-size: 16px;
      font-weight: bold;
      background-color: transparent;
      cursor: pointer;
      transition: 0.5s ease-in-out;

      &:hover {
        color: yellow;
        transform: scale(1.1);
      }
    }
  }
}

/* Media queries for mobile layout */
@media (max-width: 936px) {
  .cookie-zoomed-container {
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;
    transform: translateX(0);

    .cookie-banner.overlay {
      width: 100%;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .cookie-banner-title {
      text-align: center;
    }
  }
}
</style>
