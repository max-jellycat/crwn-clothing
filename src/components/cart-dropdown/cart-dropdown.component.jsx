import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ items }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          items.length
            ? items.map(item => <CartItem key={item.id} item={item} />)
            : <span className='empty-message'>No items in your cart yet.</span>
        }
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = state => createStructuredSelector({
  items: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
