const user = {
  id: 2,
  chats: [1, 2],
};

const userModule = {
  authorize: (token) => {
    return Promise.resolve({data: user});
  },
};

module.exports = userModule;
