const disconnectingHandler = (socket) => {
  socket.on("disconnecting", async () => {
    console.log("Connection close", socket.id);

    const user = socket.data.user.id;
    const rooms = socket.data.user.chats;

    socket.broadcast.to(rooms).emit("user_offline", {
      user,
      datetime: Date.now(),
    });
  });
};

module.exports = disconnectingHandler;
