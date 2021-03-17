import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useCurrentOrderContext } from '../../services/orderContext';

export default function UpdateButton ({ id }) {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [_currentOrder, setCurrentOrder] = useCurrentOrderContext();

  const handleClick = (e) => {
    // console.log(e.currentTarget.id);
    setCurrentOrder(e.currentTarget.id);
    history.push('/order');
  };

  return (
    <Button onClick={handleClick} id={id} variant='outlined'>Update</Button>
  );
}
