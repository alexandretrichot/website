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

    this.loadSounds();
  }

  async loadSounds() {
    this.buffers.background = await fetch(backgroundSound).then(r => r.arrayBuffer()).then(r => this.context.decodeAudioData(r));

    this.ready = true;
    this.emit('ready', this.ready);
  }

  play() {
    this.playing = true;
    this.emit('playing', this.playing);

    const background = new AudioBufferSourceNode(this.context);
    background.buffer = this.buffers.background;
    background.loopStart = 4;
    background.loopEnd = 4 * 5;
    background.loop = true;

    background.connect(this.context.destination);
    background.start();

    this.sounds.push(background);
  }

  stop() {
    this.sounds.forEach(s => {
      s.stop();
      s.disconnect();
    });

    this.sounds = [];

    this.playing = false;
    this.emit('playing', this.playing);
  }

  toggle() {
    if (this.playing) {
      this.stop();
    } else {
      this.play();
    }
  }
}