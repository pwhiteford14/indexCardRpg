"use strict";

export default class EventHandler {
    constructor() {
        this.listen();
    }

    listen() {
        document.getElementById(`macs_suck`).addEventListener('click', () => {
            alert("it works");
        });
    }
}