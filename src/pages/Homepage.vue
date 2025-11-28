<script>
export default {
  name: "Homepage",

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    const newsBox = document.querySelector(".news-box");
    const subscriptionTitle = document.querySelector(".subscription-title");
    const activitiesTitle = document.querySelector(".activities-title");
    const firstBox = document.querySelector(".first-box");
    const secondBox = document.querySelector(".second-box");

    const observerLow = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerLow.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const observerBottom = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerBottom.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (newsBox) observer.observe(newsBox);
    if (subscriptionTitle) observer.observe(subscriptionTitle);
    if (activitiesTitle) observer.observe(activitiesTitle);
    if (firstBox) observerLow.observe(firstBox);
    if (secondBox) observerBottom.observe(secondBox);
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Jumbo section -->
        <section class="title-section jumbo-bg d-flex">
          <div class="overlay">
            <div class="title-container">
              <div class="fade-wrapper">
                <p class="uppercase">gio</p>
              </div>
            </div>

            <div class="title-container title-container-2">
              <div class="fade-wrapper-2">
                <p class="uppercase">gruppo insubrico</p>
              </div>
            </div>

            <div class="title-container title-container-3">
              <div class="fade-wrapper-2">
                <p class="uppercase">di ornitologia</p>
              </div>
            </div>
          </div>
        </section>
        <!-- END jumbo section -->

        <!-- News overview -->
        <section>
          <div class="news-container d-flex">
            <div class="sections-title news-box">
              <h2 class="title-1 part-1 uppercase">le ultime</h2>
              <h2 class="title-2 part-2 uppercase">news</h2>
              <h2 class="title-1 part-3 uppercase">del g.i.o.</h2>
            </div>
            <div class="news-description">
              <p>Le nostre news più recenti</p>
              <br />
            </div>
          </div>

          <!-- News list -->
          <div class="news-list-container">
            <div class="news-list-box d-flex">
              <div class="single-news">
                <img src="../assets/images/bird-1.webp" alt="" />
              </div>
              <div class="single-news">
                <img src="../assets/images/bird-2.jpg" alt="" />
              </div>
              <div class="single-news">
                <img src="../assets/images/bird-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <!-- END news list -->

          <!-- News button -->
          <div class="button">
            <router-link :to="{ name: 'News' }">
              <button>Leggi tutte le news</button>
            </router-link>
          </div>
          <!-- END news button -->
        </section>
        <!-- END news overview -->

        <!-- Subscribe section -->
        <section>
          <div class="subscription-container news-container">
            <div class="sections-title subscription-title">
              <h2 class="title-1 uppercase">diventa nostro</h2>
              <h2 class="title-2 gradient-color uppercase">socio</h2>
            </div>
            <hr />
            <div class="subscription-box gradient-color-subscribe">
              <div class="card-logo">
                <img src="../assets/images/subscribe-icon.svg" alt="" />
              </div>
              <div class="subscription-description">
                <h3 class="uppercase">unisciti al g.i.o.!</h3>
                <p>
                  Vuoi diventare parte del gruppo o solo sostenerci?
                  <br />
                  Scopri come.
                </p>
                <p>Ti aspettiamo!</p>
              </div>
              <div class="subscription-button button">
                <button>Diventa socio</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END subscribe section -->

        <!-- Activities section -->
        <section>
          <div class="activities-container news-container d-flex">
            <!-- Grid section -->
            <div class="activities-box">
              <div class="activities-list d-grid uppercase">
                <router-link
                  :to="{ name: 'Projects' }"
                  class="activity-card card-1 d-flex"
                >
                  <div class="card-default d-flex">
                    <span class="gradient-color">progetti</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="" />
                    <p>progetti</p>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'Birds' }"
                  class="activity-card card-2 d-flex"
                >
                  <div class="card-default d-flex">
                    <span class="gradient-color">avifauna</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="" />
                    <p>l'aviofauna di varese</p>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'ConferencesCourses' }"
                  class="activity-card card-3 d-flex"
                >
                  <div class="card-default d-flex">
                    <span class="gradient-color">conferenze</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="" />
                    <p>conferenze</p>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'ConferencesCourses' }"
                  class="activity-card card-4 d-flex"
                >
                  <div class="card-default d-flex">
                    <span class="gradient-color">corsi</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="" />
                    <p>corsi</p>
                  </div>
                </router-link>

                <router-link
                  :to="{ name: 'Publications' }"
                  class="activity-card card-5 d-flex"
                >
                  <div class="card-default d-flex">
                    <span class="gradient-color">pubblicazioni</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="" />
                    <p>pubblicazioni</p>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- END grid section -->

            <hr />

            <!-- Activities title and description -->
            <div class="sections-title activities-title">
              <h2 class="title-1 uppercase">scopri le nostre</h2>
              <h2 class="title-2 gradient-color uppercase">attività</h2>
            </div>
            <!-- END activities title and description -->
          </div>
        </section>
        <!-- END activities section -->

        <!-- Contacts section -->
        <section class="contacts-container">
          <div class="contacts-box d-flex">
            <div class="contacts-text uppercase">
              <div class="first-box">
                <h3 class="text-1">resta sempre aggiornato!</h3>
                <h3 class="text-2">seguici sui nostri</h3>
                <h2 class="text-3">social</h2>
              </div>

              <hr />

              <div class="second-box">
                <h3 class="text-4">e iscriviti alla</h3>
                <h2 class="text-5">newsletter</h2>
              </div>
            </div>
            <div class="socials-container d-flex">
              <div class="facebook">
                <a
                  href="https://www.facebook.com/GruppoInsubricoDiOrnitologia"
                  target="_blank"
                >
                  <img
                    src="../assets/images/facebook.svg"
                    alt="Facebook logo e link"
                  />
                </a>
                <h3>Aggiungigi su Facebook</h3>
              </div>

              <hr class="space-1" />

              <div class="instagram">
                <a
                  href="https://www.instagram.com/gruppoinsubricoornitologia/"
                  target="_blank"
                >
                  <img
                    src="../assets/images/instagram.svg"
                    alt="Instagram logo e link"
                  />
                </a>
                <h3>Seguici su Instagram</h3>
              </div>

              <hr class="space-2" />

              <div class="newsletter">
                <a href="">
                  <img
                    src="../assets/images/newsletter.svg"
                    alt="Newsletter e link"
                  />
                </a>
                <h3>Iscriviti alla nostra newsletter</h3>
              </div>
            </div>
          </div>
        </section>
        <!-- END contacts section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.jumbo-bg {
  background: url(../assets/images/jumbo-home.webp) center/cover no-repeat;
}

