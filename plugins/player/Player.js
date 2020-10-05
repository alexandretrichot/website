import EventEmitter from 'eventemitter3';
import backgroundSound from '../../assets/sounds/background.mp3';

const AC = window.AudioContext || window.webkitAudioContext;

export default class Player extends EventEmitter {
  constructor() {
    super();
    this.context = new AC();

    /* sounds */
    this.sounds = [];

    /* buffers */
    this.buffers = {};

    /* vars */
    this.ready = false;
    this.playing = false;
    this.muted = true;

    /* mixer */
    this.mixer = this.context.createGain();

    this.mixer.gain.setValueAtTime(0.001, this.context.currentTime);
    this.mixer.connect(this.context.destination);

    this.loadSounds();
  }

  loadSounds() {
    fetch(backgroundSound).then(r => r.arrayBuffer()).then(r => this.context.decodeAudioData(r, data => {
      this.buffers.background = data;
      this.ready = true;
      this.emit('ready', this.ready);
    }, err => {
      console.error(err);
    }));
  }

  start() {
    this.playing = true;
    this.emit('playing', this.playing);

    this.background = this.context.createBufferSource();
    this.background.buffer = this.buffers.background;
    this.background.loopStart = 4;
    this.background.loopEnd = 4 * 5;
    this.background.loop = true;

    this.background.connect(this.mixer);

    this.background.start();
  }

  toggle() {
    if (this.muted) {
      if (!this.playing) {
        this.start();
      }
      /* unmute fade */
      this.mixer.gain.setTargetAtTime(.6, this.context.currentTime, 3);
    } else {
      this.mixer.gain.setTargetAtTime(0.00, this.context.currentTime, 0.5);
    }

    this.muted = !this.muted;
    this.emit('muted', this.muted);
  }
}