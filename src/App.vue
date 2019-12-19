<script>
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import SendHelper from "./components/SendHelper";

export default {
  components: {
    Header,
    SendHelper
  },
  mounted() {
    this.$router.addRoutes([
      { path: "/", component: Home },
	  { path: "/portfolio", component: Portfolio },
      { path: "/about", component: About },
      { path: "/contact", component: Contact },
      { path: "*", component: NotFound }
	]);

    window.addEventListener(
      "load",
      () => {
        let loader = document.getElementById("loading-wrapper");
        loader.style.opacity = 0;
        setTimeout(() => {
          loader.style.display = "none";
        }, 600);
      },
      true
    );
  },
  computed: {
	  contactVisibility() {
		  return this.$route.path != '/contact';
	  }
  }
};
</script>
<template>
  <div id="app" ref="app">
    <Header id="header"></Header>
    <router-view></router-view>
    <SendHelper v-if="contactVisibility" class="helper" />
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  overflow: hidden;
  z-index: 100;
}

.helper {
  z-index: 30;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>