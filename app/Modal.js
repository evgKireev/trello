import { DOM } from './DOM.js';
import { root } from './elements.js';
import { Desks } from './Desks.js';
import { User } from './User.js';
export class Modal {
  static showModal(message) {
    this.removeLoader();
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
      <button class="modal-cancel">Cancel</button>
      <button class="modal-confirm">Confirm</button></div>
    </div>`
    );

    const cancelBtn = removeElement.find('.modal-cancel');
    cancelBtn.addEvent('click', () => {
      removeElement.remove();
    });

    const confirmBtn = removeElement.find('.modal-confirm');
    confirmBtn.addEvent('click', () => {
      collback() || removeElement.remove();
    });
  }

  static showModalLimit(text) {
    const removeElement = DOM.create('div', 'modal', 'show-modal');
    root.el.append(removeElement.el);
    removeElement.insertHTML(
      'afterbegin',
      `<div class="modal-remove">
     <h3 class="modal-remove-title">${text}</h3>
      <div class="modal-remove-inner">
      <button class="modal-cancel">Cancel</button>
    </div>`
    );

    const cancelBtn = removeElement.find('.modal-cancel');
    cancelBtn.addEvent('click', () => {
      removeElement.remove();
    });
  }

  static loaderShow() {
    const loader = DOM.create('div', 'modal', 'show-modal');
    root.el.append(loader.el);
    loader.insertHTML(
      'afterbegin',
      `<div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>`
    );
  }
  static removeLoader() {
    const loader = root.find('.modal');
    loader.remove();
  }

  static editTodo(el, collback) {
    const modal = DOM.create('div', 'modal', 'show-modal');
    root.el.append(modal.el);
    modal.insertHTML(
      'afterbegin',
      `
    <form class="form__modal">
                <input
                  class="form__modal-text"
                  type="text"
                  placeholder="Title todo"
                />
                <textarea
                  class="form__modal-desc"
                  placeholder="Descriptions todo "
                ></textarea>
                <div class="form__modal-actions">
                  <button class="modal-cancel">Cancel</button>
                  <button class="modal-confirm">Edit todo</button>
                </div>
              </form>`
    );
    const textInputTitle = modal.find('.form__modal-text');
    const textInputDesc = modal.find('.form__modal-desc');
    textInputTitle.el.value = el.title;
    textInputDesc.el.value = el.desc;

    const confirmBtn = modal.find('.modal-confirm');
    confirmBtn.addEvent('click', (e) => {
      e.preventDefault();
      el.title = textInputTitle.el.value;
      el.desc = textInputDesc.el.value;
      collback();
      modal.remove();
    });

    const cancelBtn = modal.find('.modal-cancel');
    cancelBtn.addEvent('click', (event) => {
      event.preventDefault();
      modal.remove();
    });
  }

  // selectUser() {
  //   const modal = DOM.create('div', 'modal', 'show-modal');
  //   root.el.append(modal.el);
  //   modal.insertHTML(
  //     'afterbegin',
  //     `
  //   <div class="modal-remove">
  //   <h2>What is your name?</h2>
  //  <input><input>
  // </div>`
  //   );
  // }
}
