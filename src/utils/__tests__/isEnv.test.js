import { isEnv } from '../';

describe('isEnv', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      NODE_ENV: 'production',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return true with correct environment', () => {
    const response = isEnv('production');
    expect(response).toBeTruthy();
  });
});
