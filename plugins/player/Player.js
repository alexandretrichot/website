import EventEmitter from 'eventemitter3';
import backgroundSound from '../../assets/sounds/background.wav';

export default class Player extends EventEmitter {
  constructor() {
    super();
    this.context = new AudioContext();

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

  async loadSounds() {
    this.buffers.background = await fetch(backgroundSound).then(r => r.arrayBuffer()).then(r => this.context.decodeAudioData(r));

    this.ready = true;
    this.emit('ready', this.ready);
  }

  start() {
    this.playing = true;
    this.emit('playing', this.playing);

    this.background = new AudioBufferSourceNode(this.context);
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
      this.mixer.gain.setTargetAtTime(1, this.context.currentTime, 3);
    } else {
      this.mixer.gain.setTargetAtTime(0.001, this.context.currentTime, 0.5);
    }

    this.muted = !this.muted;
    this.emit('muted', this.muted);
  }
}