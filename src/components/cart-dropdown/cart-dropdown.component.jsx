import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ items }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {items && items.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { items } }) => ({
  items
})

export default connect(mapStateToProps)(CartDropdown)
