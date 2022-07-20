const users = [
  {
    token: "CADE4E832627B4F6098F6BCD4621D373",
    id: 1,
    chats: [1, 3],
  },
  {
    token: "098F6BCD4621D373CADE4E832627B4F6",
    id: 2,
    chats: [1, 2, 3],
  },
  {
    token: "6BCD2627B4F64621D373CADE4E83098F",
    id: 3,
    chats: [2, 3],
  }
];

const userModule = {
  authorize: (token) => {
    const user = users.find(user => user.token === token);
    return Promise.resolve({data: user});
  },
};

module.exports = userModule;
