const http = require("http");
const express = require("express");
const {Server: IoServer} = require("socket.io");

const app = express();
const server = http.createServer(app);
const SocketServer = new IoServer(server);

const authMiddleware = require("./src/middlewares/authMiddleware");

SocketServer.use(authMiddleware);

const connectionHandler = require("./src/handlers/connectionHandler");
const messageHandler = require("./src/handlers/messageHandler");

const onConnection = (socket) => {
  connectionHandler(socket);
  messageHandler(socket);
};

SocketServer.on("connection", onConnection);

server.listen(
  3000,
  () => console.log('Websocket server started...')
);
