import { app } from './app';
import { Config, logger } from './config';
import { configService } from './services';
import { PROCESS_TERMINATION_SIGNAL } from './constants';

const { PORT } = Config;

// fake DB connection
const connectToDB = () => {
  return Promise.resolve();
};

const startServer = async () => {
  configService.requireConfig();

  // establish DB connection here
  await connectToDB();

  const server = app.listen(PORT, () =>
    logger.info(`Listening on PORT ${PORT} 🚀`),
  );

  const handleGracefulShutdown = (signal: PROCESS_TERMINATION_SIGNAL): void => {
    logger.info(`${signal} signal received, closing http server...`);
    server.close(() => {
      logger.info('Http server is closed.');

      // Close any resources or perform cleanup before shutting down
      // For example, close database connections, release resources, etc.

      process.exit(0);
    });
  };

  process.on(PROCESS_TERMINATION_SIGNAL.SIGINT, () => {
    handleGracefulShutdown(PROCESS_TERMINATION_SIGNAL.SIGINT);
  });

  process.on(PROCESS_TERMINATION_SIGNAL.SIGTERM, () => {
    handleGracefulShutdown(PROCESS_TERMINATION_SIGNAL.SIGTERM);
  });
};

startServer().catch((err) => {
  logger.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
