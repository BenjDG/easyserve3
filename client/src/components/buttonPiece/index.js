import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useOrderButtonContext } from '../../services/globalOrderButton';

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
    height: '7vh'
  }
}));

function ButtonPiece ({ orderId, itemId, title, price, setRefresh, refresh }) {
  const classes = useStyles();
  const [_, dispatch] = useOrderButtonContext(); // eslint-disable-line

  const handleClick = async (_event) => {
    // console.log(event);
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
    try {
      await dispatch({
        type: 'add',
        orderId: orderId,
        itemId: itemId,
        title: title,
        price: price
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleClick} variant='outlined'>{title}</Button>
    </div>
  );
}

export default ButtonPiece;
