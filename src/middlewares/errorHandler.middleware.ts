import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { logger } from '../config';

export const errorHandlerMiddleware = (
  err: HttpError,
  _: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  __: NextFunction,
) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        message: err.message,
        path: '',
        location: '',
      },
    ],
  });
};
