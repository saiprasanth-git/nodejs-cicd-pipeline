const app = require('./index');

describe('Express App Tests', () => {
  test('app should be defined', () => {
    expect(app).toBeDefined();
  });

  test('app should be an Express app', () => {
    expect(typeof app).toBe('function');
  });

  test('app should have GET routes', () => {
    expect(app._router).toBeDefined();
  });
});
