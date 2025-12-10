<script></script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Title -->
        <section>
          <div class="title-container">
            <h1 class="title-color uppercase">link utili</h1>
          </div>
        </section>
        <!-- END title -->

        <!-- Grid -->
        <section class="grid-container">
          <div class="grid-table">
            <div class="column">
              <p>ornitologia</p>
            </div>

            <div class="column">
              <p>birdwatching</p>
            </div>

            <div class="column">
              <p>natura</p>
            </div>
          </div>
        </section>
        <!-- END grid -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  width: 100%;
  height: 100vh;
  background-position: center;
  object-fit: contain;
  background-image: url(../assets/images/gheppio.jpg);

  .col {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    .title-container {
      width: 100%;
      padding-top: 6rem;
      text-align: center;

      h1 {
        font-size: 5rem;
      }
    }

    .grid-container {
      .grid-table {
        gap: 0.5rem;
        width: 90%;
        margin: 0 auto;
        display: grid;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr;

        .column {
          background-color: red;
        }
      }
    }
  }
}
</style>
