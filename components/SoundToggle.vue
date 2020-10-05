<script>
export default {
  data() {
    return {
      playerReady: this.$player.ready,
      active: !this.$player.muted,
    };
  },
  mounted() {
    this.$player.on("ready", (r) => {
      console.log('hey !!!');
      this.playerReady = r;
    });
    this.$player.on("muted", (m) => (this.active = !m));
  },
  methods: {
    toggleSounds() {
      this.$player.toggle();
    },
  },
};
</script>
<template>
  <button v-if="playerReady" class="sound" @click="toggleSounds">
    <div class="bars" :class="{ off: !active }">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </button>
</template>
<style lang="scss">
.sound {
  background-color: transparent;
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 1rem;
  border: none;
  opacity: 0.5;

  transition: opacity .2s;

  .bars {
    display: flex;
    align-items: flex-end;
    height: 2.4rem;
    width: 2.4rem;
    margin: 1rem;

    .bar {
      height: 0.4rem;
      width: 0.4rem;
      background-color: white;
      margin: 0.2rem;
      border-radius: 0.1rem;

      animation: bar 0.3554s ease-in-out infinite alternate;

      &:nth-child(2) {
        animation: bar 0.2643s ease-in-out infinite alternate;
      }

      &:nth-child(3) {
        animation: bar 0.5345s ease-in-out infinite alternate;
      }
    }

    &.off .bar {
      animation-name: bar-small;
    }
  }

  &:hover {
    opacity: 1;
  }
}

@keyframes bar {
  to {
    height: 1.2rem;
  }
}

@keyframes bar-small {
  to {
    height: 0.5rem;
  }
}
</style>