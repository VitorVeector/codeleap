import { motion } from "framer-motion"
import styled from "styled-components" 

export const MainComponent = styled(motion.div)`
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const MainContent = styled.div`
    max-width: 800px;
    width: 100%;
    background-color: #fff;
`