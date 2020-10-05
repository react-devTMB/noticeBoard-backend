/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Response } from 'express';
import { GeneralError } from '../common/error';
import { HTTP_STATUS } from '../common/httpStatus';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function handleError(err: any, res: Response) {
  if (err instanceof GeneralError) {
    return res.status(err.getStatus()).json({
      message: err.message || '',
    });
  }

  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    message: err.message || '',
  });
}
