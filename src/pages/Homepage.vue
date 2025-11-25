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
        <section class="title-section d-flex">
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
            <div class="news-title">
              <h2 class="title-1">LE ULTIME</h2>
              <h2 class="title-2">NEWS</h2>
            </div>
            <div class="news-description">
              <p>Le nostre news più recenti</p>
            </div>
          </div>
         </section>
        <!-- END news overview -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  font-size: 7rem;
  font-weight: bold;
  background: linear-gradient(90deg, #0077FF, #0d83c8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-section {
  padding-top: 10rem;
  position: relative;
  width: 100%;
  height: 800px;
  background: url(../assets/images/jumbo-home.webp) center/cover no-repeat;
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

  .news-title {
    width: 50%;

    .title-1,
    .title-2 {
      background: linear-gradient(90deg, #0077FF, #0d83c8);
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
</style>