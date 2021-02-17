import ScrollReveal from "scrollreveal";
import Background from "./Background";
import Project from "./Project";

ScrollReveal().reveal(".reveal", {
  interval: 100,
  duration: 1500,
  distance: "30px",
});

const background = new Background(document.getElementById('background'));
background.resize();
background.scroll();

const project1 = new Project(document.getElementById('p1'), require('../images/projects/digital-impact-simulator.png'));
project1.resize();

window.addEventListener('resize', () => {
  background.resize();
  project1.resize();
});
window.addEventListener('scroll', () => {
  background.scroll()
});
