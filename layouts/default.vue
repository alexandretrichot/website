<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
  }
};
</script>
<template>
  <div id="app" ref="app">
    <Header id="header"></Header>
    <nuxt />
  </div>
</template>
<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  /* background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); */
  overflow: hidden;
  z-index: 100;
}
</style>