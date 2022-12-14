import { API } from './API.js';
import { $ } from './DOM.js';
import { User } from './User.js';
import { Modal } from './Modal.js';
import { DOM } from './DOM.js';
import { timeTodo } from './trelloFanction.js';
import {
  FETCHING_ERROR_MESSAGE,
  WHILE_ERROR_MOVING,
  WHILE_ERROR_REMOVING,
} from './constants.js';
import {
  boardTodo,
  boardTodoProgress,
  boardTodoDone,
  board,
  boardDesc,
  boardDone,
  boardTodoState,
  boardTodoStateProgress,
  boardTodoStateDone,
  deleteAll,
  root,
  addTodo,
  avatar,
  nameUser,
} from './elements.js';

export class Desks extends User {
  constructor(userId) {
    super(userId);
  }

  applyContent(el, templete, board) {
    boardTodoState.el.textContent = this.getDesks.create.length;
    boardTodoStateProgress.el.textContent = this.getDesks.progress.length;
    boardTodoStateDone.el.textContent = this.getDesks.done.length;
    const title = templete.find('.board__card-text');
    const desc = templete.find('.board__descriptions-title');
    const date = templete.find('.board__info-data');
    title.el.textContent = el.title;
    desc.el.textContent = el.desc;
    date.el.textContent = el.date;
    const nameUser = templete.find('.board__info-user');
    nameUser.el.textContent = this.getUser.name;
    board.el.append(templete.el);
  }

  appendDesk() {
    avatar.el.setAttribute('src', this.getUser.avatar);
    nameUser.el.textContent = this.getUser.name;
    board.clear();
    let { create, progress, done } = this.getDesks;
    if (this.getDesks.create.length) {
      create.forEach((el) => {
        const createBoardTodo = $(
          document.importNode(boardTodo.el.content, true)
        );

        const todo = createBoardTodo.find('.board__card');
        todo.addEvent('dragstart', () => {
          setTimeout(() => {
            todo.el.style.display = 'none';
          }, 0);
        });

        todo.addEvent('dragend', (e) => {
          if (e.screenX > 405) {
            const create = this.getDesks.create.filter(
              (todo) => todo.id !== el.id
            );
            const progress = [...this.getDesks.progress, el];
            const newDesks = { ...this.getDesks, create, progress };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              WHILE_ERROR_MOVING
            );
          } else {
            const newDesks = { ...this.getDesks, create, progress, done };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              FETCHING_ERROR_MESSAGE
            );
          }
        });

        boardDesc.addEvent('dragover', (event) => {
          event.preventDefault();
        });

        const editBtn = createBoardTodo.find('.board__card-edit');
        editBtn.addEvent('click', (e) => {
          e.preventDefault();
          const editTodo = () => {
            const create = [...this.getDesks.create];
            const newDesks = { ...this.getDesks, create };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              WHILE_ERROR_MOVING
            );
          };
          Modal.editTodo(el, editTodo);
        });

        const btnMove = createBoardTodo.find('.board__descriptions-move');
        btnMove.addEvent('click', () => {
          const limit = 4;
          if (this.getDesks.progress.length >= limit) {
            Modal.showModalLimit(
              'Please complete the current tasks, and then move on to the new ones!'
            );
            return;
          } else {
            const create = this.getDesks.create.filter(
              (todo) => todo.id !== el.id
            );
            const progress = [...this.getDesks.progress, el];
            const newDesks = { ...this.getDesks, create, progress };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              WHILE_ERROR_MOVING
            );
          }
        });

