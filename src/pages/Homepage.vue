<script>
export default {
  name: 'Homepage'
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Jumbo section -->
        <section class="title-section jumbo-bg d-flex">
          <div class="empty-box"></div>
          <div class="title-container">
            <h1>GRUPPO INSUBRICO DI ORNITOLOGIA</h1>
          </div>
          <div class="empty-box"></div>
        </section>
        <!-- END jumbo section -->

        <!-- News overview -->
         <section>
          <div class="news-container d-flex">
            <div class="sections-title">
              <h2 class="title-1 uppercase">le ultime</h2>
              <h2 class="title-2 uppercase">news</h2>
              <h2 class="title-1 uppercase">del gio</h2>
            </div>
            <div class="news-description">
              <p>Le nostre news più recenti</p>
            </div>
          </div>

          <!-- News list -->
          <div class="news-list-container">
            <div class="news-list-box d-flex">
              <div class="single-news">
                <img src="../assets/images/bird-1.webp" alt="">
              </div>
              <div class="single-news">
                <img src="../assets/images/bird-2.jpg" alt="">
              </div>
              <div class="single-news">
                <img src="../assets/images/bird-3.jpg" alt="">
              </div>
            </div>
          </div>
          <!-- END news list -->
          
          <!-- News button -->
          <div class="button">
            <button>Leggi tutte le news</button>
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
            <hr>
            <div class="subscription-box gradient-color-subscribe">
              <div class="card-logo">
                <img src="../assets/images/subscribe-icon.svg" alt="">
              </div>
              <div class="subscription-description">
                <h3 class="uppercase">unisciti al gio!</h3>
                <p>Vuoi iscriverti?</p>
              </div>
              <div class="subscription-button button">
                <button>Iscriviti</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END subscribe section -->

        <!-- Activities section -->
        <section>
          <div class="activities-container news-container d-flex">
            <div class="activities-box">
              <div class="activities-list d-grid uppercase">
                <div class="activity-card card-1 d-flex">
                  <div class="card-default d-flex">
                    <span class="gradient-color">progetti</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="">
                    <p>progetti</p>
                  </div>
                </div>
                <div class="activity-card card-2 d-flex">
                  <div class="card-default d-flex">
                    <span class="gradient-color">l'aviofauna di varese</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="">
                    <p>l'aviofauna di varese</p>
                  </div>
                </div>
                <div class="activity-card card-3 d-flex">
                  <div class="card-default d-flex">
                    <span class="gradient-color">conferenze</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="">
                    <p>conferenze</p>
                  </div>
                </div>
                <div class="activity-card card-4 d-flex">
                  <div class="card-default d-flex">
                    <span class="gradient-color">corsi</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="">
                    <p>corsi</p>
                  </div>
                </div>
                <div class="activity-card card-5 d-flex">
                  <div class="card-default d-flex">
                    <span class="gradient-color">pubblicazioni</span>
                  </div>
                  <div class="card-hover gradient-color">
                    <img src="../assets/images/arrow-right.svg" alt="">
                    <p>pubblicazioni</p>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="sections-title activities-title">
              <h2 class="title-1 uppercase">scopri le nostre</h2>
              <h2 class="title-2 gradient-color uppercase">attività</h2>
              <h2 class="title-1 uppercase">vediamole insieme</h2>
            </div>
          </div>
        </section>
        <!-- END activities section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.jumbo-bg {
  background: url(../assets/images/jumbo-home.webp) center/cover no-repeat;
}

.title-section {
  padding-top: 10rem;
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
}

.title-section::after {
  content: '';
  position: absolute;
  bottom: -0.0625rem;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.empty-box {
  width: 20%;
}

.title-container {
  width: 60%;
  text-align: center;
}

.news-container {
  width: 100%;

  .sections-title {
    width: 50%;

    .title-1,
    .title-2 {
      background: linear-gradient(90deg, #0077FF, #5cd20d);
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
  padding-top: 2rem;
  padding-bottom: 3rem;

  button {
    color: white;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background: linear-gradient(90deg, #0077FF, #5cd20d);

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
    color: white;
    width:  10%;
    margin-left: 10rem;
    margin-bottom: 2rem;
  }
}

.subscription-container::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.subscription-container::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 150px;
  background: #ffffff;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.activities-container {
  width: 100%;
  margin-top: 5rem;

  .activities-box {
    width: 50%;

    .activities-list {
      grid-template-rows: repeat(2, 1);

      .activity-card {
        border-radius: 0.5rem;
        position: relative;
        height: 14rem;
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
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
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

  .activities-title .title-2 {
    margin-bottom: 2rem;
  }
}
</style>