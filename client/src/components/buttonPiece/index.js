import React from 'react';
import { Button } from '@material-ui/core';
import PricePiece from '../pricePiece';
import { useOrderContext } from '../../services/globalOrder';

function ButtonPiece ({ orderId, itemId, title, price }) {
  const [_, dispatch] = useOrderContext();

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
