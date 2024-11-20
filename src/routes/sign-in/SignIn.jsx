import { signInWithGooglePopup,
         createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities"

import SignUp from "../../components/signup/SignUp";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={ logGoogleUser }>
        Sign in with Google Popup
      </button>
      <SignUp />
    </div>
  )
}

export default SignIn