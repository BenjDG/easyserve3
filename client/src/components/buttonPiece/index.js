import React from 'react';
import { Button } from '@material-ui/core';
import PricePiece from '../pricePiece';
import { useOrderButtonContext } from '../../services/globalOrderButton';

function ButtonPiece ({ orderId, itemId, title, price }) {
  const [_, dispatch] = useOrderButtonContext();

  const handleClick = (event) => {
    console.log(event);
    dispatch({
      type: 'add',
      orderId: orderId,
      itemId: itemId,
      title: title,
      price: price
    });
  };

  return (
    <div>
      <Button onClick={handleClick} variant='outlined'>{title}</Button>
      <PricePiece price={price} />
    </div>
  );
}

export default ButtonPiece;
