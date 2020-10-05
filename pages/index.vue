<script>
import Hello from "../components/Hello";

export default {
  components: {
    hello: Hello,
  },
};
</script>
<template>
  <div class="main home">
    <!-- LANDING -->
    <section class="landing">
      <hello />
      <div class="tlayer" ref="tlayer1">Hello World</div>
      <div class="tlayer" ref="tlayer2">I'm</div>
      <div class="tlayer" ref="tlayer3">Alexandre TRICHOT</div>
    </section>
  </div>
</template>
<style lang="scss">
.home {
  .landing {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .hello {
      z-index: 1;
    }

    .tlayer {
      display: block;
      position: absolute;
      user-select: none;
      white-space: nowrap;
      color: transparent;

      &:nth-child(2) {
        right: 9vw;
        top: 21vh;
        font-size: 9vw;
        -webkit-text-stroke: 2px rgb(194, 194, 194);
      }

      &:nth-child(3) {
        left: 5vw;
        bottom: calc(50vh - 13vw);
        font-size: 20vw;
        -webkit-text-stroke: 4px rgb(194, 194, 194);
      }

      &:nth-child(4) {
        right: 5vw;
        bottom: 10vh;
        font-size: 6vw;
        color: rgb(194, 194, 194);
      }
    }
  }
}
</style>
