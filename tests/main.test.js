import { randNumber } from '@ngneat/falso';

import { sum } from '../src/scripts/main.js';

// eslint-disable-next-line no-undef
test('Checking the sum of input numbers', () => {
  const randA = randNumber;
  const randB = randNumber;

  // eslint-disable-next-line no-undef
  expect(sum(randA)(randB)).toBe(randA + randB);
});