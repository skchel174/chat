function getRelatedUsers(socket, chats) {
  const serverRooms = socket.server.sockets.adapter.rooms;
  const serverSockets = socket.server.sockets.sockets;

  const users = new Set();

  let sockets = [];

  chats.forEach(chat => {
    const roomSockets = serverRooms.get(chat);

    if (roomSockets) {
      sockets = [...sockets, ...roomSockets];
    }
  });

  const uniqueSockets = new Set(sockets);

  uniqueSockets.forEach(socketId => {
    const socket = serverSockets.get(socketId);

    if (socket) {
      users.add(socket.data.user.id);
    }
  });

  return Array.from(users.values());
}

module.exports = getRelatedUsers;
