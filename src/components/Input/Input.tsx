import React from 'react';
import styles from "./Input.module.css"


type InputProps = {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type = 'text', placeholder, value, onChange }: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
