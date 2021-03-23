import React from 'react';

export default function TotalPricePiece ({ orderItems }) {
  let totalPretty;
  if (orderItems.length) {
    const priceArr = orderItems.map(item => +item.menuItem.price);
    const total = priceArr.reduce((acc, curr) => acc + curr);
    totalPretty = (Math.round(total * 100) / 100).toFixed(2);
  }
  return (
    <p>Total: ${totalPretty}</p>
  );
}
