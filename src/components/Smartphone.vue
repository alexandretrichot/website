<script>
import Unsplash from "unsplash-js";

export default {
  name: "Smartphone",
  data() {
    return {
      posts: ["", "", ""]
    };
  },
  mounted() {
    this.init();
    setInterval(() => this.nextPost(), 2000);
    this.scroll = this.$anime({
      targets: this.$refs.list,
      translateY: -164,
      duration: 500,
      autoplay: false,
      easing: "easeInOutSine",
      complete: anim => {
        this.posts.shift();
      }
    });
  },
  methods: {
    async init() {
      this.posts.push(await this.getImage());
      this.posts.push(await this.getImage());
      this.posts.push(await this.getImage());
    },
    async nextPost() {
      this.posts.push(await this.getImage());
      this.scroll.play();
    },
    async getImage() {
      let a = {
        url: (await fetch(`https://source.unsplash.com/152x152`)).url,
        key: new Date().getTime()
      };
      return a;
    }
  }
};
</script>
<template>
  <div class="smart">
    <div class="smartphone">
      <div class="screen" ref="screen">
        <div ref="list">
          <img class="post" :src="posts[0].url" />
          <img class="post" :src="posts[1].url" />
          <img class="post" :src="posts[2].url" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.smart {
	transform: scaleY(0.7);
}

.smartphone {
  margin: 24px;
  border-radius: 12px;
  border: solid white 2px;
  background: #111111;
  height: 320px;
  width: 200px;
  position: relative;
  transform: rotate(45deg);
}

.screen {
  position: absolute;
  top: 30px;
  bottom: 30px;
  right: 10px;
  left: 10px;
  background: white;
  overflow: hidden;
}

.post {
  display: block;
  height: 152px;
  width: 152px;
  margin: 12px;
  border-radius: 6px;
}
</style>