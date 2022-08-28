export const getUsers = async (url) => {
  const res = await fetch(url);
  const users = await res.json();
  return users;
};

export const getUser = async (url, id) => {
  const res = await fetch(url + id);
  const user = await res.json();
  return user;
};

export const putUser = async (url, id, body) => {
  const bodyContent = JSON.stringify(body);
  const headersList = {
    'Content-Type': 'application/json',
  };
  const options = {
    method: 'PUT',
    body: bodyContent,
    headers: headersList,
  };
  const res = await fetch(url + id, options);
  const user = await res.json();
  return user;
};

//=============================================================================================
//Код для практики через классы:
// export class API {
//   static #KEY_API = 'https://6307cc363a2114bac76bdf07.mockapi.io/users/';
//   static async getUsers() {
//     const res = await fetch(API.#KEY_API);
//     if (res.ok) {
//       const users = await res.json();
//       return users;
//     } else {
//       console.log(error.message);
//     }
//   }

//   static async getUser(id) {
//     const res = await fetch(API.#KEY_API + id);
//     if (res.ok) {
//       const user = await res.json();
//       return user;
//     } else {
//       console.log(error.message);
//     }
//   }

//   static async putUser(id, body) {
//     const bodyContent = JSON.stringify(body);
//     const headersList = {
//       'Content-Type': 'application/json',
//     };
//     const options = {
//       method: 'PUT',
//       body: bodyContent,
//       headers: headersList,
//     };
//     const res = await fetch(API.#KEY_API + id, options);
//     if (res.ok) {
//       const user = await res.json();
//       return user;
//     } else {
//       console.log(error.message);
//     }
//   }
// }
