<script>
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";

export default {
  components: {
    Header
  },
  mounted() {
    this.$router.addRoutes([
      { path: "/", component: Home },
      { path: "*", component: NotFound }
	]);
	
	window.addEventListener('load', () => {
		document.getElementById('loading-wrapper').style.opacity = 0;
	}, true)

  }
};
</script>
<template>
  <div id="app" ref="app">
    <Header id="header"></Header>
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