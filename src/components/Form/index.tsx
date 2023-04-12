import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { FormComponent } from './style';

interface FormValues {
	title: string;
	content: string;
}

export const Form = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data); // Aqui você pode enviar o formulário para o servidor ou fazer outras operações com os dados
	};

	return (
		<FormComponent>
			<h3>What’s on your mind?</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input placeholder='Hello world' type="text" label='Title' {...register('title', { required: true })} />
				{errors.title && <span>This field is required</span>} {/* Mensagem de erro caso o campo seja obrigatório */}

				<Input placeholder='Content here' type="textarea" label='Content' {...register('content', { required: true })} />
				{errors.content && <span>This field is required</span>} {/* Mensagem de erro caso o campo seja obrigatório */}

				<button type="submit">Create</button>
			</form>
		</FormComponent>
	);
};