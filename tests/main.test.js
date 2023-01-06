import { randNumber } from '@ngneat/falso';
import { sum } from '../src/scripts/main';

test('When adding new valid product, get successful confirmation', () => {
  const a = randNumber;
  const b = randNumber;

  expect(sum(a)(b)).toBe(a + b);
});