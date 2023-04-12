import styled from 'styled-components'

export const InputComponent = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 16px;

        @media screen and (max-width: 425px) {
            font-size: 14px;
        }

        @media screen and (max-width: 375px) {
            font-size: 12px;
            margin-bottom: 4px;
        }
    }

    textarea,input{
        border-radius: 8px;
        padding: 8px 10.68px;
        border: 1px solid #777;

        &::placeholder{
            color: #ccc;
            font-size: 14px;
        }
    }

    textarea{
        resize: none;
        font-family: 'Roboto';
        height: 74px;
    }
`