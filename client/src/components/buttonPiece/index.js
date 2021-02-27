import React from 'react';
import { Button } from '@material-ui/core';
import PricePiece from '../pricePiece';

function ButtonPiece ({ orderId, itemId, click, title, price }) {
  return (
    <div>
      <Button onClick={click} variant='outlined'>{title}</Button>
      <PricePiece price={price} />
    </div>
  );
}

export default ButtonPiece;
