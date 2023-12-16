import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { logger } from '../config';

export const errorHandlerMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  __: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const type = err.name || 'Internal Server Error';
  const message = err.message || 'Something went wrong';
  const path = req.path || '';
  const location = (err.location as string) || '';

  logger.error(message, { path, location });

  res.status(statusCode).json({
    errors: [
      {
        type,
        message,
        path,
        location,
      },
    ],
  });
};
