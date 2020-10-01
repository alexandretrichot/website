import Vue from 'vue';
import Player from './Player';

Vue.use({
  install(vueInst) {
    vueInst.prototype.$player = new Player();
  }
})