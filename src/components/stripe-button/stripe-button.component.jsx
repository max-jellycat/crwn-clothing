import React from 'react'
import { connect } from 'react-redux'

import { emptyCart } from '../../redux/cart/cart.actions'
import StripeCheckout from 'react-stripe-checkout'
import CustomButton from '../../components/custom-button/custom-button.component'
 
const StripeCheckoutButton = ({ price, children, dispatch }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
    dispatch(emptyCart())
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      ComponentClass='a'
    >
      <CustomButton>
        <span>Pay Now</span>
        <i className="fas fa-credit-card" />
      </CustomButton>
    </StripeCheckout>
  )
}

export default connect()(StripeCheckoutButton)
