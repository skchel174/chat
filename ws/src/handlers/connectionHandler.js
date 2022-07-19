const getRelatedUsers = require("../utils/getRelatedUsers");

const connectionHandler = (socket) => {
  console.log("Connection open", socket.id);

  const user = socket.data.user.id;
  const rooms = socket.data.user.chats;

  rooms.forEach((room) => socket.join(room));

  socket.broadcast.to(rooms).emit("user_online", {user});

  const users = getRelatedUsers(socket, rooms);
  socket.emit("users_online", {users});
};

module.exports = connectionHandler;
