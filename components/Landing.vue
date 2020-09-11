<script>
import TypeIt from "typeit";
import Background from "~/components/Background";

//new TypeIt()

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
      .delete(9)
      .pause(300)

      .type("Fullstack")
      .pause(500)
      .delete(13)
      .pause(300)

      .type("Vue.js")
      .pause(600)
      .delete(6)
      .pause(100)
      .type("Wordpress")
      .pause(300)
      .delete()
      .pause(200)
      
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
      <div class="box m">
        <h1>Alexandre TRICHOT</h1>
        <p class="hm">
          <span id="type"></span>
        </p>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  color: white;
  text-align: center;
  width: 100%;

  h1 {
    margin: 0;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>