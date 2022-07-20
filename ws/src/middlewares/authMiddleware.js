const api = require("../api");
const InvalidTokenError = require("../errors/IvalidTokenError");
const TokenNotProvidedError = require("../errors/TokenNotExistsError");

const authMiddleware = async (socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    next(new TokenNotProvidedError());
    return;
  }

  try {
    const response = await api.user.authorize(token);

    socket.data.user = {
      id: response.data.id,
      chats: response.data.chats,
    };

    next();
  } catch (e) {
    next(new InvalidTokenError());
  }
};

module.exports = authMiddleware;
