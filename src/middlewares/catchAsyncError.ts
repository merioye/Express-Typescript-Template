import { Response, NextFunction, RequestHandler, Request } from 'express';

export const catchAsyncError = (
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(asyncFn(req, res, next)).catch(next);
  };
};
