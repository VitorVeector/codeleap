import { Header } from "components/Header"
import { MainComponent, MainContent } from "./style"
import { Form } from "components/Form"
import { Post } from "components/Post"

export const Main = () => {
    return (
        <MainComponent>
            <Header />
            <MainContent>
                <Form />
                <Post />
            </MainContent>
        </MainComponent>
    )
}