<script>
import particles from "particles.js";
import TypeIt from "typeit";
import Parallax from "../components/Parallax";

export default {
  components: {
    Parallax
  },
  data() {
    return {
      images: [
        {
          image: require("../assets/images/bg1.jpg"),
          author: "Kevin Mueller",
          authorTag: "kevinmueller"
        },
        {
          image: require("../assets/images/bg2.jpg"),
          author: "Kevin sdfs df sdf Mueller",
          authorTag: "kevinmuellerdf sdf sdf "
        },
        {
          image: "https://images.unsplash.com/photo-1575015642299-5b92fcbd0ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          author: "Kevin sdfs df sdf Mueller",
          authorTag: "kevinmuellerdf sdf sdf "
        }
      ],
      imageId: 2
    };
  },
  mounted() {
    particlesJS("particles", {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: false,
            mode: "bubble"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 97.44926547616143,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    const instance = new TypeIt("#type", {
      loop: true
    })
      .type("Développeur Web")
      .pause(1000)
      .type(" Freelance")
      .pause(500)
      .delete()
      .pause(300)
      .type("Musicien")
      .pause(500)
      .go();

	//this.images[this.imageId].image = prompt("Enter the image", "https://images.unsplash.com/photo-1575015642299-5b92fcbd0ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")
    this.imageId = this.images.length > 1 ? Math.round(Math.random(0, this.images.length - 1)) : 0;
  }
};
</script>
<template>
  <section>
    <div class="background">
      <parallax :speed="2">
        <img ref="backimg" class="backimg" :src="images[imageId].image" alt="Background image" />
        <div class="backlayer"></div>
      </parallax>
    </div>
    <div id="particles" class="main">
      <div class="box">
        <h1>Alexandre Trichot</h1>
        <h2>
          <span id="type"></span>
        </h2>
      </div>
      <div class="credits">
        <a
          :href="'https://unsplash.com/@' + images[imageId].authorTag"
          target="_blank"
          title="Voir Kevin Mueller sur Unsplash"
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
  </section>
</template>
<style scoped>
section {
  height: 100vh;
  position: relative;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.backimg {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  filter: blur(0px);
}

.backlayer {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  /*background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);*/
}

.main {
  height: 100%;
  width: 100%;
}

.box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  width: 100%;
  padding: 24px;
}

.credits {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 12px;
  transform-origin: 100% 100%;
  transform: rotate(-90deg) translateX(100%);
}

.credits a {
  color: white;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
}

h1 {
  margin: 0;
}
</style>