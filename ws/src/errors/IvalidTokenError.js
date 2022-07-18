class InvalidTokenError extends Error {
  constructor() {
    super("Invalid token passed");
  }
}

module.exports = InvalidTokenError;
