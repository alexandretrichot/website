<script>
import particles from "particles.js";
import particlesConfig from "./particles.config";

export default {
  data() {
    return {
      images: [
        {
          image: require("../assets/images/bg1.jpg"),
          author: "Kevin Mueller",
          authorTag: "kevinmueller"
        }
      ],
      imageId: 0
    };
  },
  mounted() {
    particlesJS("particles", particlesConfig);

    window.addEventListener("scroll", e => {
      const pos1 = -0.2 * window.scrollY,
        pos2 = -0.4 * window.scrollY;
	  this.$anime.set([this.$refs.backimg], { translateY: pos1 });
	  this.$anime.set(['#particles'], { translateY: pos2 });
    });
  }
};
</script>
<template>
  <div class="background">
    <img ref="backimg" class="backimg" :src="images[imageId].image" alt="Background image" />
    <div id="particles"></div>
    <div class="credits">
      <a
        :href="'https://unsplash.com/@' + images[imageId].authorTag"
        target="_blank"
        :title="'Voir ' + images[imageId].author + ' sur Unsplash'"
      >
        <span style="display:inline-block;padding:2px 3px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </span>
        <span
          style="display:inline-block;padding:2px 3px"
        >{{ "Photo par " + images[imageId].author }}</span>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  .backimg {
    position: fixed;
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    filter: blur(0px);
  }

  #particles {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .credits {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 12px;
    transform-origin: 100% 100%;
    transform: rotate(-90deg) translateX(100%);

    a {
      color: white;
      text-decoration: none;
      padding: 4px 6px;
      font-size: 12px;
      font-weight: bold;
      display: inline-block;
    }
  }
}
</style>