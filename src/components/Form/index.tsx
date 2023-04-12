import React, { useContext } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Input } from 'components/Input';
import { FormComponent } from './style';
import axios from 'axios';

interface FormValues {
	title: string;
	content: string;
}

export const Form = () => {
	const formState  = useFormContext();
	const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		try {
			console.log(formState)
			await axios.post('https://dev.codeleap.co.uk/careers/', {
				username: formState.getValues,
				title: data.title,
				content: data.content 
			})
			console.log('mandado')
		} catch (error) {
			console.log(error)
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

				<button type="submit">Create</button>
			</form>
		</FormComponent>
	);
};