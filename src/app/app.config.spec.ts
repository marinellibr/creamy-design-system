import { appConfig } from './app.config';

describe('appConfig', () => {
  it('has providers', () => {
    expect(Array.isArray(appConfig.providers)).toBe(true);
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });
});
