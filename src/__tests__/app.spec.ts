import request from 'supertest';
import { app } from '../app';

describe('App', () => {
  it('returns 200 status', async () => {
    const response = await request(app).get('/api').send();
    expect(response.statusCode).toBe(200);
  });
});
