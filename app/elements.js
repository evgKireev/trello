import { $ } from './DOM.js';
const clock = $('.time');
const boardTodo = $('#board-todo');
const boardTodoProgress = $('#board-progress');
const boardTodoDone = $('#board-done');
const board = $('.board');
const boardDesc = $('.board-progress');
const boardDone = $('.board-done');
const boardTodoState = $('.board__status-todo')
const boardTodoStateProgress = $('.board__status-progress')
const boardTodoStateDone = $('.board__status-done')
const deleteAll = $('.board__btn-move')
const root =  $('.root')
const addTodo = $('.board__btn')
const avatar = $('.header-avatar')
const nameUser = $('.header-name')




 

export {
  clock,
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
  nameUser
  
};
