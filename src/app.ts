import express, { Request, Response } from 'express';
import createError from 'http-errors';
import { router } from './routes';
import { errorHandlerMiddleware } from './middlewares';

const app = express();

app.use('/api', router);

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.all('*', (req: Request, res: Response): never => {
  throw createError(404, 'Route not found');
});

app.use(errorHandlerMiddleware);

export { app };
