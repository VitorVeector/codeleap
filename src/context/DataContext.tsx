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
    updateData: ([]) => void;
    deletePost: (id: number) => void;
    setModalDeleteIsOpen: (id: boolean) => void;
    modalDeleteIsOpen: boolean;
    setIdModal: (id: number) => void;
    idModal: number;
    setRequestLoading: (boolean: boolean) => void;
    requestLoading: boolean
}

export const DataContext = createContext<DataContextData>({} as DataContextData)

export const DataProvider = ({ children }: DataProviderProps) => {
    const [username, setUsername] = useState<string>('')
    const [data, setData] = useState<DataInterface[]>([])
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState<boolean>(false)
    const [idModal, setIdModal] = useState<number>(0)
    const [requestLoading, setRequestLoading] = useState<boolean>(false)

    const getData = async () => {
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

    const updateData = (newData: DataInterface[]) => {
        setData(newData);
    };

    const postData = async (dataUser: Omit<DataInterface, "id" | "created_datetime">) => {
        try {
            setRequestLoading(true)
            await axios.post('https://dev.codeleap.co.uk/careers/', dataUser);
            const newData = await getData();
            setData(newData);
        } catch (err) {
            throw err;
        } finally {
            setRequestLoading(false)
        }
    }

    const deletePost = async (id: number) => {
        try {
            setRequestLoading(true)
            const string = JSON.stringify(id)
            console.log(string)
            await axios.delete(`https://dev.codeleap.co.uk/careers/${string}/`)
            const newData = await getData();
            setData(newData);
            setModalDeleteIsOpen(false)
        } catch (err) {
            console.log(err)
        } finally {
            setRequestLoading(false)
        }
    }

    return <DataContext.Provider value={{ data, postData, setUsername, username, updateData, deletePost, setModalDeleteIsOpen, modalDeleteIsOpen, idModal, setIdModal, setRequestLoading, requestLoading }}>{children}</DataContext.Provider>
}

