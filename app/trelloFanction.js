export function newTime(data) {
  let h = data.getHours();
  let m = data.getMinutes();
  m < 10 ? (m = '0' + m) : m;
  return `${h}:${m}`;
}

export function getStatusTodo(array) {
  return array.filter((el) => el).length;
}

