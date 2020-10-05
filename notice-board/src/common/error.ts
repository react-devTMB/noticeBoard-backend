import { HTTP_STATUS } from './httpStatus';

export class GeneralError extends Error {
  private status: HTTP_STATUS;

  constructor(message: string, status: HTTP_STATUS) {
    super(message);

    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }

  public getStatus(): HTTP_STATUS {
    return this.status;
  }
}

// 4xx
export class BadRequest extends GeneralError {
  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}
export class NotFound extends GeneralError {
  constructor(message: string) {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

// 5xx
export class InternalServerError extends GeneralError {
  constructor(message: string) {
    super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}
