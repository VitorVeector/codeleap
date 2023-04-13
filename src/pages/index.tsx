import { useState, useEffect } from "react"
import Main from "./Main"
import { SignUp } from "./SignUp"

export default function Home() {
    const [logged, setLogged] = useState<boolean>(false)

    useEffect(() => {
        setLogged(!!localStorage.getItem('username'))
    }, [])

    return (
        <>
            {logged ? <SignUp /> : <Main />}
        </>
    )
}