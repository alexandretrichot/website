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
        <font-awesome-icon class="icon" icon="bars" />
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

  height: 4rem;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: red;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 1.5rem;
    margin: 1rem;
  }
}
</style>