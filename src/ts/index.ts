import ScrollReveal from "scrollreveal";
import Background from "./Background";
import Project from "./Project";

import DISScreen from '../images/projects/digital-impact-simulator.png';

ScrollReveal().reveal(".reveal", {
  interval: 100,
  duration: 1500,
  distance: "30px",
});

const background = new Background(document.getElementById('background')!);
background.resize();
background.scroll();

const project1 = new Project(document.getElementById('p1')!, DISScreen);
project1.resize();

window.addEventListener('resize', () => {
  background.resize();
  project1.resize();
});
window.addEventListener('scroll', () => {
  background.scroll()
});
