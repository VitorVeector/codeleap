import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react'

type DataInterface = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string
}

interface DataProviderProps {
    children: ReactNode;
}

interface DataContextData {
    data: DataInterface[];
    postData: (dataUser: Omit<DataInterface, "id" | "created_datetime">) => void;
    setUsername: (username: string) => void;
    username: string;
}

export const DataContext = createContext<DataContextData>({} as DataContextData)

export const DataProvider = ({ children }: DataProviderProps) => {
    const [username, setUsername] = useState<string>('')
    const [data, setData] = useState<DataInterface[]>([])

    const getData = async () => {
        console.log('teste')
        try {
            const response = await axios.get('https://dev.codeleap.co.uk/careers/')
            const newData = response.data.results
            setData(newData)
            return newData
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    const postData = async (dataUser: Omit<DataInterface, "id" | "created_datetime">) => {
        try {
            await axios.post('https://dev.codeleap.co.uk/careers/', dataUser )
        } catch (err) {
            throw err
        }
    }

    return <DataContext.Provider value={{ data, postData, setUsername, username }}>{children}</DataContext.Provider>
}

