import { a, b, c } from '../solution/js/app.js';

describe('get a, b and c variables', () => {
  test('variable a should be Jane', () => {
    expect(a).toBe('Jane');
  });

  test('variable b should be Jennifer', () => {
    expect(b).toBe('Jennifer');
  });

  test('variable c should be Johnny', () => {
    expect(c).toBe('Johnny');
  });
});
