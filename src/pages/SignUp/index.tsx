import { useForm } from 'react-hook-form';
import { LoginComponents, SignUpComponent } from './style';

type FormData = {
    username: string;
};

export const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
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
                <button className={errors.username && 'disable'} onClick={onSubmit}>Enter</button>
            </LoginComponents>
        </SignUpComponent>
    );
};
