import { app } from './app';
import { Config, logger } from './config';
import { configService } from './services';

const { PORT } = Config;

// fake DB connection
const connectToDB = () => {
  return Promise.resolve();
};

const startServer = async () => {
  configService.requireConfig();

  // establish DB connection here
  await connectToDB();

  app.listen(PORT, () => logger.info(`Listening on PORT ${PORT} 🚀`));
};

startServer().catch((err) => {
  logger.error(err instanceof Error ? err.message : err);
});
