import { ChangeEvent } from "react";

export interface InputProps {
    type: 'text' | 'number' | 'email' | 'password' | 'textarea';
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}