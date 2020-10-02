<script>
export default {
  data() {
    return {
      playerReady: false,
      muted: true,
    };
  },
  mounted() {
    this.$player.on("ready", (r) => (this.playerReady = r));
    this.$player.on("muted", (m) => (this.muted = m));
  },
  methods: {
    toggleSounds() {
      this.$player.toggle();
    },
  },
};
</script>
<template>
  <div id="app">
    <button
      class="btn"
      :class="{ muted: muted }"
      @click="toggleSounds"
      :disabled="!playerReady"
    >
      Play
    </button>
    <nuxt />
  </div>
</template>
<style lang="scss">
.muted {
  background-color: black;
}
</style>