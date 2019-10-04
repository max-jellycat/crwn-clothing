import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ items, itemsTotalPrice, dispatch, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          items.length
            ? items.map(item => <CartItem key={item.id} item={item} />)
            : <span className='empty-message'>No items in your cart yet.</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>Go to checkout ({itemsTotalPrice}€)</CustomButton>
    </div>
  )
}

const mapStateToProps = state => createStructuredSelector({
  items: selectCartItems,
  itemsTotalPrice: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
