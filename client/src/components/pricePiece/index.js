import React from 'react';

function PricePiece ({ price }) {
  const prettyPrice = (Math.round(price * 100) / 100).toFixed(2);
  return (
    <p>Price: ${prettyPrice}</p>
  );
}

export default PricePiece;
