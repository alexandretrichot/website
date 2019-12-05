<script>
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";

export default {
  components: {
    Header
  },
  mounted() {
    this.$router.addRoutes([
	  { path: "/", component: Home },
	  { path: "/about", component: About},
      { path: "*", component: NotFound }
	]);
	
	window.addEventListener('load', () => {
		let loader = document.getElementById('loading-wrapper');
		loader.style.opacity = 0;
		setTimeout(() => {
			loader.style.display = 'none';
		}, 600);
	}, true)

  }
};
</script>
<template>
  <div id="app" ref="app">
    <Header id="header"></Header>
	<div style=" width: 200vw "></div>
    <router-view></router-view>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Solway:700&display=swap");

* {
  font-family: "Solway", monospace, serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: black;
  overflow-x: hidden;
}

h1 {
  font-size: 54px;
}

h2 {
  font-size: 40px;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  /*background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);*/
  overflow: hidden;
  z-index: 10;
}
</style>