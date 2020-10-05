<script>
import Hello from "../components/Hello";

export default {
  components: {
    hello: Hello,
  },
};
</script>
<template>
  <div class="main home">

    <!-- LANDING -->
    <section class="landing">
      <hello />
    </section>

    <!-- SOCIAL / CONTACT -->
    <section class="contact">
      <h2>Hit me on</h2>
    </section>
  </div>
</template>
<style lang="scss">
.home {
  .landing {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}
</style>
