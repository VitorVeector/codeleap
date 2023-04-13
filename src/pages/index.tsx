import { DataProvider } from "context/DataContext";
import Main from "./Main"
import { SignUp } from "./SignUp"
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter()

    return (
        <>
            {router.pathname === '/' ? <SignUp /> : <Main />}
        </>
    )
}
