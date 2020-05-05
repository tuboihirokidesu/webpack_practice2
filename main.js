"use strict";
class MoblieMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__icon");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MoblieMenu();
