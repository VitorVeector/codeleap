import { Header } from "components/Header"
import { Form } from "components/Form"
import { Post } from "components/Post"
import { useData } from "Hooks/useData";
import { inAnimation } from "animation/in";
import { ModalDelete } from "components/ModalDelete";
import styled from "styled-components";
import { motion } from "framer-motion";

const Main = () => {
    const {data} = useData()

    return (
        <MainComponent
            {...inAnimation}
            >
            <ModalDelete />
            <Header />
            <MainContent>
                <Form />
                {data.map((item) => {
                    return <Post key={item.id} id={item.id} username={item.username} time={item.created_datetime} title={item.title} content={item.content} /> 
                })}
            </MainContent>
        </MainComponent>
    )
}

const MainComponent = styled(motion.div)`
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const MainContent = styled.div`
    max-width: 800px;
    width: 100%;
    background-color: #fff;
`

export default Main