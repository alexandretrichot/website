export default class Smooter {
  private target = 0;
  private current = 0;

  constructor(target = 0) {
    this.target = target;
    this.current = target;
  }

  get value() {
    this.current += (this.target - this.current) * .1;

    return this.current;
  }

  set value(target: number) {
    this.target = target;
  }
}