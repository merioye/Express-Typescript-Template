import { Request, Response } from 'express';

export class AuthController {
  async register(_: Request, res: Response) {
    // some async stuff
    await Promise.resolve();

    res.status(201).send();
  }
}
