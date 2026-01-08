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

    // Email generation when the link is clicked
    openMail() {
      const user = gruppoinsubricoornitologia;
      const domain = gmail;
      const tld = com;
      window.location.href = `mailto:${user}@${domain}.${tld}`;
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
            <!-- Logo box -->
            <div class="logo-box">
              <!-- Text -->
              <div class="logo-text">
                <h1>Gruppo Insubrico di Ornitologia G I O</h1>
              </div>
              <!-- END text -->

              <!-- Logo container -->
              <div class="logo-container d-flex">
                <img
                  class="footer-logo"
                  src="../assets/images/gio-logo.webp"
                  alt="Logo del Gruppo Insubrico di Ornitologia"
                />
              </div>
              <!-- END container -->
            </div>
            <!-- END logo box -->

            <!-- Details section -->
            <div class="details-container d-flex">
              <div class="details-column">
                <h3 class="uppercase">contatti</h3>
                <p>
                  <a href="" @click.prevent="openMail">Scrivici una mail</a>
                </p>
                <p>ODV - RUNTS 89826 del 07.11.2022</p>
                <p>Codice Fiscale</p>
              </div>
              <div class="details-column">
                <h3 class="uppercase">il gruppo</h3>
                <p>
                  <a href="/documents/atto-costitutivo.pdf" target="_blank"
                    >Atto Costitutivo</a
                  >
                </p>
                <p>
                  <a href="/documents/statuto.pdf" target="_blank">Statuto</a>
                </p>
                <p>
                  <a
                    href="/documents/iscrizione-registro-volontariato.pdf"
                    target="_blank"
                    >Iscrizione Registro Volontariato</a
                  >
                </p>
              </div>
              <div class="details-column">
                <h3 class="uppercase">dove siamo</h3>
                <div class="map-icon">
                  <a
                    href="https://maps.app.goo.gl/eLrT1GPGxuw4QmLeA"
                    target="_blank"
                  >
                    <img
                      src="../assets/images/map-icon.svg"
                      alt="Icona per aprire l'indirizzo in Google Maps"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!-- END details section -->

            <!-- Copyright container -->
            <div class="copyright-container">
              <p>
                &copy; 2014 Gruppo Insubrico di Ornitologia - Tutti i diritti
                riservati
              </p>
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
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-image: url(../assets/images/footer-image.jpg);

  .logo-box {
    width: 100%;
    padding: 2rem;

    .logo-container {
      width: 100%;
      justify-content: center;
    }

    img {
      width: 100%;
    }

    .overlay-2 {
      width: 20%;

      img {
        width: 100%;
        padding-top: 1rem;
      }
    }
  }

  .logo-text {
    width: 100%;
    padding: 3rem;
    text-align: center;
  }

  .details-container {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-radius: 0.5rem;
    background-color: rgba(128, 128, 128, 0.9);

    .details-column {
      text-align: center;
      width: calc(100% / 3);

      h3 {
        letter-spacing: 0.4rem;
        font-size: 1.5rem;
        padding-top: 3rem;
        margin-bottom: 4rem;
        text-decoration: 2px solid black;
      }

      p {
        margin-bottom: 1.5rem;
      }

      a {
        transition: color 0.3s ease-in-out, text-decoration 0.6s ease-in-out;

        &:hover {
          color: bisque;
          text-underline-offset: 0.4rem;
          text-decoration: underline 2px solid bisque;
        }
      }

      .map-icon {
        width: 100%;
        margin-bottom: 1rem;

        img {
          width: 20%;
          transition: transform 0.5s ease-in-out;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  .copyright-container {
    text-align: center;
  }
}

// ==========================================
// MEDIA QUERIES - TABLET
// ==========================================
@media (max-width: 992px) {

}


// ==========================================
// MEDIA QUERIES - MOBILE
// ==========================================
@media (max-width: 576px) {
  .col .main-container {
    .logo-box {
      .logo-text h1{
        font-size: 3.2rem;
      }

      .logo-container {
        width: 60%;
        margin: 0 auto;
      }
    }
  }
}
</style>
