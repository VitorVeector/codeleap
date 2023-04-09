import styled from 'styled-components'

export const PostContentComponent = styled.div`
    padding: 24px;
    border: #999 solid 1px;
    border-top: unset;
    border-radius: 0 0 16px 16px; 

    div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 18px;
            color: #777;

            @media screen and (max-width: 425px) {
                font-size: 16px;
            }
        }

        .postAuthor{
            font-weight: 700
        }

        .published{
            font-weight: 400
        }

    }

    p{
        margin-top: 16px;
        font-size: 18px;

        @media screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
`