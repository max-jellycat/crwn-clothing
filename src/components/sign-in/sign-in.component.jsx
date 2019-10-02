import React, { Component } from 'react'

import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

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

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: [value] })
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

          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </form>  
      </div>
    )
  }
}

export default SignIn
