import styled from 'styled-components'

export const PostComponent = styled.div`
    margin: 0px 24px 24px;
`

export const PostHeaderComponent = styled.div`
    background-color: #7695EC;
    padding: 24px;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        color: #fff;
        font-size: 22px;

        @media screen and (max-width: 425px) {
            font-size: 18px;
        }

        @media screen and (max-width: 375px) {
            font-size: 14px;
        }
    }

    .post_header-btn{
        width: 78px;
        display: flex;
        justify-content: space-between;

        

        button{
            background-color: unset;
            border: unset;
            cursor: pointer;

            .img-btn{
                width: 30px;
                height: 30px;
                opacity: 1;
                transition: .3s ease-in-out;
                transform: scale(1);

                &:hover{
                    opacity: .8;
                    transform: scale(.9);
                }

                
            }
        }

        @media screen and (max-width: 425px) {
            button{
                .img-btn{
                    height: 26px;
                    width: 26px;
                }
            }
        }
    }
` 

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