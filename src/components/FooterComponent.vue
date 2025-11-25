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
          <div class="main-container d-flex">
            <!-- Logo footer -->
            <div class="logo-footer-container d-flex">
              <img
                class="footer-logo"
                src="../assets/img/logo/bird-only.webp"
                alt="Gruppo Insubrico di Ornitologia logo"
              />
            </div>
            <!-- END logo footer -->

            <!-- Upper right section -->
            <div class="right-details d-flex">
              <!-- Upper section -->
              <div class="upper-section d-flex">
                <!-- Address section -->
                <div class="col-50 address d-flex">
                  <!-- GPS image -->
                  <!-- <div class="location-container d-flex">
                    <img
                      src="../assets/img/footer/location-icon.webp"
                      alt="Logo GPS"
                    />
                  </div> -->
                  <!-- END GPS image -->

                  <!-- Address container -->
                  <address class="address-container">
                    <h3>Insubria</h3>
                    <!-- <a
                      id="address"
                      aria-label="Indirizzo di Insubria WildLife"
                    >
                      Via Roma 20, 20004, Arluno
                    </a> -->
                    <h3 id="pi" class="capitalize">kbku</h3>
                    <span>93054540153</span>
                  </address>
                  <!-- END address container -->
                </div>
                <!-- END address section -->

                <!-- Socials container -->
                <div class="col-50 contacts-socials">
                  <div class="socials">
                    <h3>uiuh</h3>
                    <div class="buttons-container d-flex">
                      <!-- Facebook link -->
                      <div class="fb-container">
                        <a
                          href="https://www.facebook.com/people/Insubria-Wildlife-APS/61568161029341/"
                          target="_blank"
                          aria-label="Facebook link"
                        >
                          <img
                            src="../assets/img/footer/facebook-icon.svg"
                            alt="Facebook logo"
                            id="fb-logo"
                          />
                        </a>
                      </div>
                      <!-- END Facebook link -->

                      <!-- Instagram link -->
                      <div class="ig-container">
                        <a
                          href="https://www.instagram.com/insubria_wildlife/"
                          target="_blank"
                          aria-label="Instagram link"
                        >
                          <img
                            src="../assets/img/footer/instagram-icon.svg"
                            alt="Instagram logo"
                            id="ig-logo"
                          />
                        </a>
                      </div>
                      <!-- END Instagram link -->
                    </div>
                  </div>
                </div>
                <!-- END socials container -->
              </div>
              <!-- END upper section -->
            </div>
            <!-- END upper right section -->
          </div>

          <!-- Copyright container -->
          <div class="copyright-container">
            <p>&copy; 2014 Gruppo Insubrico di Ornitologia - Tutti i diritti riservati</p>
          </div>
          <!-- END copyright container -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">

</style>