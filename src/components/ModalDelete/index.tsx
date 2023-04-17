import { useData } from "Hooks/useData";
import { inAnimation } from "animation/in";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const ModalDelete = () => {
    const {
        modalDeleteIsOpen,
        setModalDeleteIsOpen,
        deletePost,
        idModal,
        requestLoading,
        setRequestLoading
    } = useData();

    const closeModal = () => {
        setModalDeleteIsOpen(!modalDeleteIsOpen);
    };

    const handleDelete = () => {
        setRequestLoading(true);
        setTimeout(() => {
          deletePost(idModal);
          setRequestLoading(false);
        }, 2000);
      };

    return (
        <>
            {modalDeleteIsOpen ? (
                <ModalWrapper {...inAnimation}>
                    <ModalBox>
                        <h3>Are you sure you want to delete this item?</h3>
                        <div>
                            <CancelButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={closeModal}
                            >
                                Cancel
                            </CancelButton>
                            <DeleteButton
                                className={requestLoading ? "loading" : ""}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleDelete}
                            >
                                Delete
                            </DeleteButton>
                        </div>
                    </ModalBox>
                </ModalWrapper>
            ) : (
                <></>
            )}
        </>
    );
};

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
`;

const ModalBox = styled(motion.div)`
    background-color: #fff;
    border-radius: 16px;
    max-width: 660px;
    width: 100%;
    margin: 0 32px;
    padding: 24px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 22px;
    }

    div {
        align-self: flex-end;
        margin-top: 40px;
    }
`;

const CancelButton = styled(motion.button)`
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #999;
    padding: 8px 32px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 16px;
`;

const DeleteButton = styled(motion.button)`
    position: relative;
    align-self: flex-end;
    margin-top: 16px;
    border: unset;
    background-color: #ff5151;
    color: #fff;
    border-radius: 8px;
    padding: 8px 32px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;

    @media screen and (max-width: 425px) {
        font-size: 14px;
    }

    &::before {
        content: "";
        color: transparent;
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 8px;
        box-shadow: 0 0 0 0 #ffffff;
        transition: box-shadow 0.3s ease-in-out;
    }

    &:hover::before {
        box-shadow: 0 0 0 2px #ff5151;
    }

    &.disable {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &.loading::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-top-color: #000;
        animation: spin 1s infinite linear;
        position: absolute;
        top: calc(50% - 10px);
        left: calc(50% - 10px);
    }

    &.loading {
        transition: none;
        color: transparent;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
