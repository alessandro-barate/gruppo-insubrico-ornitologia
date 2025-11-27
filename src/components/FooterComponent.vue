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
    }
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
            <div class="logo-box d-flex">
              <!-- Logo container -->
              <div class="logo-container">
                <img
                  class="footer-logo"
                  src="../assets/images/logo.svg"
                  alt="Logo del Gruppo Insubrico di Ornitologia"
                  />
              </div>
              <!-- END container -->
            
              <!-- Text -->
              <div class="logo-text">
                <h1>Gruppo Insubrico di Ornitologia G.I.O.</h1>
              </div>
              <!-- END text -->
            </div>
            <!-- END logo box -->

            <!-- Details section -->
            <div class="details-container d-flex">
              <div class="details-column">
                <h3 class="uppercase">contatti</h3>
                <p>
                  <a href="" @click.prevent="openMail">Scrivici una mail</a>
                </p>
                <p>
                  <a href="tel:+39">Numero di telefono
                  </a>
                </p>
                <p>Codice Fiscale</p>
              </div>
              <div class="details-column">
                <h3 class="uppercase">il gruppo</h3>
                <p>
                  <a href="../assets/documents/atto-costitutivo.pdf" target="_blank">Atto Costitutivo</a>
                </p>
                <p>
                  <a href="../assets/documents/statuto.pdf" target="_blank">Statuto</a>
                </p>
                <p>
                  <a href="../assets/documents/iscrizione-registro-volontario.pdf" target="_blank">Iscrizione Registro Volontariato</a>
                </p>
              </div>
              <div class="details-column">
                <h3 class="uppercase">dove siamo</h3>
                <div class="map-icon">
                  <a href="https://maps.app.goo.gl/eLrT1GPGxuw4QmLeA" target="_blank">
                    <img src="../assets/images/map-icon.svg" alt="Icona per aprire l'indirizzo in Google Maps">
                  </a>
                </div>
                <!-- <p>Guarda sulla mappa</p> -->
              </div>
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
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-image: url(../assets/images/footer-image.jpg);

  .logo-box {
      width: 100%;
      padding: 2rem;

      img {
        width: 100%;
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
      transition: color 0.5s ease-in-out, text-decoration 0.8s ease-in-out;

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
</style>