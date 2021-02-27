import React from 'react';
import { Button } from '@material-ui/core';
import PricePiece from '../pricePiece';

function ButtonPiece ({ handleAdd, title, price }) {
  return (
    <div>
      <Button onClick={handleAdd} variant='outlined'>{title}</Button>
      <PricePiece price={price} />
    </div>
  );
}

export default ButtonPiece;
