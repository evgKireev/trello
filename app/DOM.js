export const $ = (selector) => new DOM(selector);
export class DOM {
  static create = (tagName, ...classes) => {
    const el = document.createElement(tagName);
    if (classes.length) {
      el.classList.add(...classes);
    }
    return $(el);
  };
  constructor(selector) {
    this.el =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  find(selector) {
    return $(this.el.querySelector(selector));
  }

  addEvent(type, callback) {
    this.el.addEventListener(type, callback);
  }

  removeEvent(type, callback) {
    this.el.addEventListener(type, callback);
  }

  innerHTML(place, html) {
    this.el.insertAdjacentHTML(place, html);
  }

  clear() {
    this.el.innerHTML = '';
  }
}
