import express, { Request, Response, json } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import createError from 'http-errors';
import { authRouter } from './routes';
import { errorHandlerMiddleware } from './middlewares';
import { swaggerConfig } from './docs';

const app = express();

app.use(helmet());
app.use(compression());
app.use(json());

app.use('/api/v1/api-docs', swaggerConfig.serve, swaggerConfig.setup);
app.use('/api/v1/auth', authRouter);

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.all('*', (_: Request, __: Response): never => {
  throw createError(404, 'Route not found');
});

app.use(errorHandlerMiddleware);

export { app };
