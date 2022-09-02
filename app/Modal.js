import { root } from './elements.js';
export class Modal {
 static showModal(message) {
    root.insertHTML(
      'afterend',
      `<div class="modal show-modal"><h3 class = "form__modal-text">${message}</h3></div>`
    );
  }
}
