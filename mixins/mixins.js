class Mixins {
  constructor(Mixins) {
    Mixins.forEach((Mixin) => {
      // execute constructor
      Mixin['constructor'](this);

      // copy everything except constructor
      const  properties = Object.assign({}, Mixin);
      delete properties['constructor'];

      // add each to `this`
      for(const property in properties) {
        if (property === 'constructor') {
          continue;
        }
        const value    = properties[property];
        this[property] = value;
      }
    });
  }
}

export default Mixins;
