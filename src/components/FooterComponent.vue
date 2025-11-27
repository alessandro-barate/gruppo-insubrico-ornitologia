<script>

export default {
  name: "FooterComponent",

  data() {
    return {
      showPrivacy: false,
    };
  },

  methods: {
    showPrivacyPolicies() {
      this.showPrivacy = true;
    },

    hidePrivacyPolicies() {
      this.showPrivacy = false;
    },
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="main-container">
            <!-- Logo container -->
            <div class="logo-box d-flex">
              <!-- Logo -->
              <div class="logo-container">
                <img
                  class="footer-logo"
                  src="../assets/images/logo.svg"
                  alt="Logo del Gruppo Insubrico di Ornitologia"
                />
              </div>
              <!-- END logo -->

              <!-- Text -->
              <div class="logo-text">
                <h1>Gruppo Insubrico di Ornitologia G.I.O.</h1>
              </div>
              <!-- END text -->
            </div>
            <!-- END logo container -->

            <!-- Details section -->
            <div class="details-container d-flex">
              <div class="details-column">1</div>
              <div class="details-column">2</div>
              <div class="details-column">3</div>
            </div>
            <!-- END details section -->

            <!-- Copyright container -->
            <div class="copyright-container">
              <p>&copy; 2014 Gruppo Insubrico di Ornitologia - Tutti i diritti riservati</p>
            </div>
            <!-- END copyright container -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.col {
  width: 100%;
  background-size: cover;
  background-image: url(../assets/images/footer-image.jpg);

  .main-container {
    width: 80%;
    margin: 0 auto;
    background-color: rgba(128, 128, 128, 0.9);

    .logo-container {
      width: 30%;
      padding: 2rem;

      img {
        width: 100%;
      }
    }
  }

  .logo-text {
    padding: 3rem;

    h1 {
      color: black;
      font-size: 3rem;
    }
  }

  .details-container  {
    width: 100%;

    .details-column {
      width: calc(100% / 3);
      background-color: red;
    }
  }

  .copyright-container {
    text-align: center;
  }
}
</style>