import { DOM } from './DOM.js';
import { root } from './elements.js';
import { Desks } from './Desks.js';
export class Modal {
  static showModal(message) {
    root.insertHTML(
      'afterend',
      `<div class="modal show-modal"><h3 class = "form__modal-text">${message}</h3></div>`
    );
  }
  static showModalRemove(collback) {
    const removeElement = DOM.create('div', 'modal', 'show-modal');
    root.el.append(removeElement.el);
    removeElement.insertHTML(
      'afterbegin',
      `<div class="modal-remove">
     <h3 class="modal-remove-title">Are you sure you want to delete?</h3>
      <div class="modal-remove-inner">
      <button class="modal-remove-cancel">Cancel</button>
      <button class="modal-remove-confirm">Confirm</button></div>
    </div>`
    );

    const cancelBtn = removeElement.find('.modal-remove-cancel');
    cancelBtn.addEvent('click', () => {
      removeElement.remove();
    });

    const confirmBtn = removeElement.find('.modal-remove-confirm');
    confirmBtn.addEvent('click', () => {
      collback() || removeElement.remove();
    });
  }
  static showModalLimit() {
    const removeElement = DOM.create('div', 'modal', 'show-modal');
    root.el.append(removeElement.el);
    removeElement.insertHTML(
      'afterbegin',
      `<div class="modal-remove">
     <h3 class="modal-remove-title">
     Please complete the current tasks, and then move on to the new ones!</h3>
      <div class="modal-remove-inner">
      <button class="modal-remove-cancel">Cancel</button>
      <button class="modal-remove-confirm">Confirm</button></div>
    </div>`
    );

    const cancelBtn = removeElement.find('.modal-remove-cancel');
    cancelBtn.addEvent('click', () => {
      removeElement.remove();
    });

    const confirmBtn = removeElement.find('.modal-remove-confirm');
    confirmBtn.addEvent('click', () => {
      removeElement.remove();
    });
  }
}
