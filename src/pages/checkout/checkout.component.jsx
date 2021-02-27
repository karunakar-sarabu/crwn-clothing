import React from 'react'

import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {selectCartTotal} from '../../redux/cart/cart.selectors'
import StripeCheckOutButton from '../../components/stripe-button/stripe-button.component'

import CartItem from '../../components/cart-item/cart-item.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage=({cartItems,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
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
            </div>
            {
                cartItems.map(CartItem=>(
                    <CheckoutItem key={CartItem.id} cartItem={CartItem}/>
                
                ))}
            <div className='total'>
                <span>Total:${total}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments
                <br/>
                4242 4242 4242 4242 - Exp:01/23 - CVV :123

            </div>
             <StripeCheckOutButton price={total}/>       
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)