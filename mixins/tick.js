const TickMixin = {
  constructor(instance) {
    instance.ticks = 0;
  },
  tick() {
    this.ticks++;
    console.log(`tick ${this.ticks}`);
  }
};

export default TickMixin;
