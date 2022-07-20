import users from "storage/users";

export default {
  getByToken(token) {
    return new Promise(resolve => {
      const user = users.find(user => user.token === token);
      setTimeout(() => resolve(user), 1000);
    })
  },

  register(email, login, name, password) {
    return new Promise(resolve => {
      setTimeout(() => resolve({
        token: users[1].token,
        user: users[1],
      }), 1000);
    });
  },

  login(login, password) {
    return new Promise(resolve => {
      const user = users.find(user => user.login === login);

      setTimeout(() => {
        resolve({
          token: user.token,
          user,
        })
      }, 1000);
    });
  },

  logout() {
    return Promise.resolve(true);
  }
}
