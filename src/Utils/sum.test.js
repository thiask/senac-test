import { sum } from './sum';

test('deve somar dois números corretamente', () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});