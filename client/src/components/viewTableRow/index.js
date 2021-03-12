import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import DeleteButtonPiece from '../deleteButtonPiece';
import PricePiece from '../pricePiece';

function ViewTableRow ({ item, price, itemRecId, setRefresh, refresh }) {
  return (
    <TableRow>
      <TableCell>
        {item}
      </TableCell>
      <TableCell align='right'>
        <PricePiece price={price} />
      </TableCell>
      <TableCell align='right'>
        <DeleteButtonPiece
          itemRecId={itemRecId}
          setRefresh={setRefresh}
          refresh={refresh}
        />
      </TableCell>
    </TableRow>
  );
}

export default ViewTableRow;
