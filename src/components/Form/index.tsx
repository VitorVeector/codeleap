import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { FormComponent } from './style';
import { useData } from 'Hooks/useData';
import { useRouter } from 'next/router';

interface FormValues {
	title: string;
	content: string;
}

export const Form = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { postData, username } = useData()
	const [logged, setLogged] = useState<string>('')
	const router = useRouter();

    useEffect(() => {
        setLogged(localStorage.getItem('username') as string)
    }, [])

	const onSubmit = (data: FormValues) => {
		if(logged){
			try {
				setIsLoading(true)
				setTimeout(() => {
					postData({username: username, title: data.title, content: data.content})
					setIsLoading(false)
				}, 2000)
			} catch (error) {
				console.log(error)
			}
		} else {
			router.push('/SignUp');
		}
	};

	return (
		<FormComponent>
			<h3>What’s on your mind?</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input placeholder='Hello world' type="text" label='Title' {...register('title', { required: true })} />
				{errors.title && <span>This field is required</span>} 

				<Input placeholder='Content here' type="textarea" label='Content' {...register('content', { required: true })} />
				{errors.content && <span>This field is required</span>} 

				<button className={`${errors.content && errors.title ? 'disable' : ''} ${isLoading ? 'isLoading' : ''}`} type="submit">Create</button>
			</form>
		</FormComponent>
	);
};