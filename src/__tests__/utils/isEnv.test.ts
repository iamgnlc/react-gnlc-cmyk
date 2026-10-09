import { isEnv } from '../../utils';

describe('isEnv', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('MODE', 'production');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should return true with correct environment', () => {
    const response = isEnv('production');
    expect(response).toBeTruthy();
  });
});
