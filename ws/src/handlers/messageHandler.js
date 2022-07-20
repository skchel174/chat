const messageHandler = (socket) => {
  socket.on("message", (payload) => {
    console.log("New client message:", payload);

    socket.server.sockets.emit("message", {
      message: payload.message,
    });
  });
};

module.exports = messageHandler;
