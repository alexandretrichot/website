<script>
import SoundToggle from "../components/SoundToggle";

export default {
  components: {
    "sound-toggle": SoundToggle,
  },
};
</script>
<template>
  <div id="app">
    <nav>
      <div class="left"></div>
      <div class="right">
      </div>
    </nav>
    <sound-toggle />
    <nuxt />
  </div>
</template>
<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;

  height: 3rem;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.left,
.right {
  display: flex;
}
</style>