        const btnDelete = createBoardTodo.find('.board__card-delete');
        btnDelete.addEvent('click', () => {
          const create = this.getDesks.create.filter(
            (todo) => todo.id !== el.id
          );
          const newDesks = { ...this.getDesks, create };
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesks }),
            this.appendDesk.bind(this),
            WHILE_ERROR_REMOVING
          );
        });

        this.applyContent(el, createBoardTodo, board);
      });
    } else {
      board.insertHTML('afterbegin', '<h3> No todos...</h3>');
    }

    boardDesc.clear();
    if (this.getDesks.progress.length) {
      progress.forEach((el) => {
        const createBoardProgress = $(
          document.importNode(boardTodoProgress.el.content, true)
        );

        const todo = createBoardProgress.find('.board__card');

        board.addEvent('dragover', (e) => {
          e.preventDefault();
        });
        boardDone.addEvent('dragover', (event) => {
          event.preventDefault();
        });

        todo.addEvent('dragstart', () => {
          setTimeout(() => {
            todo.el.style.display = 'none';
          }, 0);
        });

        todo.addEvent('dragend', (e) => {
          if (e.screenX < 380) {
            const progress = this.getDesks.progress.filter(
              (todo) => todo.id !== el.id
            );
            const create = [...this.getDesks.create, el];
            const newDesks = { ...this.getDesks, create, progress };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              FETCHING_ERROR_MESSAGE
            );
          } else if (e.screenX > 703) {
            const progress = this.getDesks.progress.filter(
              (todo) => todo.id !== el.id
            );
            const done = [...this.getDesks.done, el];
            const newDesks = { ...this.getDesks, progress, done };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              FETCHING_ERROR_MESSAGE
            );
          } else {
            const newDesks = { ...this.getDesks, create, progress, done };
            this.fetcher(
              () => API.putUser(this.getUserId, { desks: newDesks }),
              this.appendDesk.bind(this),
              FETCHING_ERROR_MESSAGE
            );
          }
        });

        const btnMove = createBoardProgress.find('.board__descriptions-move');
        btnMove.addEvent('click', () => {
          const progress = this.getDesks.progress.filter(
            (todo) => todo.id !== el.id
          );
          const done = [...this.getDesks.done, el];
          const newDesks = { ...this.getDesks, progress, done };
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesks }),
            this.appendDesk.bind(this),
            FETCHING_ERROR_MESSAGE
          );
        });
        const btnEdit = createBoardProgress.find('.board__card-edit');
        btnEdit.addEvent('click', () => {
          const progress = this.getDesks.progress.filter(
            (todo) => todo.id !== el.id
          );
          const create = [...this.getDesks.create, el];
          const newDesks = { ...this.getDesks, create, progress };
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesks }),
            this.appendDesk.bind(this),
            FETCHING_ERROR_MESSAGE
          );
        });

        const btnDelete = createBoardProgress.find('.board__card-delete');
        btnDelete.addEvent('click', () => {
          const progress = this.getDesks.progress.filter(
            (todo) => todo.id !== el.id
          );
          const newDesks = { ...this.getDesks, progress };
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesks }),
            this.appendDesk.bind(this),
            WHILE_ERROR_REMOVING
          );
        });

        this.applyContent(el, createBoardProgress, boardDesc);
      });
    } else {
      boardDesc.insertHTML('afterbegin', '<h3> No todos...</h3>');
    }

    boardDone.clear();
    if (this.getDesks.done.length) {
      done.forEach((el) => {
        const createBoardDone = $(
          document.importNode(boardTodoDone.el.content, true)
        );
        const btnDelete = createBoardDone.find('.board__card-delete');
        btnDelete.addEvent('click', () => {
          const done = this.getDesks.done.filter((todo) => todo.id !== el.id);
          const newDesks = { ...this.getDesks, done };
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesks }),
            this.appendDesk.bind(this),
            WHILE_ERROR_REMOVING
          );
        });
        this.applyContent(el, createBoardDone, boardDone);
      });
    } else {
      boardDone.insertHTML('afterbegin', '<h3> No todos...</h3>');
    }
  }

  initialRender() {
    this.fetcher(
      () => API.getUser(this.getUserId),
      this.appendDesk.bind(this),
      FETCHING_ERROR_MESSAGE
    );

    deleteAll.el.addEventListener('click', () => {
      const removeAll = () => {
        const newDesk = { ...this.getDesks, done: [] };
        this.fetcher(
          () => API.putUser(this.getUserId, { desks: newDesk }),
          this.appendDesk.bind(this),
          WHILE_ERROR_REMOVING
        );
      };
      Modal.showModalRemove(removeAll);
    });

    addTodo.addEvent('click', () => {
      const modal = DOM.create('div', 'modal', 'show-modal');
      root.el.append(modal.el);
      modal.insertHTML(
        'afterbegin',
        `
    <form class="form__modal">
                <input
                  class="form__modal-text"
                  type="text"
                  placeholder="Title"
                />
                <textarea
                  class="form__modal-desc"
                  placeholder="Descriptions"
                ></textarea>
                <div class="form__modal-actions">
                  <button class="modal-cancel">Cancel</button>
                  <button class="modal-confirm">Add Todo</button>
                </div>
              </form>`
      );

      const cancelBtn = modal.find('.modal-cancel');
      cancelBtn.addEvent('click', (event) => {
        event.preventDefault();
        modal.remove();
      });

      const confirmBtn = modal.find('.modal-confirm');
      confirmBtn.addEvent('click', (e) => {
        e.preventDefault();
        const textInputTitle = modal.find('.form__modal-text');
        const textInputDesc = modal.find('.form__modal-desc');
        const textTask = textInputTitle.el.value.trim();
        const textDesc = textInputDesc.el.value.trim();
        if (textTask && textDesc !== '') {
          const Todo = {
            title: textTask,
            desc: textDesc,
            date: timeTodo(),
            id: new Date().getTime(),
          };
          textInputTitle.value = '';
          textInputDesc.value = '';
          const newDeskCreate = this.getDesks.create.push(Todo);
          const newDesk = { ...this.getDesks, newDeskCreate };
          modal.remove();
          Modal.loaderShow();
          this.fetcher(
            () => API.putUser(this.getUserId, { desks: newDesk }),
            this.appendDesk.bind(this),
            WHILE_ERROR_REMOVING
          );
          setTimeout(Modal.removeLoader, 700);
        } else {
          Modal.showModalLimit('Please Enter Task');
        }
      });
    });
  }
}
