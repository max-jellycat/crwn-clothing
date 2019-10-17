import React, { useState } from 'react'

import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setUserCredentials({ email: '', password: '' })
    } catch (err) {
      console.error(err)
      return
    }
  }

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">
            <span>Sign in</span>
            <i className="fas fa-sign-in"></i>
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            <span>Sign in with</span>
            <i className="icon fab fa-google"></i>
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
