import { Header } from "components/Header"
import { Form } from "components/Form"
import { Post } from "components/Post"
import { useData } from "Hooks/useData";
import { inAnimation } from "animation/in";
import { ModalDelete } from "components/ModalDelete";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ModalEdit } from "components/ModalEdit";

const Main = () => {
    const { data } = useData()

    return (
        <MainComponent
            {...inAnimation}
        >
            <ModalDelete />
            <ModalEdit />
            <Header />
            <MainContent>
                <Form />
                {data.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}>
                            <Post key={item.id} id={item.id} username={item.username} time={item.created_datetime} title={item.title} content={item.content} />
                    </motion.div>
                ))}
            </MainContent>
        </MainComponent>
    )
}

const MainComponent = styled(motion.div)`
    position: relative;
    overflow: auto;
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