import { JsonObject, serve, setup } from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/no-named-as-default-member
const swaggerJSDocs: JsonObject = YAML.load(
  path.resolve(__dirname, './swagger.yaml'),
);

export const swaggerConfig = {
  serve: serve,
  setup: setup(swaggerJSDocs),
};
