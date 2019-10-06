import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CustomButton from '../../components/custom-button/custom-button.component'

const CheckoutPage = ({ cartItems, total, history }) => (
  <div className='checkout-page'>
    {cartItems.length ? (
      <>
        <header className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </header>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}

        <div className='total'>
          <span>Total : {total}€</span>
        </div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
        </div>
        <StripeCheckoutButton price={total} />
      </>
    ) : (
      <>
        <span className='empty-message'>No items in your cart yet...</span>
        <CustomButton onClick={() => history.push('/shop')}>Back to shop</CustomButton>
      </>
    )}
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
