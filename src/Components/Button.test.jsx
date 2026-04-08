import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renderiza botão com texto', () => {
    render(<Button label="Clique aqui" />);

    const button = screen.getByRole('button', {
        name: /clique aqui/i,
    });

    expect(button).toBeInTheDocument();
});