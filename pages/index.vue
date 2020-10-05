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
