import { app } from './app';
import { Config } from './config';
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

  app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 🚀`));
};

startServer().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
});
