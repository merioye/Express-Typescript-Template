import { app } from './app';

const PORT = 8000;

// fake DB connection
const connectToDB = () => {
  return Promise.resolve();
};

const startServer = async () => {
  // establish DB connection here
  await connectToDB();

  app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 🚀`));
};

startServer().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
});
