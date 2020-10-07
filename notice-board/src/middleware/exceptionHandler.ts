import { NextFunction, Request, Response } from 'express';
import { HTTP_STATUS } from '../common/httpStatus';
import { Exception } from '../exception';
import logger from '../config/winston';

export default function exceptionHandler(err: Exception, req: Request, res: Response, next: NextFunction) {
  logger.error(JSON.stringify(err));

  const status: HTTP_STATUS = err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message: string = err.message || 'Internal Server Error';
  res.status(status).json({ message });
}
