import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { auth } from '../../firebase/firebase.utils'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          Shop
        </OptionLink>
        <OptionLink to='/contact'>
          Contact
        </OptionLink>
        {currentUser ? (
          <>
            <OptionLink as='div'>
              <span>Hello</span>
              <span className='username'>{currentUser.displayName}</span>
            </OptionLink>
            <OptionLink as='div' onClick={() => auth.signOut()}>
              Sign out
            </OptionLink>
          </>
        ) : (
          <OptionLink to='/signin'>
            Sign in
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
