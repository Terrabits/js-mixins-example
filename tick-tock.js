import {Mixins, TickMixin, TockMixin} from './mixins';

const mixins = [TickMixin, TockMixin];

class TickTock extends Mixins {
  constructor() {
    super(mixins);
  }
}

export default TickTock;
