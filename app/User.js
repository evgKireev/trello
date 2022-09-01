export class User {
  #user = {};
  #desks = {};
  #userId;
  constructor(userId) {
    this.#userId = userId;
  }
  get getUserId() {
    return this.#userId;
  }

  get getUser() {
    return this.#user;
  }
  get getDesks() {
    return this.#desks;
  }

  set setUser(user) {
    this.#user = user;
  }

  set setDesks(user) {
    this.#desks = user.desks;
  }

  async fetcher(collback,appendDesk) {
    try {
      this.user = await collback();
      this.#user = this.user;
      this.#desks = this.user.desks;
      appendDesk()
    } catch (e) {
      console.error('fetcher()', e.message);
    }
  }
}
