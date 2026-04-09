import { div } from './div';

test('Deve dividr dois numeros corretamentes', () => {
    
    const result = div(10, 2);
    expect(result).toBe(5);

})