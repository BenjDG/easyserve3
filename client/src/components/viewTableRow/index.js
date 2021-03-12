import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

function ViewTableRow ({ item }) {
  return (
    <TableRow>
      <TableCell>
        {item}
      </TableCell>
    </TableRow>
  );
}

export default ViewTableRow;
