import { sum } from '../src/scripts/main.js';

// eslint-disable-next-line no-undef
test('Checking the sum of input numbers', () => {
  // eslint-disable-next-line no-undef
  expect(sum(2)(3)).toBe(5);
});
