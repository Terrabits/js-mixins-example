# Javascript Mixins Example

## Parts

The example consists of two main parts:

1. `Mixins` class
2. Mixin object definition(s)
3. Applying mixins via `super()`

### Mixins class

This class takes a list of mixin objects, each of which gets "mixed in" manually by Mixin class.

```javascript
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
```

### Mixin object definition(s)

The corresponding Mixin object(s) have a structure similar to regular javascript classes, but are impotent without the machinery of the Mixins class.

Here is an example:

```javascript
const TickMixin = {
  constructor(instance) {
    instance.ticks = 0;
  },
  tick() {
    this.ticks++;
    console.log(`tick ${this.ticks}`);
  }
};
```

### Applying mixins via `super()`

```javascript
// list of mixins to include
const mixins = [TickMixin, TockMixin];

class TickTock extends Mixins {
  constructor() {
    // include mixins
    super(mixins);
  }
}
```
