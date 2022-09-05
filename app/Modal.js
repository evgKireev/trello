import { DOM } from './DOM.js';
import { root } from './elements.js';
import { Desks } from './Desks.js';
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

  // static showModalAddTodo(collback) {
  //   const modal = DOM.create('div', 'modal', 'show-modal');
  //   root.el.append(modal.el);
  //   modal.insertHTML(
  //     'afterbegin',
  //     `
  //   <form class="form__modal">
  //               <input
  //                 class="form__modal-text"
  //                 type="text"
  //                 placeholder="Title"
  //               />
  //               <textarea
  //                 class="form__modal-desc"
  //                 placeholder="Descriptions"
  //               ></textarea>
  //               <div class="form__modal-actions">
  //                 <button class="modal-cancel">Cancel</button>
  //                 <button class="modal-confirm">Confirm</button>
  //               </div>
  //             </form>`
  //   );

  //   const todoModal = root.find('.form__modal')
  //   todoModal.addEvent('submit', (e)=>{
  //     e.preventDefault()
  //     collback()
  //   })

  //   const cancelBtn = modal.find('.modal-cancel');
  //   cancelBtn.addEvent('click', (event) => {
  //     event.preventDefault();
  //     modal.remove();
  //   });

  //   const confirmBtn = modal.find('.modal-confirm');
  //   confirmBtn.addEvent('click', () => {
  //     collback() || modal.remove();
  //   });






  // }
}
