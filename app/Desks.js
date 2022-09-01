import { API } from './API.js';
import { $ } from './DOM.js';
import {
  boardTodo,
  boardTodoProgress,
  boardTodoDone,
  board,
  boardDesc,
  boardDone
} from './elements.js';
import { User } from './User.js';

export class Desks extends User {
  constructor(userId) {
    super(userId);
  }

  appendDesk() {
    if (this.getDesks.create.length) {
      this.getDesks.create.forEach((todo) => {
        const createBoardTodo = $(
          document.importNode(boardTodo.el.content, true)
        );
        const title = createBoardTodo.find('.board__card-text');
        const desc = createBoardTodo.find('.board__descriptions-title');
        const date = createBoardTodo.find('.board__info-data');
        title.el.textContent = todo.title;
        desc.el.textContent = todo.desc;
        date.el.textContent = todo.date;
        const nameUser = createBoardTodo.find('.board__info-user');
        nameUser.el.textContent = this.getUser.name;
        board.el.append(createBoardTodo.el);
      });
    }

    if (this.getDesks.progress.length) {
      this.getDesks.progress.forEach((todo) => {
        const createBoardProgress = $(
          document.importNode(boardTodoProgress.el.content, true)
        );
        const title = createBoardProgress.find('.board__card-text');
        const desc = createBoardProgress.find('.board__descriptions-title');
        const date = createBoardProgress.find('.board__info-data');
        title.el.textContent = todo.title;
        desc.el.textContent = todo.desc;
        date.el.textContent = todo.date;
        const nameUser = createBoardProgress.find('.board__info-user');
        nameUser.el.textContent = this.getUser.name;
        boardDesc.el.append(createBoardProgress.el);
      });
    }

    if (this.getDesks.done.length) {
      this.getDesks.done.forEach((todo) => {
        const createBoardDone = $(
          document.importNode(boardTodoDone.el.content, true)
        );
        const title = createBoardDone.find('.board__card-text');
        const desc = createBoardDone.find('.board__descriptions-title');
        const date = createBoardDone.find('.board__info-data');
        title.el.textContent = todo.title;
        desc.el.textContent = todo.desc;
        date.el.textContent = todo.date;
        const nameUser = createBoardDone.find('.board__info-user');
        nameUser.el.textContent = this.getUser.name;
        boardDone.el.append(createBoardDone.el);
      });
    }
  }

  initialRender() {
    this.fetcher(() => API.getUser(this.getUserId), this.appendDesk.bind(this));
  }
}
