import { Header } from "Components/Header"
import { MainComponent, MainContent } from "./style"
import { Form } from "Components/Form"
import { Post } from "Components/Post"

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