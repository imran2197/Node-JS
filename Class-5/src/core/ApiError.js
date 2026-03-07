class ApiError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(message);
    this.status = 400;
  }
}

class AuthenticationError extends ApiError {
  constructor(message = "Auth error") {
    super(message);
    this.status = 401;
  }
}

class NotFoundError extends ApiError {
  constructor(message = "Not found error") {
    super(message);
    this.status = 404;
  }
}

class InternalServerError extends ApiError {
  constructor(message = "Internal Error") {
    super(message);
    this.status = 500;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  AuthenticationError,
  InternalServerError,
  ApiError,
};
