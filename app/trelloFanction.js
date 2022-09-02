import { clock } from './elements.js';
import { User } from './User.js';
export function newTime() {
  clock.clear()
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  m < 10 ? (m = '0' + m) : m;
  h < 10 ? (h = '0' + h) : h;
  s < 10 ? (s = '0' + s) : s;
  clock.insertHTML('afterbegin',`${h}:${m}:${s}`)
}