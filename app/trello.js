import { newTime, getStatusTodo } from './trelloFanction.js';
import { setLocalStorage, getLocalStorage } from './localStorage.js';
import {
  time,
  boardBtn,
  modal,
  formModal,
  modalCancel,
  modalConfirm,
  addTodo,
  addDesc,
  boardCard,
  boardCardText,
  boardDesc,
  boardData,
  board,
  boardStatusTodo,
} from './domElement.js';

const KEY_TRELLO_TODO = 'trelloTodo';
const KEY_TRELLO = 'trello';

function render() {
  function clock() {
    time.textContent = newTime(new Date());
  }
  setInterval(clock, 1000);
  clock();

  const trello = [];
  let trelloTodo = getLocalStorage(KEY_TRELLO_TODO) || [];
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
        title: addTodo.value.trim(),
        descriptions: addDesc.value.trim(),
        user: '',
        id: new Date().getTime(),
        time: newTime(new Date()),
      };
      addTodo.value = '';
      addDesc.value = '';
      modal.classList.remove('show-modal');
      trelloTodo.push(todo);
      setLocalStorage(KEY_TRELLO_TODO, trelloTodo);
      board.innerHTML = '';
      DisplayTodos();
    }
  });

  function DisplayTodos() {
    boardStatusTodo.textContent = getStatusTodo(trelloTodo);
    trelloTodo.forEach((todo) => {
      boardCardText.textContent = todo.title;
      boardDesc.textContent = todo.descriptions;
      boardData.textContent = todo.time;
      const newBoardCard = boardCard.cloneNode(true);
      newBoardCard.style.display = 'block';
      board.append(newBoardCard);
    });
  }

  DisplayTodos();
}

export { render };
