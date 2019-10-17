import React, { useState } from 'react'

import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })

      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email address"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Password Confirmation"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">
          <span>Sign up</span>
          <i className="fas fa-user-plus"></i>
        </CustomButton>
      </form>
    </div>
  )
}

export default SignUp
