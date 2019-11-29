#!/usr/bin/env node -r esm
import TickTock from './tick-tock';

// Does this work?
const tickTock = new TickTock();
tickTock.tick();
tickTock.tick();
tickTock.tock();
tickTock.tick();
tickTock.tock();
console.log(`...and the grand total is ${tickTock.ticks} ticks and ${tickTock.tocks} tocks.`);
