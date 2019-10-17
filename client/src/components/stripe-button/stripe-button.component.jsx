import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { emptyCart } from '../../redux/cart/cart.actions'
import StripeCheckout from 'react-stripe-checkout'
import CustomButton from '../../components/custom-button/custom-button.component'

const StripeCheckoutButton = ({ price, children, dispatch }) => {
  const priceForStripe = price * 100

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(res => {
        alert('Payment successful.')
        dispatch(emptyCart())
      })
      .catch(err => {
        console.error(err)
        alert(
          'There was an issue with your payment. Please make sure to use provided payment credentials.'
        )
      })
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
      stripeKey='pk_test_8YwWOL4CFEbyuGguecuI86tV00AR1NyPWP'
      ComponentClass='a'
    >
      <CustomButton>
        <span>Pay Now</span>
        <i className='fas fa-credit-card' />
      </CustomButton>
    </StripeCheckout>
  )
}

export default connect()(StripeCheckoutButton)
