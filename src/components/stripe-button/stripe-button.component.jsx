import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckOutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IP8ieA8lbBHYKadBvIhDLBgm80yAVSaH2fuwPhDGOPsn8WKHPWYV0zgABUA8PLbpvnZfaqa6RMqlfN454MosWtu00X6vsooQJ'

    const onToken=token=>{
        console.log(token)
        alert('Payment Successfull')
    }
    return(
        <StripeCheckOut
            label='Pay Now'
            name='Karunakar Sarabu pvt. Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={price}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckOutButton