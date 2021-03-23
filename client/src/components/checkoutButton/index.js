import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function CheckoutButton () {
  const history = useHistory();
  const handleClick = () => {
    history.push('/checkout');
  };
  return (
    <Button className='checkout-button' onClick={handleClick} variant='outlined'>Checkout</Button>
  );
}
