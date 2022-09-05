import { Modal } from './Modal.js';
import { $ } from './DOM.js';

export class User {
  #user = {};
  #desks = {};
  #userId;
  constructor(userId) {
    this.#userId = userId;
  }
  get getUserId() {
    return this.#userId;
  }

  get getUser() {
    return this.#user;
  }
  get getDesks() {
    return this.#desks;
  }

  set setUser(user) {
    this.#user = user;
  }

  set setDesks(user) {
    this.#desks = user.desks;
  }

  async fetcher(collback, appendDesk, message) {
    try {
      this.user = await collback();
      this.#user = this.user;
      this.#desks = this.user.desks;
      appendDesk();
    } catch (e) {
      console.error();
      Modal.showModal(`${message}: ${e.message}`);
      const modal = $('.modal');
      modal.addEvent('click', (e) => {
        if (e.target.className === 'modal show-modal') {
          modal.remove();
        }
      });
    }
  }
}
