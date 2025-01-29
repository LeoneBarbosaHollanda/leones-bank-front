import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import '@testing-library/jest-dom';


test('renders login form and allows input', () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText(/Digite seu e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Digite sua senha/i);
    const button = screen.getByText(/Entrar/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'admin@leonebank.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(button);
});
