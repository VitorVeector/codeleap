import { useState, useEffect } from "react"
import Main from "./Main"
import { SignUp } from "./SignUp"
import styled from "styled-components"
import Image from 'next/image'
import CodeLeapLogo from 'assets/codeleap_logo_black 1.svg'
import { motion } from "framer-motion"
import { SignIn } from "@phosphor-icons/react"
import { useRouter } from "next/router"

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const routes = useRouter()

    const buttonVariants = {
        hover: { scale: 1.3 },
        tap: { scale: 0.95 },
    };    

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    function handleClick(){
        setIsLoading(true)
        setIsHidden(true)
        setTimeout(() => {
            setIsLoading(false)
            routes.push('/SignUp')
        }, 1000)
    }

    const HomeComponentAnimation = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    return (
        <HomeComponent
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 1 }}
            variants={HomeComponentAnimation}
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2 }}
                >
                    <Image className="codeleap_logo" src={CodeLeapLogo} alt="Logo CodeLeap" />
            </motion.div>
            <LoadingWrapper>
                <Loading
                    className={isLoading ? 'loading' : ''}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                />
            </LoadingWrapper>
            <ButtonLoading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 3 }}
                    >
                <ButtonComponent
                    onClick={() => handleClick()}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap">Enter<span><SignIn size={24} /></span>
                </ButtonComponent>
            </ButtonLoading>
        </HomeComponent>
    )
}


const ButtonLoading = styled(motion.div)`
    position: absolute;
    bottom: 56px;

    @media screen and (max-width: 556px) {
        bottom: 15%;
    }
`

const ButtonComponent = styled(motion.button)`
    background-color: #00000000;
    border: unset;
    cursor: pointer;
    padding: 32px;
    border-radius: 100%;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    span{
        margin-left: 12px;
    }
`

const HomeComponent = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

    .codeleap_logo{
        width: 608px;

        @media screen and (max-width: 642px) {
            width: 448px;
        }

        @media screen and (max-width: 452px) {
            width: 220px;
        }
    }
`

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


const Loading = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top-color: #7695EC;
  border-radius: 50%;
  animation: spin 1s infinite linear;

  &.loading {
    opacity: 1;
  }

  &.loaded {
    opacity: 0;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`