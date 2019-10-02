import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import './App.scss';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInUpPage} />
        </Switch>
      </>
    )
  }
}

export default App;
