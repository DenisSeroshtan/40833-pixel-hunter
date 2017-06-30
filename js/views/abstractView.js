import {createElement, renderScreen} from '../utils/utils.js';

export default class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return createElement(this.template);
  }

  bind() {}

  show() {
    renderScreen(this);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
