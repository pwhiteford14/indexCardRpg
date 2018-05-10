"use strict";

import EventHandler from './event-handler.js';

class Main {
    constructor() {
        new EventHandler();
    }
}

window.addEventListener('load', () => {
    new Main();
});