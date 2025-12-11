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
              <div
                class="column-front d-flex gradient-color"
                :class="`bg-${categoryKey}`"
              >
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
        gap: 5rem;
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
          border: 0.13rem solid rgba(0, 0, 0, 0.8);

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
            align-items: center;
            justify-content: center;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.4);
              border-radius: 1rem;
            }

            &.bg-ornithology,
            &.bg-birdwatching,
            &.bg-nature {
              background-size: cover;
              background-position: center;
            }

            &.bg-ornithology {
              background-image: url(../assets/images/poiana.webp);
            }

            &.bg-birdwatching {
              background-image: url(../assets/images/birdwatching.webp);
            }

            &.bg-nature {
              background-image: url(../assets/images/nature.webp);
            }

            p {
              color: white;
              font-size: 2rem;
              position: relative;
              z-index: 1;
            }
          }

          .column-back {
            height: 100%;
            opacity: 0.8;
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
