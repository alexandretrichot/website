type Params = {
  trigger?: number,
  beforeOffset?: number,
  afterOffset?: number,
  debug?: boolean,
  fadeIn?: number,
  fadeOut?: number
}

export default class ImVisible {
  private el: HTMLElement;
  private params: Params;

  constructor(el: HTMLElement, params: Params) {
    this.el = el;
    this.params = {
      ...params,
      // default value

      trigger: params.trigger || window.innerHeight / 2,
      beforeOffset: params.beforeOffset || 0,
      afterOffset: params.afterOffset || 0,
      debug: params.debug || false,
      fadeIn: params.fadeIn || 1,
      fadeOut: params.fadeOut || 1,
    };

    if (this.params.debug) {
      createDebugElement(this.el.offsetTop - this.params.beforeOffset - this.params.fadeIn, this.el.clientHeight + this.params.beforeOffset + this.params.afterOffset + this.params.fadeIn + this.params.fadeOut, 'blue');
      createDebugElement(this.el.offsetTop - this.params.beforeOffset, this.el.clientHeight + this.params.beforeOffset + this.params.afterOffset, 'green');

      const debug = createDebugElement(this.params.trigger - 1, 2, 'red');
      debug.style.position = "fixed";
      debug.style.width = '20px';
    }
  }

  get visible() {
    return this.value > 0;
  }

  get value() {
    const distBefore = this.distBeforeEl,
      distAfter = this.distAfterEl;

    if (distBefore - this.params.fadeIn < 0 && distAfter - this.params.fadeOut < 0) {

      return Math.min(
        Math.min(Math.max(-1 * (distBefore - this.params.fadeIn), 0), this.params.fadeIn) / this.params.fadeIn,
        Math.min(Math.max(-1 * (distAfter - this.params.fadeOut), 0), this.params.fadeOut) / this.params.fadeOut
      );
    }

    return 0;
  }

  private get distBeforeEl() {
    return this.el.offsetTop - window.scrollY - this.params.beforeOffset - this.params.trigger;
  }

  private get distAfterEl() {
    return window.scrollY - this.el.offsetTop - this.el.clientHeight - this.params.afterOffset + this.params.trigger;
  }
}

function createDebugElement(y: number, height: number, color: string) {
  const el = document.createElement('div');
  el.style.backgroundColor = color;
  el.style.position = "absolute";
  el.style.height = height + "px";
  el.style.top = y + 'px';
  el.style.left = "0";
  el.style.width = '5px';
  el.style.zIndex = '8';

  document.body.appendChild(el);

  return el;
}