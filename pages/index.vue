<script>
import Landing from "~/components/Landing";
import Overview from "~/components/Overview";
import Footer from "~/components/Footer";

export default {
  components: {
    Landing,
    Overview,
    Footer
  }
};
</script>
<template>
  <div>
    <Landing />
    <div class="main">
      <Overview />
      <Footer />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  background-color: $bgColor;
}
</style>
