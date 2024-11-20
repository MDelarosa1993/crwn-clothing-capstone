import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../forminput/FormInput";
import './signup.scss'
import Button from "../button/Button";

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields

	console.log(formFields)

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if(password !== confirmPassword) {
			alert('passwords dont match')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)
			await createUserDocumentFromAuth(user, { displayName })
			resetFormFields();
		}catch(error){
			if(error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use')
			} else {
				console.log(error)
			}
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value })
	}

  return (
    <div className="sign-up-container">
			<h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
			<form onSubmit={ handleSubmit }>
				<FormInput label="Display Name" type="text" required onChange={ handleChange } name="displayName" value={ displayName }/>
				<FormInput label="Email" type="email" required onChange={ handleChange } name="email" value={ email }/>
				<FormInput label="Password" type="password" required onChange={ handleChange } name="password" value={ password}/>
				<FormInput label="Confirm Password" type="password" required onChange={ handleChange } name="confirmPassword" value={ confirmPassword }/>
				<Button type="submit">Sign Up</Button>
			</form>
    </div>
  )
}

export default SignUp;