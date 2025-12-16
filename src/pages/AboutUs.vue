<script setup>
import { ref } from "vue";

// Stato per controllare se il panel è aperto o chiuso
const isPanelOpen = ref(false);

// Funzione per toggleare il panel
const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Title -->
        <section class="title-section jumbo-bg">
          <div class="overlay">
            <div class="title uppercase">
              <h1 id="about-us">chi siamo</h1>
            </div>
          </div>
        </section>
        <!-- END title -->

        <!-- Articles section -->
        <section class="article-container d-flex">
          <!-- Article section -->
          <article class="paragraphs-container">
            <!-- First paragraph -->
            <p class="first-paragraph">
              Il Gruppo Insubrico di Ornitologia (GIO) si forma nel 1999 per
              iniziativa di Piero Alberti, Walter Guenzani e Fabio Saporetti
              presso il Civico Museo Insubrico di Storia naturale di Induno
              Olona, grazie all'ospitalità offerta dal Curatore Gianluca Danini.
              <br />
              Scopo principale dell'associazione è quello di promuovere
              l'indagine ornitologica a livello provinciale ed insubrico,
              unitamente ad attività di divulgazione con l'organizzazione di
              conferenze, corsi e convegni, collaborando anche con enti pubblici
              e privati.
            </p>
            <!-- END first paragraph -->

            <hr />

            <!-- Second paragraph -->
            <div class="second-paragraph-container d-flex">
              <p class="second-paragraph">
                Nel dicembre 2009 il GIO, per volontà di 9 soci fondatori, si
                costituisce come Onlus presso il Registro di Varese, spostandosi
                da Induno Olona a Clivio, nell'edificio che diverrà la'sede del
                nuovo Civico Museo Insubrico di Storia Naturale di Clivio e
                Induno Olona.
                <br />
                Per il periodo 2010-2012 viene eletto il primo Consiglio
                Direttivo con Fabio Saporetti (Presidente), Monica Carabella
                (Vice-Presidente) e 3 Consiglieri: Paolo Casali (poi sostituito
                da Andrea Vidolini), Silvio Colaone e Walter Guenzani.
              </p>
            </div>
            <!-- END Second paragraph -->
          </article>
          <!-- END article section -->

          <!-- Button-container -->
          <div
            class="button-container d-flex"
            :class="{ 'panel-open': isPanelOpen }"
          >
            <div class="half-circle">
              <button @click="togglePanel" class="toggle-btn">
                <div class="toggle-icon">
                  <span
                    class="bar bar1"
                    :class="{ active: isPanelOpen }"
                  ></span>
                  <span
                    class="bar bar2"
                    :class="{ active: isPanelOpen }"
                  ></span>
                </div>
              </button>
            </div>
          </div>
          <!-- END button-container -->

          <!-- List container -->
          <div class="right-container" :class="{ active: isPanelOpen }">
            <div class="list-container">
              <h2>Dal 2025 il direttivo è così composto</h2>
              <div class="list">
                <h4>Presidente</h4>
                <div>
                  <ul>
                    <li>Milo Manica</li>
                  </ul>
                </div>
              </div>

              <div class="list">
                <h4>Vice-Presidenti</h4>
                <div>
                  <ul>
                    <li>Daniela Casola</li>
                    <li>Fabio Saporetti</li>
                  </ul>
                </div>
              </div>

              <div class="list">
                <h4>Consiglieri</h4>
                <div>
                  <ul>
                    <li>Ilaria Cervellin</li>
                    <li>Silvio Cova</li>
                    <li>Nicola Larroux</li>
                    <li>Jacopo Sacchet</li>
                  </ul>
                </div>
              </div>

              <div class="list">
                <h4>Segretaria amministrativa e tesoreria</h4>
                <div>
                  <ul>
                    <li>Rosita Pigni</li>
                  </ul>
                </div>
              </div>

              <div class="list">
                <h4>Presidenti negli scorsi anni</h4>
                <div>
                  <ul>
                    <li>Fabio Saporetti</li>
                    <li>Monia Carabella</li>
                    <li>Walter Guenzani</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- END list container -->
        </section>
        <!-- END articles section -->

        <!-- Jumbo image section -->
        <section>
          <div class="jumbo-container">
            <div class="jumbo-image">
              <img src="" alt="" />
            </div>
            <div class="jumbo-text"></div>
          </div>
        </section>
        <!-- Jumbo image section -->

        <!-- Subscribe section -->
        <section class="subscribe-section bg-blue">
          <div class="subscribe-container d-flex">
            <div class="subscribe-box">
              <div class="subscribe-text">
                <div class="subscribe-title">
                  <h2>Diventare socio del GIO</h2>
                </div>
                <p>
                  Associarsi al Gruppo Insubrico di Ornitologia significa
                  sentirsi parte attiva di un gruppo di amici realmente
                  appassionati di avifauna, sotto i variegati aspetti che
                  spaziano dal birdwatching all'ornitologia vera e prop'ia.
                  <br />
                  <br />
                  Punto centrale e irrinunciabile dello spirito
                  dell'associazione è quello di promuovere la conoscenza e la
                  conservazione della fauna e degli habitat, che rientrano negli
                  aspetti più generali del rispetto della vita che ci circonda e
                  del miglioramento della qualità dell'ambiente in cui viviamo'
                  <br />
                  <br />
                  Se siete curiosi e avete voglia di scoprire, studiare,
                  condividere, dedicarvi ai monitoraggi e censimenti, e anche
                  alla didattica dell'ornitologia, il GIO è l'associazione che
                  fa per voi!
                </p>

                <div class="subscribe-text-image">
                  <img src="../assets/images/tessera-socio.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="subscribe-image">
              <img src="" alt="" />
            </div>
          </div>

          <!-- Bottom paragraph -->
          <div class="subscribe-text-bottom">
            <h3>ISCRIZIONE ANNUALE</h3>
            <p>
              Chiunque condivida gli scopi della nostra associazione e abbia un
              po' di tempo libero da dedicare a questa particolare forma di
              "volontariato di ricerca", o voglia comunque sostenere il GIO, può
              iscriversi pagando una quota annuale di 20 euro (10 euro per
              minorenni e studenti).
              <br />
              La quota di iscrizione comprende l'assicurazione "responsabilità
              civile" obbligatoria per le onlus. All'iscrizione il GIO rilascia
              una tessera, con il "bollino" di validità dell'anno in corso, a
              cui si aggiungeranno i successivi bollini annuali adesivi.
            </p>

            <h3>RIUNIONI MENSILI</h3>
            <p>
              Ci riuniamo il secondo lunedì di ogni mese (escluso agosto, di
              solito) in un locale presso il Comune di Casciago (VA), dove ci
              aggiorniamo sui progetti in corso, proponiamo e organizziamo
              iniziative con un "ordine del giorno" che viene mandato dal
              Presidente tempestivamente per mail a tutti i soci, che possono
              proporre ulteriori argomenti o apportare modifiche.
              <br />
              Gli incontri ufficiali (come l'assemblea annuale) vengono invece
              tenuti presso la nostra sede al Civico Museo Insubrico di Storia
              Naturale a Clivio (VA).
              <br />
              Le riunioni mensili sono incontri informali in cui ci si confronta
              anche su osservazioni ornitologiche, viaggi naturalistici,
              commenti e visione di pubblicazioni e fotografie ecc.
            </p>

            <h3>COMUNICAZIONI TRA I SOCI</h3>
            <p>
              Tutti i soci sono compresi nella mailing-list del GIO, attraverso
              cui si viene informati dell'intera attività del gruppo. Alcuni
              argomenti, di solito quelli più formali e amministrativi, vengono
              trattati dal Consiglio Direttivo, che ne informa quindi il resto
              dei soci in occasione delle riunioni mensili.
              <br />
              Abbiamo anche un Tesoriere e un Vice-tesoriere che si occupano
              delle questioni finanziarie (entrate e uscite, rendiconto
              economico, rimborsi spese, acquisti vari).
            </p>
          </div>
          <!-- END bottom paragraph -->
        </section>
        <!-- END subscribe section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Jumbo section
.col {
  .title-section {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin-bottom: 3rem;

    .overlay {
      height: 100%;
    }
  }

  .jumbo-bg {
    background: url(/src/assets/images/jumbo.webp) center/cover no-repeat;

    .title {
      text-align: center;
      padding-top: 10rem;
    }
  }
}
// END jumbo section

// Description section
.article-container {
  width: 95%;
  margin: 0 auto;
  position: relative;
  overflow: hidden; // Nasconde il panel quando è fuori dal contenitore

  .paragraphs-container {
    width: 95%;
    transition: width 0.4s ease;

    .first-paragraph {
      width: 70%;
      padding: 1rem 0 2.3rem 2rem;
    }

    .second-paragraph-container {
      width: 100%;
      justify-content: end;
      padding: 4rem 2rem 1rem 0rem;

      .second-paragraph {
        width: 70%;
      }
    }

    hr {
      position: relative;
      width: 30%;
      left: 15rem;
      border: none;
      border-top: 2px solid rgb(141, 141, 141);
    }
  }

  .button-container {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    align-items: center;
    background-color: transparent;
    transition: right 1s ease;
    z-index: 100;

    &.panel-open {
      right: 400px;
    }

    .half-circle {
      width: 80px;
      height: 6rem;
      border-radius: 50% 0 0 50%;
      background-color: #2b2b9e;
    }

    .toggle-btn {
      font-size: 2rem;
      height: 6rem;
      width: 100%;
      border: none;
      border-radius: 50% 0 0 50%;
      background-color: #2b2b9e;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .toggle-icon {
        position: relative;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.5s ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }

      .bar {
        position: absolute;
        width: 3px;
        height: 45px;
        background-color: white;
        transition: all 1s ease;
      }

      .bar1 {
        left: 8px;

        &.active {
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        }
      }

      .bar2 {
        right: 8px;

        &.active {
          right: 50%;
          transform: translateX(50%) rotate(-45deg);
        }
      }
    }
  }

  .right-container {
    position: absolute;
    right: -380px;
    top: 0;
    width: 400px;
    height: 100%;
    border-top-left-radius: 1.3rem;
    border-bottom-left-radius: 1.3rem;
    background-color: #2b2b9e;
    padding: 3rem 2rem;
    overflow-y: auto;
    transition: right 1s ease;
    z-index: 99;
    color: white;

    &.active {
      right: 0;
    }

    .list-container {
      h2 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        font-weight: 300;
      }

      .list {
        margin-bottom: 2rem;

        h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #f0f0f0;
        }

        ul {
          list-style: none;
          padding-left: 0;

          li {
            padding: 0.3rem 0;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
// END description section

// Stile per lo scrollbar del panel (opzionale ma consigliato)
.right-container::-webkit-scrollbar {
  width: 8px;
}

.right-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.right-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
