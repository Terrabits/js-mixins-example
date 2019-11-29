class Mixins {
  constructor(Mixins) {
    Mixins.forEach((Mixin) => {
      Mixin['constructor'](this);
      const  properties = Object.assign({}, Mixin);
      delete properties['constructor'];
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
