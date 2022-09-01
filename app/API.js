export class API {
  static #API_KEY = 'https://6307cc363a2114bac76bdf07.mockapi.io/users/';
  static async getUsers() {
    const res = await fetch(this.#API_KEY);
    if (res.ok) {
      const users = await res.json();
      return users;
    } else {
      throw new Error(res.statusText);
    }
  }

  static async getUser(userId) {
    const res = await fetch(this.#API_KEY + userId);
    if (res.ok) {
      const user = await res.json();
      return user
    } else {
      throw new Error(res.statusText);
    }
  }

  static async putUser(userId, body) {
    const headersList = {
      'Content-Type': 'application/json',
    };
    const bodyContent = JSON.stringify(body);
    const option = {
      method: 'PUT',
      body: bodyContent,
      headers: headersList,
    };
    const res = await fetch(this.#API_KEY + userId, option);
    if (res.ok) {
      const user = await res.json();
      console.log(user);
    } else {
      throw new Error(res.statusText);
    }
  }
}
