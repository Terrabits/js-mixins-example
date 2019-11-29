const TockMixin = {
  constructor(instance) {
    instance.tocks = 0;
  },
  tock() {
    this.tocks++;
    console.log(`tock ${this.tocks}`);
  }
};

export default TockMixin;
