import {Mixins, TickMixin, TockMixin} from './mixins';

// list of mixins to include
const mixins = [TickMixin, TockMixin];

class TickTock extends Mixins {
  constructor() {
    // include mixins
    super(mixins);
  }
}

export default TickTock;
