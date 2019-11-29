class Mixins {
  constructor(Mixins) {
    Mixins.forEach((Mixin) => {
      // execute constructor
      Mixin['constructor'](this);

      // add each property of Mixin
      for(const property in Mixin) {
        // skip constructor
        if (property === 'constructor') {
          continue;
        }
        // add property
        const value    = Mixin[property];
        this[property] = value;
      }
    });
  }
}

export default Mixins;
