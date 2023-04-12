import { Header } from "components/Header"
import { MainComponent, MainContent } from "./style"
import { Form } from "components/Form"
import { Post } from "components/Post"
import { useEffect, useState  } from 'react';
import axios from "axios";

type DataInterface = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string
}

export const Main = () => {

    const [data, setData] = useState<DataInterface[]>([])

    const getData = async () => {
        try {
            const response = await axios.get('https://dev.codeleap.co.uk/careers/')
            setData(response.data.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
      }, [])

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