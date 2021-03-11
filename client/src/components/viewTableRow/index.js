import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

function ViewTableRow ({ item }) {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {item}
      </TableCell>
    </TableRow>
  );
}

export default ViewTableRow;
