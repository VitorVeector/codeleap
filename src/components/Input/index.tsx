import React, { forwardRef } from 'react';
import { InputComponent } from './style';

interface InputProps {
    type: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
}

interface InputWithRefProps extends InputProps {
    name: string;
}

export const Input = forwardRef<HTMLInputElement, InputWithRefProps>(function InputWithRef({ type, label, ...rest }, ref) {
    return (
        <InputComponent>
            {label && <label htmlFor={rest.name}>{label}</label>}
            {type === 'textarea' ? (
                <textarea defaultValue={rest.defaultValue} ref={ref as unknown as React.MutableRefObject<HTMLTextAreaElement>} {...rest} />
            ) : (
                <input defaultValue={rest.defaultValue} ref={ref as React.MutableRefObject<HTMLInputElement>} type={type} {...rest} />
            )}
        </InputComponent>
    );
});

Input.displayName = 'Input';

export default Input;