const KEY_API = 'https://6307cc363a2114bac76bdf07.mockapi.io/users/';
import { getUser } from './API.js';
import { newTime, getStatusTodo } from './trelloFanction.js';
import {
  time,
  // boardBtn,
  // modal,
  // formModal,
  // modalCancel,
  // modalConfirm,
  // addTodo,
  // addDesc,
  // boardCardTodo,
  board,
  boardProgress,
  boardTodo,
  boardTodoProgress,
  boardTodoDone,
  boardDone,
} from './domElement.js';

function render() {
  function clock() {
    time.textContent = newTime(new Date());
  }
  setInterval(clock, 1000);
  clock();

  async function DisplayTodos(id) {
    await getUser(KEY_API, id).then((user) => {
      let todos = user.desk.create;
      todos.forEach((todo) => {
        const boardUser = boardTodo.content.querySelector('.board__info-user');
        boardUser.textContent = user.name;
        const boardCardText =
          boardTodo.content.querySelector('.board__card-text');
        boardCardText.textContent = todo.title;
        const boardDesc = boardTodo.content.querySelector(
          '.board__descriptions-title'
        );
        boardDesc.textContent = todo.desc;
        const boardDate = boardTodo.content.querySelector('.board__info-data');
        boardDate.textContent = newTime(new Date());
        const boardTodoClone = boardTodo.content.cloneNode(true);
        board.append(boardTodoClone);
        
      });

      board.addEventListener('click', (e) => {
        console.log(todo)
      });
      


     
    });

    getUser(KEY_API, id).then((user) => {
      user.desk.progress.forEach((todo) => {
        const boardUser =
          boardTodoProgress.content.querySelector('.board__info-user');
        boardUser.textContent = user.name;
        const boardCardText =
          boardTodoProgress.content.querySelector('.board__card-text');
        boardCardText.textContent = todo.title;
        const boardDesc = boardTodoProgress.content.querySelector(
          '.board__descriptions-title'
        );
        boardDesc.textContent = todo.desc;
        const boardDate =
          boardTodoProgress.content.querySelector('.board__info-data');
        boardDate.textContent = newTime(new Date());
        const boardProgressClone = boardTodoProgress.content.cloneNode(true);
        boardProgress.append(boardProgressClone);
      });
    });
    getUser(KEY_API, id).then((user) => {
      user.desk.done.forEach((todo) => {
        const boardUser =
          boardTodoDone.content.querySelector('.board__info-user');
        boardUser.textContent = user.name;
        const boardCardText =
          boardTodoDone.content.querySelector('.board__card-text');
        boardCardText.textContent = todo.title;
        const boardDesc = boardTodoDone.content.querySelector(
          '.board__descriptions-title'
        );
        boardDesc.textContent = todo.desc;
        const boardDate =
          boardTodoDone.content.querySelector('.board__info-data');
        boardDate.textContent = newTime(new Date());
        const boardDoneClone = boardTodoDone.content.cloneNode(true);
        boardDone.append(boardDoneClone);
      });
    });
  }
  DisplayTodos(1);
}

export { render };
