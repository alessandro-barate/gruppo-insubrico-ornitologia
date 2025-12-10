<script>
import { links } from "../store";

export default {
  name: "Links",
  data() {
    return {
      links: links,
    };
  },
  methods: {
    // Getting the category name
    getCategoryName(categoryKey) {
      const names = {
        ornithology: "Ornitologia",
        birdwatching: "Birdwatching",
        nature: "Natura",
      };

      return names[categoryKey] || categoryKey;
    },
  },
};
</script>
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
            <div
              class="column"
              v-for="(category, categoryKey) in links"
              :key="categoryKey"
            >
              <div class="column-front">
                <p>{{ getCategoryName(categoryKey) }}</p>
              </div>
              <div class="column-back">
                <div class="list-container">
                  <ul>
                    <li
                      class="list-element"
                      v-for="(link, index) in category"
                      :key="index"
                    >
                      <a :href="link.href" target="_blank">{{ link.title }}</a>
                    </li>
                  </ul>
                </div>
              </div>
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
  background-position: center;
  background-size: cover;
  background-image: url(../assets/images/gheppio.jpg);

  .col {
    width: 100%;
    padding-bottom: 6rem;
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
      padding-top: 7rem;

      .grid-table {
        gap: 1rem;
        width: 85%;
        margin: 0 auto;
        display: grid;
        text-align: center;
        perspective: 1000px;
        grid-template-columns: 1fr 1fr 1fr;

        .column {
          height: 40rem;
          position: relative;
          border-radius: 1rem;
          transition: transform 2s;
          transform-style: preserve-3d;

          &:hover {
            transform: rotateY(180deg);
          }

          .column-front,
          .column-back {
            width: 100%;
            border-radius: 1rem;
            position: absolute;
            backface-visibility: hidden;
          }

          .column-front {
            height: 100%;
            background-color: aqua;
          }

          .column-back {
            height: 100%;
            background-color: red;
            transform: rotateY(180deg);

            .list-element {
              margin-top: 1rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
