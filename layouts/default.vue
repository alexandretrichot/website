<script>
export default {
  data() {
    return {
      playerReady: false,
      playing: false,
    };
  },
  mounted() {
    this.$player.on("ready", (r) => (this.playerReady = r));
    this.$player.on("playing", (p) => (this.playing = p));
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
      :class="{ playing: playing }"
      @click="toggleSounds"
      :disabled="!playerReady"
    >
      Play
    </button>
    <nuxt />
  </div>
</template>
<style lang="scss">
.playing {
  background-color: green;
}
</style>