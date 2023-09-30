import { Response, NextFunction, RequestHandler, Request } from 'express';

export const catchAsyncError = (passedFunction: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };
};
