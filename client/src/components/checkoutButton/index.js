import { Button } from '@material-ui/core';
import React from 'react';
import './styles.css';

export default function CheckoutButton ({ handleStripeClick, orderItems, orderId }) {
  return (
    <div className='checkout-button'>
      <Button onClick={handleStripeClick} orderitems={orderItems} orderid={orderId} variant='outlined'>Checkout</Button>
    </div>
  );
}
