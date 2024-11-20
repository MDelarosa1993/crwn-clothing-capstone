import SignUp from "../../components/signup/SignUp";
import SignIn from "../../components/signin/SignIn";
import './authentication.scss'

const Authentication = () => {
return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication;