import { Typography } from '@material-ui/core';
import React from 'react';
import './styles.css';

export default function TotalPricePiece ({ totalPrice }) {
  return (
    <div className='total'>
      <Typography component='span'> Total: ${totalPrice}</Typography>
    </div>
  );
}
