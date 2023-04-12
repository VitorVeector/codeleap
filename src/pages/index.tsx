import { FormProvider, useForm } from "react-hook-form"
import Main from "./Main"
import { SignUp } from "./SignUp"
import { useRouter } from "next/router";

export default function Home() {
    const methods = useForm();
    const router = useRouter()

    return (
        <FormProvider {...methods}>
            {router.pathname === '/' ? <SignUp /> : <Main />}
        </FormProvider>
    )
}
