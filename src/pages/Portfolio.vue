<script>
export default {
  name: "Portfolio",
  mounted() {
    this.$anime({
      targets: this.$refs.morphing,
      d:
        "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
      loop: true,
      duration: 4000,
      direction: "alternate",
      easing: "easeInOutSine"
    });
  }
};
</script>
<template>
  <section>
    <div class="morph-wrap">
      <svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
        <path
          ref="morphing"
          d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
        />
      </svg>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-1">
        <img class="content__img" src="../assets/images/music.jpg" alt="Some image" />
        <h3 class="content__title">revert</h3>
        <p class="content__author">Gregory Mourisha</p>
        <p class="content__desc">Finding the heart when paradise is lost.</p>
        <a href="#" class="content__link">Discover</a>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-2">
        <img class="content__img" src="../assets/images/music.jpg" alt="Some image" />
        <h3 class="content__title">bunch</h3>
        <p class="content__author">Nikimo Westlane</p>
        <p class="content__desc">The neverending quest, once and forever.</p>
        <a href="#" class="content__link">Discover</a>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-3">
        <img class="content__img" src="../assets/images/music.jpg" alt="Some image" />
        <h3 class="content__title">found</h3>
        <p class="content__author">Jane Westhall</p>
        <p class="content__desc">Lost or found? That's the question today.</p>
        <a href="#" class="content__link">Discover</a>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-4">
        <img class="content__img" src="../assets/images/music.jpg" alt="Some image" />
        <h3 class="content__title">east</h3>
        <p class="content__author">Walter Mastricht</p>
        <p class="content__desc">The outer bounds of the world, from within.</p>
        <a href="#" class="content__link">Discover</a>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content content--layout content--layout-1">
        <img class="content__img" src="../assets/images/music.jpg" alt="Some image" />
        <h3 class="content__title">frank</h3>
        <p class="content__author">Frank Cherry</p>
        <p class="content__desc">Frank's work and nothing more.</p>
        <a href="#" class="content__link">Discover</a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.morph-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.morph {
  position: relative;
  height: 100%;
  fill: yellow;
  flex: none;
}

section {
  position: relative;
  background: black;
  overflow: hidden;
  color: white;
  text-shadow: 0 0 5px black;
}

.content-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  pointer-events: none;
}

.content--layout {
  pointer-events: auto;
  justify-content: center;
  align-content: center;
  grid-template-columns: 150px 150px 150px 150px;
  grid-template-rows: 150px 75px 75px;
  grid-template-areas: "... title title title" "author ... desc desc" "author ... link link";
}

.content--layout-2 {
  grid-template-areas: "... title title title" "desc desc ... author" "link link ... author";
}

.content--layout-3 {
  grid-template-rows: 75px 75px 150px;
  grid-template-areas: "... ... desc desc" "author title title title" "author ... link link";
}

.content--layout-4 {
  grid-template-areas: "title title title desc" "... author ... desc" "... author ... link";
}

.content {
  position: relative;
  display: grid;
}

.content--layout-2 .content__img {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
}

.content--layout-3 .content__img {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.content--layout-4 .content__img {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}

.content__img {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  opacity: 0.8;
  width: 300px;
  height: 300px;
}
img {
  border: 0;
}

.content__title {
  grid-area: title;
  letter-spacing: -0.025em;
  font-size: 8em;
  line-height: 160px;
  margin: 0;
  text-transform: lowercase;
  z-index: 10;
  cursor: default;
}

.content__author {
  grid-area: author;
  margin: 0;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  padding: 1em;
  text-align: right;
  z-index: 10;
  cursor: default;
}

.content__desc {
  grid-area: desc;
  margin: 0;
  z-index: 10;
  padding: 0 1em;
  cursor: default;
}

.content__link {
  pointer-events: auto;
  grid-area: link;
  align-self: end;
  justify-self: start;
  z-index: 10;
  padding: 0 1em 0.15em;
}

a {
  text-decoration: none;
  color: var(--link-color);
  outline: none;
}
</style>