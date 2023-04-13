import { Header } from "components/Header"
import { MainComponent, MainContent } from "./style"
import { Form } from "components/Form"
import { Post } from "components/Post"
import { useData } from "hooks/useData";

export const Main = () => {
    const {data} = useData()

    return (
        <MainComponent>
            <Header />
            <MainContent>
                <Form />
                {data.map((item) => {
                    return <Post key={item.id} username={item.username} time={item.created_datetime} title={item.title} content={item.content} /> 
                })}
            </MainContent>
        </MainComponent>
    )
}

export default Main