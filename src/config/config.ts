import { config } from 'dotenv';
import * as path from 'path';
import { ENVIRONMENT } from '../constants';

config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const { PORT, NODE_ENV } = process.env;

export interface IConfig {
  NODE_ENV: ENVIRONMENT | undefined;
  PORT: number | undefined;
}

export const Config: IConfig = {
  PORT: Number(PORT),
  NODE_ENV: NODE_ENV as ENVIRONMENT,
};
