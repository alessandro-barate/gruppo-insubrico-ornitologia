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
              <div class="column-inner">
                <!-- Front card -->
                <div
                  class="column-front gradient-color"
                  :class="`bg-${categoryKey}`"
                >
                  <p class="front-text">{{ getCategoryName(categoryKey) }}</p>
                </div>
                <!-- END front card -->

                <!-- Back card -->
                <div class="column-back gradient-color d-flex">
                  <p
                    class="back-link"
                    v-for="(link, index) in category"
                    :key="index"
                  >
                    <a :href="link.href" target="_blank" class="link-inside">{{
                      link.title
                    }}</a>
                  </p>
                </div>
                <!-- END back card -->
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
        perspective: 2000px;
        grid-template-columns: 1fr 1fr 1fr;

        .column {
          height: 45rem;
          position: relative;
          border-radius: 1rem;
          perspective: 3000px;

          &:hover .column-inner {
            transform: rotateY(180deg);
          }

          .column-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .column-front {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            backface-visibility: hidden;
            border-radius: 1rem;
            border: 0.13rem solid rgba(0, 0, 0, 0.8);
            transform-style: preserve-3d;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            position: relative;

            &::before {
              content: "";
              z-index: 1;
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
              z-index: 2;
              letter-spacing: 2px;
              transform: translateZ(30px);
            }
          }

          .column-back {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            backface-visibility: hidden;
            border-radius: 1rem;
            border: 0.13rem solid rgba(0, 0, 0, 0.8);
            transform-style: preserve-3d;
            transform: rotateY(180deg);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.4rem;

            .test-static {
              color: yellow;
              font-size: 2rem;
              position: relative;
              z-index: 2;
              letter-spacing: 2px;
              transform: translateZ(30px);
              margin: 1rem 0;
              font-weight: bold;
            }

            .back-link {
              color: white;
              font-size: 1rem;
              position: relative;
              z-index: 2;
              letter-spacing: 2px;
              transform: translateZ(30px);
              padding: 0.4rem 1rem;
              border-radius: 0.5rem;
              cursor: pointer;
              text-underline-offset: 0.2rem;

              .link-inside {
                color: white;
                text-decoration: underline;
                display: block;
                transition: all 0.5s ease-in-out;

                &:hover {
                  color: rgb(0, 0, 0);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
