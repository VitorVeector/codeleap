import { Header } from "Components/Header"
import { MainComponent, MainContent } from "./style"
import { Form } from "Components/Form"

export const Main = () => {
    return (
        <MainComponent>
            <Header />
            <MainContent>
                <Form />
            </MainContent>
        </MainComponent>
    )
}