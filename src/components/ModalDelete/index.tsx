import { useData } from 'Hooks/useData';
import { inAnimation } from 'animation/in';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export const ModalDelete = () => {
    const { modalDeleteIsOpen, setModalDeleteIsOpen, deletePost, idModal } = useData()

    const closeModal = () => {
        setModalDeleteIsOpen(!modalDeleteIsOpen)
    };

    const handleDelete = async () => {
        await deletePost(idModal)
        console.log(idModal)
    }

    return (
        <>
            {modalDeleteIsOpen ?
                <ModalWrapper
                    {...inAnimation}>
                    <ModalBox>
                        <h3>
                            Are you sure you want to delete this item?
                        </h3>
                        <div>
                            <CancelButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                onClick={closeModal}>
                                Cancel
                            </CancelButton>
                            <DelteButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                onClick={handleDelete}>
                                Delete
                            </DelteButton>
                        </div>
                    </ModalBox>
                </ModalWrapper> : <></>}
        </>

    );
};

const ModalWrapper = styled(motion.div)`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
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

  div{
    align-self: flex-end;
    margin-top: 40px;
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

const DelteButton = styled(motion.button)`
  background-color: #FF5151;
  border: unset;
  border-radius: 8px;
  color: #fff;
  padding: 8px 32px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`


