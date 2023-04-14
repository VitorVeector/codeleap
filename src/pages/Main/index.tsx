import { Header } from "components/Header"
import { MainComponent, MainContent } from "pages/Main/style"
import { Form } from "components/Form"
import { Post } from "components/Post"
import { useData } from "Hooks/useData";
import { inAnimation } from "animation/in";
import { ModalDelete } from "components/ModalDelete";

export const Main = () => {
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

export default Main