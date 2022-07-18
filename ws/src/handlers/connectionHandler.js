const connectionHandler = (server, socket) => {
  console.log("Connection open", socket.id);
};

module.exports = connectionHandler;
