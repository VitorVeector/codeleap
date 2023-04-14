import { useData } from 'Hooks/useData';
import { inAnimation } from 'animation/in';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { buttonVariants } from 'animation/button';

interface FormValues {
    title: string;
    content: string;
}

export const ModalEdit = () => {
    const { modalEditIsOpen, setModalEditIsOpen, editPost, requestLoading, idModal, setRequestLoading } = useData()
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const closeModal = () => {
        setModalEditIsOpen(!modalEditIsOpen)
    };

    const onSubmit = (data: FormValues) => {
        try {
            setRequestLoading(true)
            setTimeout(() => {
                editPost({ id: idModal, title: data.title, content: data.content })
                closeModal()
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

        return (
            <>
                {modalEditIsOpen ?
                    <ModalWrapper
                        {...inAnimation}>
                        <ModalBox>
                            <h3>
                                Edit item
                            </h3>

                            <FormEdit onSubmit={handleSubmit(onSubmit)}>
                                <Input placeholder='Hello world' type="text" label='Title' {...register('title', { required: true })} />
                                {errors.title && <span>This field is required</span>}

                                <Input placeholder='Content here' type="textarea" label='Content' {...register('content', { required: true })} />
                                {errors.content && <span>This field is required</span>}
                                <div className='buttons'>
                                    <CancelButton
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: .95 }}
                                        onClick={closeModal}
                                        type="button">
                                        Cancel
                                    </CancelButton>
                                    <SaveButton
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSubmit(onSubmit)}
                                        animate={requestLoading ? "loading" : "idle"}
                                        disabled={errors.content || errors.title ? true : false}
                                        variants={buttonVariants}
                                        type="button"
                                    >Create</SaveButton>
                                </div>
                            </FormEdit>
                        </ModalBox>
                    </ModalWrapper> : <></>}
            </>
        );
    };

    const FormEdit = styled(motion.form)`
    display: flex;
    flex-direction: column;

    span{
        margin-top: 4px;
        color: #f33;
        font-weight: 700;
    }

    .buttons{
        margin-top: 24px;
        align-self: flex-end;

        @media screen and (max-width: 377px) {
            Button{
                width: 100%;
                margin-bottom: 16px;
            }
        }
    }
`

    const ModalWrapper = styled(motion.div)`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #777777cc;
`

    const ModalBox = styled(motion.div)`
  background-color: #fff;
  border-radius: 16px;
  max-width: 660px;
  width: 100%;
  margin: 0 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  h3{
    font-size: 22px;
  }
`

    const CancelButton = styled(motion.button)`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #999;
  padding: 8px 32px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 16px;
`

const SaveButton = styled(motion.button)`
    background-color: #47B960;
    border: unset;
    border-radius: 8px;
    color: #fff;
    padding: 8px 32px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
`;


