import { googleSignInWithPopup } from "../utils/firebase/firebase.util";

const SignInForm = () => {

    return (
        <div>
            <button onClick={googleSignInWithPopup}>Sign In with Google</button>
        </div>
    )
}

export default SignInForm;