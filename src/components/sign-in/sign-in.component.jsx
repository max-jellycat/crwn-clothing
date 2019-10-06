import React, { Component } from 'react'

import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

export class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.error(err)
      return
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            handleChange={this.handleChange}
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>
              <span>Sign in</span>
              <i className="fas fa-sign-in"></i>
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              <span>Sign in with</span><i className="icon fab fa-google"></i>
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
