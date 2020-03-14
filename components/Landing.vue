<script>
import TypeIt from "typeit";
import Background from "~/components/Background";

export default {
  components: {
    Background
  },
  mounted() {
    const instance = new TypeIt("#type", {
      loop: true
    })
      .type("Développeur Web")
      .pause(1000)
      .type(" Freelance")
      .pause(500)
      .delete()
      .pause(300)
      .type("Musicien")
      .pause(500)
      .go();
  }
};
</script>
<template>
  <section class="landing">
    <Background />
    <div class="main">
      <div class="box">
        <h1>Alexandre Trichot</h1>
        <h2>
          <span id="type"></span>
        </h2>
		<!-- <a class="button big outline lm" href="mailto:contact@alexandretrichot.fr">Contact</a> -->
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.landing {
  height: 100vh;
  position: relative;
  overflow: hidden;
  clip-path: inset(0, 0, 0, 0);
}

.main {
  height: 100%;
  width: 100%;
}

.box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  width: 100%;
}
</style>