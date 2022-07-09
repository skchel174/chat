const user = {
  id: 2,
  email: "skchel174@gmail.com",
  login: "homer",
  name: "Homer Simpson",
  bio: "",
  img: "homer-simpson.jpeg",
  created_at: "2022-06-05 13:00:00",
  visited_at: "2022-06-11 17:38:56",
};

export default {
  getByToken(token) {
    return new Promise(resolve => {
      setTimeout(() => resolve(user), 1000);
    })
  },

  register(email, login, name, password) {
    return new Promise(resolve => {
      setTimeout(() => resolve({
        token: "098F6BCD4621D373CADE4E832627B4F6",
        user,
      }), 1000);
    });
  },

  login(login, password) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          token: "098F6BCD4621D373CADE4E832627B4F6",
          user,
        })
      }, 1000);
    });
  },

  logout() {
    return Promise.resolve(true);
  }
}
