import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useData } from 'Hooks/useData';
import { inAnimation } from 'animation/in';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type FormData = {
    username: string;
};

const HomeComponentAnimation = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const router = useRouter();
    const { setUsername } = useData()

    const onSubmit = handleSubmit((data) => {
        setIsLoading(true);
        setUsername(data.username);
        setIsHidden(true)
        localStorage.setItem('username', data.username)
        setTimeout(() => {
            router.push('/Main');
            setIsLoading(false);
        }, 2000);
    });

    return (
        <SignUpComponent
            {...inAnimation}
            >
            <LoginComponents
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 1, delay: 1 }}
                variants={HomeComponentAnimation}
                >
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

const SignUpComponent = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #DDDDDD; 
`

const LoginComponents = styled(motion.div)`
    background-color: #fff;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 32px;

    h3{
        font-weight: 700;
        font-size: 22px;

        @media screen and (max-width: 425px) {
            font-size: 18px;
        }

        @media screen and (max-width: 375px) {
            font-size: 14px;
        }
    }

    label{
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400; 

        @media screen and (max-width: 425px) {
            font-size: 14px;
        }

        @media screen and (max-width: 375px) {
            font-size: 12px;
        }
    }

    input{
        margin-top: 8px;
        padding: 8px 11.2px;
        border-radius: 8px;
        border: 1px solid #777;

        &::placeholder{
            color: #CCCCCC;
        }
    }

    span{
            margin-top: 4px;
            color: #f33;
            font-weight: 700;
    }

    button {
        position: relative;
        align-self: flex-end;
        margin-top: 16px;
        text-transform: uppercase;
        border: unset;
        background-color: #7695EC;
        border-radius: 8px;
        color: #fff;
        padding: 8px 32px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: .3s ease-in-out;

        @media screen and (max-width: 425px) {
            font-size: 14px;
        }

        &::before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: 8px;
            box-shadow: 0 0 0 0 #7695EC;
            transition: box-shadow .3s ease-in-out;
        }

        &:hover::before {
            box-shadow: 0 0 0 2px #7695EC;
    }

    &.disable{
        cursor: not-allowed;
        opacity: .5;
    }

    &.isLoading::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-top-color: #000;
        animation: spin 1s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: absolute;
        top: calc(50% - 10px);
        left: calc(50% - 10px);
    }
    
    &.isLoading{
        transition: none;
        color: transparent;
    }

    @keyframes spin {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.45, 0.03, 0.53, 0.95);
  }
  100% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}
}
`

export default SignUp