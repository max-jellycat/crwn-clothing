import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {currentUser ? (
          <>
            <div className='option'>
              <span>Hello</span>
              <span className='username'>{currentUser.displayName}</span>
            </div>
            <div className='option' onClick={() => auth.signOut()}>
              Sign out
            </div>
          </>
        ) : (
          <Link className='option' to='/signin'>
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser: currentUser,
  hidden: hidden
})

export default connect(mapStateToProps)(Header)