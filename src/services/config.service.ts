import { Config, IConfig } from '../config';

class ConfigService<T extends object> {
  private config;

  constructor(config: T) {
    this.config = config;
  }

  requireConfig = (): void => {
    const keys = Object.keys(this.config);
    for (const key of keys) {
      if (this.config[key as keyof T] === undefined) {
        throw new Error(`${key} is not defined`);
      }
    }
  };
}

export const configService = new ConfigService<IConfig>(Config);
