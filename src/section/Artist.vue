<script>
export default {
  name: "artist",
  data() {
    return {};
  },
  mounted() {
    this.$anime({
      targets: this.$refs.morphing,
      d:
        "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
      loop: true,
      duration: 4000,
      direction: "alternate",
      easing: "linear"
    });
    this.$anime({
      targets: this.$refs.morphing,
      translateX: 40,
      loop: true,
      duration: 3200,
      direction: "alternate",
      easing: "linear"
    });
    this.$anime({
      targets: this.$refs.morphing,
      translateY: 10,
      loop: true,
      duration: 2200,
      direction: "alternate",
      easing: "linear"
    });
  }
};
</script>
<template>
  <section>
    <svg class="morph" viewBox="0 0 1000 1000">
      <clipPath id="clip-path">
        <path
          ref="morphing"
          d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
        />
      </clipPath>
      <image
        clip-path="url(#clip-path)"
        xlink:href="../assets/images/profile.png"
        src="../assets/images/profile.png"
        alt="Image"
        width="1000px"
        height="1000px"
      />
    </svg>
  </section>
</template>
<style scoped>
section {
  height: 100vh;
  position: relative;
  background: black;
}

.morph {
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0vw;
}
</style>