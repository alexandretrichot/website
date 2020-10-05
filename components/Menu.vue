<script>
export default {
  name: "Menu",
  data: () => ({
    radX: 0,
    radY: 0,
  }),
  computed: {
    menuStyle() {
      return {
        transform: `rotateX(${this.radY}rad) rotateY(${this.radX}rad) translateZ(50px)`,
      };
    },
  },
  methods: {
    move(ev) {
      if (this.$refs.menu) {
        this.radX = (ev.clientX / this.$refs.menu.clientWidth - 0.5) * -0.5;
        this.radY = (ev.clientY / this.$refs.menu.clientHeight - 0.5) * 0.5;
      }
    },
    leave() {
      this.radX = 0;
      this.radY = 0;
    },
    toggle() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>
<template>
  <div class="menu" ref="menu" @mousemove="move" @mouseleave="leave">
    <font-awesome-icon class="close icon" icon="times" @click="toggle" />
    <div class="center" :style="menuStyle">
      <nuxt-link to="/" class="link" @click="toggle">Home</nuxt-link>
      <nuxt-link to="/projects" class="link" @click="toggle"
        >Projects</nuxt-link
      >
      <nuxt-link to="/contact" class="link" @click="toggle">Contact</nuxt-link>
    </div>
  </div>
</template>
<style lang="scss">
.menu {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    circle,
    hsl(138, 60%, 15%) 0%,
    hsl(138, 100%, 2%) 61%
  );
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  perspective: 800px;

  .center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateZ(100px);

    .link {
      font-size: 2rem;
      text-transform: uppercase;
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 0.5rem;
      text-align: center;

      transition: color .2s;

      &.nuxt-link-exact-active {
        display: none;
      }

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .close {
    font-size: 2rem;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }
}
</style>