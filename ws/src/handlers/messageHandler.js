const messageHandler = (server, socket) => {
  socket.on("client:message", async (payload) => {
    console.log("New client message:", payload);

    server.sockets.emit("server:message", {
      message: payload.message,
    });
  });
};

module.exports = messageHandler;
