import { newTime } from './trelloFanction.js';

function modalWindow() {
  const boardBtn = document.querySelector('.board__btn');
  const modal = document.querySelector('.modal');
  const formModal = document.querySelector('.form__modal');
  const modalCancel = document.querySelector('.modal__cancel');
  const modalConfirm = document.querySelector('.modal__confirm');
  const addTodo = document.querySelector('.form__modal-text');
  const addDesc = document.querySelector('.form__modal-desc');
  boardBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
  });
  formModal.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  modalCancel.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    addTodo.value = '';
    addDesc.value = '';
  });

  modalConfirm.addEventListener('click', () => {
    if (addTodo.value === '' || addDesc.value === '') {
      alert('Please Enter todo');
    } else {
      const todo = {
        title: addTodo.value,
        descriptions: addDesc.value,
        user: '',
        id: new Date().getTime(),
        time: newTime(new Date()),
      };
      addTodo.value = '';
      addDesc.value = '';
      modal.classList.remove('show-modal');
      console.log(todo);
    }
  });
}

export { modalWindow };

// formModal.addEventListener('submit', (e) => {
//     e.preventDefault();
//     modalCancel.addEventListener('click', () => {
//       modal.classList.remove('show-modal');
//       modalConfirm.addEventListener('click', () => {
//         const todo = {
//           title: addTodo.value,
//           descriptions: addDesc.value,
//           user: '',
//           id: new Date().getTime(),
//           time: newTime(new Date()),
//         };
//         console.log(todo);
//       });
//     });
//   });
