<script>
export default {
  props: {
    speed: {
      default: 0.15,
      type: Number
    }
  },
  mounted() {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(f) {
        setTimeout(f, 1000 / 60);
      };
    window.addEventListener("scroll", this.scrollHandler, false);
  },

  methods: {
    scrollHandler() {
      window.requestAnimationFrame(() => {
        let animationValue = -1 * window.pageYOffset * this.speed * 0.1;

        this.$refs.parallax.style.transform =
          "translate3d(0, " + animationValue + "px ,0)";
      });
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler, false);
  }
};
</script>
<template>
  <div ref="parallax">
    <slot></slot>
  </div>
</template>
<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
