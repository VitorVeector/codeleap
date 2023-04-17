import styled from "styled-components";

export const FormComponent = styled.div`
    margin: 24px;
    padding: 24px;
    border: 1px solid #999999;
    border-radius: 16px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 22px;

        @media screen and (max-width: 425px) {
            font-size: 18px;
        }

        @media screen and (max-width: 375px) {
            font-size: 14px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        span {
            margin-top: 4px;
            color: #f33;
            font-weight: 700;
        }
    }

    button {
        position: relative;
        align-self: flex-end;
        margin-top: 16px;
        border: unset;
        background-color: #7695ec;
        border-radius: 8px;
        color: #fff;
        padding: 8px 32px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        @media screen and (max-width: 425px) {
            font-size: 14px;
        }

        &::before {
            content: "";
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: 8px;
            box-shadow: 0 0 0 0 #7695ec;
            transition: box-shadow 0.3s ease-in-out;
        }

        &:hover::before {
            box-shadow: 0 0 0 2px #7695ec;
        }

        &.disable {
            cursor: not-allowed;
            opacity: 0.5;
        }

        &.isLoading::after {
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

        &.isLoading {
            transition: none;
            color: transparent;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    }
`;
