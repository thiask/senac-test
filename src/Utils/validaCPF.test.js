import { validarCPF } from './validarCPF';

test('Valida CPF verdadeiro', () => {
  const result = validarCPF('421.393.348-25');

  expect(result).toBe(true);
});