.title-section {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
}

.title-container {
  width: 100%;
  text-align: center;
  padding-top: 8rem;

  p {
    font-size: 3rem;
  }

  .fade-wrapper {
    opacity: 0;
    animation: fadeIn 3s ease-in-out forwards;

    p {
      line-height: 10rem;
      font-size: 12rem;
      font-weight: 500;
      background: linear-gradient(90deg, #19d2b9 0%, #feff01 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      letter-spacing: 3rem;
    }
  }

  .fade-wrapper-2 {
    opacity: 0;
    animation: fadeIn 4.5s ease-in-out forwards;

    p {
      font-size: 3.2rem;
      font-weight: 600;
      letter-spacing: 1rem;
      background: linear-gradient(90deg, #1f1f1f, #b6b6b6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
}

.title-container-2 {
  padding-top: 10rem;
}

.title-container-3 {
  padding-top: 1rem;
}

.news-container {
  width: 100%;

  .sections-title {
    width: 50%;

    .part-1,
    .part-2,
    .part-3 {
      overflow: hidden; /* Nasconde l'elemento fino a quando non entra nella pagina */
      white-space: nowrap; /* Impedisce al testo di andare a capo */
      width: 100%;
      text-align: left;
      opacity: 0;
      transform: translateX(-100%);
    }

    &.visible {
      .part-1 {
        animation: slideInLeft 1s ease-in-out forwards;
      }

      .part-2 {
        animation: slideInLeft 1s ease-in-out 0.3s forwards;
      }

      .part-3 {
        animation: slideInLeft 1s ease-in-out 0.6s forwards;
      }
    }

    .title-1,
    .title-2 {
      background: linear-gradient(90deg, #0077ff, #5cd20d);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .title-1 {
      font-size: 3rem;
      padding-top: 2rem;
      padding-left: 6rem;
    }

    .title-2 {
      font-size: 6rem;
      padding-top: 3rem;
      padding-left: 12rem;
    }
  }

  .news-description {
    width: 50%;
    text-align: center;

    p {
      font-size: 1.7rem;
      padding-top: 6rem;
    }
  }
}

.news-list-container {
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;

  .news-list-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 20px;

    .single-news {
      height: 18.75rem;
      object-fit: cover;
      overflow: hidden;
      border-radius: 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

.button {
  width: 100%;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 3rem;

  button {
    color: white;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background: linear-gradient(90deg, #0077ff, #5cd20d);

    &:hover {
      color: red;
    }
  }
}

.subscription-container {
  padding-top: 10rem;
  padding-bottom: 14rem;
  width: 100%;
  position: relative;
  min-height: 1000px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(../assets/images/parallax-image.jpg);

  .sections-title {
    margin-bottom: 2rem;
    overflow: hidden;

    .title-1,
    .title-2 {
      opacity: 0;
      transform: translateY(-100%);
    }

    &.visible {
      .title-1 {
        animation: slideInTop 1s ease-in-out forwards;
      }

      .title-2 {
        animation: slideInTop 1s ease-in-out 0.3s forwards;
      }
    }
  }

  .subscription-box {
    margin: 0 auto;
    width: 70%;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 0.5rem;

    .card-logo {
      width: 100%;
      margin-bottom: 2rem;

      img {
        width: 5%;
      }
    }

    h3 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .subscription-button {
      text-align: center;
    }

    .button {
      padding-bottom: 1rem;

      button {
        background: linear-gradient(90deg, #d2420d, #ffbf00);

        &:hover {
          color: rgb(0, 0, 0);
        }
      }
    }
  }

  hr {
    width: 10%;
    border: none;
    margin-left: 10rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid rgb(141, 141, 141);
  }
}

.activities-container {
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;

  hr {
    height: 150px;
    align-self: center;
    border: none;
    border-left: 2px solid rgb(141, 141, 141);
  }

  .activities-box {
    width: 55%;

    .activities-list {
      grid-template-rows: repeat(2, 1);

      .activity-card {
        border-radius: 0.5rem;
        position: relative;
        height: 13rem;
        overflow: hidden;
        cursor: pointer;

        .card-default {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: end;
          text-align: center;
          background-size: cover;
          background-position: center;
          opacity: 1;
          transition: opacity 0.5s ease-in-out;

          span {
            font-weight: bold;
            width: 100%;
            padding: 0.5rem;
            display: inline-block;
            opacity: 0.8;
          }
        }

        .card-hover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;

          img {
            width: 17%;
            margin-bottom: 1rem;
          }

          p {
            color: black;
            font-weight: 500;
            padding: 0.5rem;
          }
        }

        &:hover {
          .card-default {
            opacity: 0;
          }

          .card-hover {
            opacity: 1;
          }
        }
      }

      .card-1,
      .card-2,
      .card-3,
      .card-4,
      .card-5 {
        background-size: cover;
        background-position: center;
      }

      .card-1 {
        background-image: url(../assets/images/grid-1.webp);
      }
      .card-2 {
        background-image: url(../assets/images/grid-2.webp);
      }
      .card-3 {
        background-image: url(../assets/images/grid-3.webp);
      }
      .card-4 {
        background-image: url(../assets/images/grid-4.jpg);
      }
      .card-5 {
        background-image: url(../assets/images/grid-5.jpg);
      }
    }
  }

  .activities-title {
    margin-top: 4rem;
    overflow: hidden;

    .title-1,
    .title-2 {
      opacity: 0;
      transform: translateX(100%);
    }

    &.visible {
      .title-1 {
        animation: slideInRight 1s ease-in-out forwards;
      }

      .title-2 {
        margin-bottom: 2rem;
        animation: slideInRight 1s ease-in-out 0.3s forwards;
      }
    }
  }
}

.contacts-container {
  width: 100%;
  position: relative;
  background-image: linear-gradient(
      90deg,
      rgba(0, 119, 255, 0.85),
      rgba(92, 210, 13, 0.85)
    ),
    url(../assets/images/social.jpg);
  padding-top: 10rem;
  min-height: 875px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .contacts-box {
    width: 95%;
    padding: 2rem;
    margin: 0 auto;

    .contacts-text {
      width: 60%;
      color: white;

      h2 {
        font-size: 6rem;
      }

      h3 {
        font-size: 3rem;
      }

      hr {
        width: 250px;
        margin-left: 25rem;
        border-left: 2px solid rgb(141, 141, 141);
      }

      .first-box {
        opacity: 0;
        overflow: hidden;
        transform: translateX(50%);

        &.visible {
          animation: slideInLeft 1s ease-in-out forwards;
        }
      }

      .second-box {
        opacity: 0;
        overflow: hidden;
        transform: translateY(100%);

        &.visible {
          animation: slideInBottom 1s ease-in-out forwards;
        }
      }

      .text-1 {
        margin-bottom: 0.8rem;
      }

      .text-2 {
        margin-left: 1rem;
        margin-bottom: 2rem;
      }

      .text-3 {
        margin-left: 7rem;
        margin-bottom: 3rem;
      }

      .text-4 {
        margin-top: 2rem;
        margin-left: 3rem;
        margin-bottom: 2rem;
      }

      .text-5 {
        margin-left: 4rem;
      }
    }

    .socials-container {
      width: 40%;
      flex-direction: column;

      .space-1 {
        border: none;
        width: 150px;
        margin-left: 19rem;
        border-bottom: 2px solid black;
      }

      .space-2 {
        border: none;
        width: 250px;
        margin-left: 6rem;
        border-bottom: 2px solid black;
      }

      .facebook,
      .instagram,
      .newsletter {
        display: flex;
        padding-left: 3rem;
        align-items: center;
        height: calc(100% / 3);

        a {
          width: 20%;
          z-index: 1;
          border-radius: 26px;
          position: relative;
          padding: 8px 6px 4px 6px;
          border: 3px solid black;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, #d2420d, #ffbf00);
            border-radius: 23px;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            z-index: -1;
          }

          &:hover::before {
            opacity: 1;
          }
        }

        h3 {
          padding-left: 4rem;
        }
      }
    }
  }
}

// Effect on ::before and ::after
.title-section::after {
  content: "";
  position: absolute;
  bottom: -0.0625rem;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.subscription-container::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.subscription-container::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.contacts-container::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

// Keyframes
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
