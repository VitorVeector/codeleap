import { useForm, useFormContext } from 'react-hook-form';
import { LoginComponents, SignUpComponent } from './style';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

type FormData = {
    username: string;
};

export const SignUp = () => {
    const { handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter();
    const { register } = useFormContext();

    const onSubmit = handleSubmit((data) => {
        setIsLoading(true)
        setTimeout(() => {
            router.push('/Main')
            setIsLoading(false)
        }, 2000)
    });

    return (
        <SignUpComponent>
            <LoginComponents>
                <h3>Welcome to Codeleap network!</h3>
                <label htmlFor="">Please enter your username</label>
                <input type="text" placeholder="John doe" {...register('username', {
                    required: 'This field is required',
                    minLength: {
                        value: 3,
                        message: 'Username must be at least 3 characters long'
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9]*$/,
                        message: 'Username must contain only letters and numbers'
                    }
                })} />
                {errors.username && <span>{errors.username.message}</span>}
                    <button className={`${errors.username ? 'disable' : ''} ${isLoading ? 'isLoading' : ''}`} disabled={!!errors.username} onClick={onSubmit}>Enter</button>
            </LoginComponents>
        </SignUpComponent>
    );
};

export default SignUp