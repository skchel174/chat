class TokenNotProvidedError extends Error {
  constructor() {
    super("Token not provided");
  }
}

module.exports = TokenNotProvidedError;
