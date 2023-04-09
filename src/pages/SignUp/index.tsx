import { LoginComponents, SignUpComponent } from "./style"

export const SignUp = () => {
    return (
        <SignUpComponent>
            <LoginComponents>
                <h3>Welcome to Codeleap newtork!</h3>
                <label htmlFor="">Please enter your username</label>
                <input type="text" name="username" placeholder="John doe"/>
                <button>Enter</button>
            </LoginComponents>
        </SignUpComponent>
    )
}