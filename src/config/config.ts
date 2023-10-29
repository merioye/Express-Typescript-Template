import { config } from 'dotenv';
import { ENVIRONMENT } from '../constants';

config({ path: `.env.${process.env.NODE_ENV || ENVIRONMENT.DEV}` });

const { PORT, NODE_ENV } = process.env;

export interface IConfig {
  NODE_ENV: ENVIRONMENT | undefined;
  PORT: number | undefined;
}

export const Config: IConfig = {
  PORT: Number(PORT),
  NODE_ENV: NODE_ENV as ENVIRONMENT,
};
