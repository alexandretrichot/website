import ScrollReveal from "scrollreveal";
import Background from "./Background";

ScrollReveal().reveal(".reveal", {
  interval: 100,
  duration: 1500,
  distance: "30px",
});

const background = new Background(document.getElementById('background'));

window.addEventListener('resize', background.resize.bind(background));
window.addEventListener('scroll', () => background.scroll());

background.resize();
background.scroll();
background.play();
