import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './LoginForm.module.css';

export function LoginForm() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { cpf, password });

        if (cpf === '123456' && password === '123456') {
            router.push('/');
        } else {
            alert('Credenciais inválidas');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div>
                <h1 className={styles.loginTitle}>
                    Seja bem-vindo ao Leone's Bank
                </h1>
                <p className={styles.loginSubtitle}>
                    Experimente ferramentas intuitivas de gerenciamento de contas.
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <Input
                    type="text"
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Entrar</Button>
            </form>

            <div className={styles.authOptions}>
                <div >
                    <Button>Faça sua conta</Button>
                </div>
            </div>
        </div>
    );
}
