import { Typography } from '@material-ui/core';
import React from 'react';
import './styles.css';

export default function TotalPricePiece ({ orderItems }) {
  let totalPretty;
  if (orderItems.length) {
    const priceArr = orderItems.map(item => +item.menuItem.price);
    const total = priceArr.reduce((acc, curr) => acc + curr);
    totalPretty = (Math.round(total * 100) / 100).toFixed(2);
  }
  return (
    <div className='total'>
      <Typography component='span'> Total: ${totalPretty}</Typography>
    </div>
  );
}
