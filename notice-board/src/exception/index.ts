import { HTTP_STATUS } from '../common/httpStatus';

export class Exception extends Error {
  status: HTTP_STATUS;
  message: string;

  constructor(message: string, status: HTTP_STATUS) {
    super(message);

    this.status = status;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }

  public getStatus(): HTTP_STATUS {
    return this.status;
  }
}

// 4xx error
export class BadRequest extends Exception {
  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}
export class NotFound extends Exception {
  constructor(message: string) {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

// 5xx error
export class InternalServerError extends Exception {
  constructor(message: string) {
    super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}

// Business error
export class BusinessException extends Exception {}
