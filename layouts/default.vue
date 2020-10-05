<script>
import SoundToggle from "../components/SoundToggle";
import Menu from "../components/Menu";

export default {
  components: {
    "sound-toggle": SoundToggle,
    "app-menu": Menu,
  },
};
</script>
<template>
  <div id="app">
    <transition name="menu">
      <app-menu v-if="$store.state.menuOpen" />
    </transition>
    <nav>
      <div class="left">
        <nuxt-link to="/" class="site-name">Alexandre TRICHOT</nuxt-link>
      </div>
      <div class="right">
        <font-awesome-icon
          class="icon"
          icon="bars"
          @click="$store.commit('toggleMenu')"
        />
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
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .site-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .icon {
    font-size: 1.5rem;
    margin: 1rem;
  }
}
</style>