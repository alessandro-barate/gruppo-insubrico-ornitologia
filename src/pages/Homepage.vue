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
              <h2 class="title-1">LE ULTIME</h2>
              <h2 class="title-2">NEWS</h2>
              <h2 class="title-1">DEL GIO</h2>
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
          
          <div class="news-button">
            <button>Leggi tutte le news</button>
          </div>
         </section>
        <!-- END news overview -->

        <!-- About us section -->
        <section>
          <div class="subscription-container news-container">
            <div class="sections-title subscription-title">
              <h2 class="title-1">DIVENTA NOSTRO</h2>
              <h2 class="title-2">SOCIO</h2>
            </div>
            <div class="subscription-box">
              <div class="card-logo">
                <img src="" alt="">
              </div>
              <div class="subscription-description">
                <h3>ISCRIVITI AL GIO</h3>
                <p>Vuoi iscriverti?</p>
              </div>
              <div class="subscription-button">
                <button>Iscriviti</button>
              </div>
            </div>
          </div>
        </section>
        <!-- END about us section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 7rem;
  font-weight: bold;
  background: linear-gradient(90deg, #0077FF, #5cd20d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

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

.news-button {
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
      transition: color 0.8s ease;
    }
  }
}

.subscription-container {
  padding-top: 10rem;
  width: 100%;
  position: relative;
  min-height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(../assets/images/parallax-image.jpg);
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
</style>