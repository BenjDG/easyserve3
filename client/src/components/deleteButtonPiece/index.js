import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useOrderButtonContext } from '../../services/globalOrderButton';

function DeleteButtonPiece ({ itemRecId, setRefresh, refresh }) {
  const [_, dispatch] = useOrderButtonContext(); // eslint-disable-line

  const handleClick = async (event) => {
    // console.log(event.currentTarget.id);
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
    try {
      await dispatch({
        type: 'remove',
        orderItemRecId: event.currentTarget.id
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IconButton onClick={handleClick} id={itemRecId} aria-label='delete'>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButtonPiece;
