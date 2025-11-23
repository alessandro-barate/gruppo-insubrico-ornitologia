<script>
// export default {
//   name: "CookieBanner",

//   data() {
//     return {
//       showCookieBanner: false,
//       consentValidityDays: 180,
//     };
//   },

//   created() {
//     this.checkCookieConsent();
//   },

//   methods: {
//     checkCookieConsent() {
//       // Check if the cookie privacy is valid
//       const cookieAccepted = localStorage.getItem("cookieAccepted");
//       const expiryDateStr = localStorage.getItem("cookieExpiryDate");

//       // Check if the user has already accepted the cookie
//       if (cookieAccepted !== "true") {
//         setTimeout(() => {
//           this.showCookieBanner = true;
//         }, 1000);
//       }

//       // Check if the expiry date exists
//       if (!expiryDateStr) {
//         this.setConsentExpiry();
//         return;
//       }

//       // Check if the expiry date passed by
//       const expiryDate = new Date(expiryDateStr);
//       const currentDate = new Date();

//       if (currentDate > expiryDate) {
//         // If the consent expired, show the banner again
//         console.log("Cookie consent expired. Showing the banner again");
//         this.showCookieBanner = true;
//       } else {
//         this.showCookieBanner = false;
//       }
//     },

//     // Function to set the consent's expiry date
//     setConsentExpiry() {
//       const expiryDate = new Date();
//       // Add the days setted above to the actual date
//       expiryDate.setDate(expiryDate.getDate() + this.consentValidityDays);
//       // Save the expiry date into local storage
//       localStorage.setItem("cookieExpiryDate", expiryDate.toISOString());
//     },

//     // Function to accept the cookie
//     acceptCookies() {
//       // Save the acceptance in localStorage
//       localStorage.setItem("cookieAccepted", "true");
//       // Set the expiry date
//       this.setConsentExpiry();
//       // Hide the banner
//       this.showCookieBanner = false;
//     },
//   },
// };
</script>

<template>
  <!-- Cookie panel -->
  <!-- <Transition name="fade-scale"> -->
    <!-- <div class="cookie-zoomed-container" v-if="showCookieBanner"> -->
      <!-- <div class="cookie-banner overlay"> -->
        <!-- Cookie banner title -->
        <!-- <div class="cookie-banner-title">
          <h3>Cookies</h3>
        </div> -->
        <!-- END cookie banner title -->

        <!-- Cookie banner description -->
        <!-- <div class="cookie-banner-description">
          <p v-html="t('cookieBanner.description')"></p>
        </div> -->
        <!-- END cookie banner description -->

        <!-- Cookie banner button -->
        <!-- <div class="cookie-banner-button">
          <button @click="acceptCookies">Accetta</button>
        </div> -->
        <!-- END cookie banner button -->
      <!-- </div> -->
    <!-- </div> -->
  <!-- </Transition> -->
  <!-- END cookie panel -->
</template>