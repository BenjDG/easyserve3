import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import React from 'react';
import ViewAllOrdersTableRow from '../viewAllOrdersTableRow';

function ViewAllOrdersTable ({ allOrders }) {
  // console.log(allOrders);
  return (
    <div>
      {allOrders.length
        ? (
          <div>
            <TableContainer component={Paper}>
              <Table aria-label='collapsible table'>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Order ID</TableCell>
                    <TableCell align='right'>User</TableCell>
                    <TableCell align='right'>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrders.map((row) => (
                    <ViewAllOrdersTableRow key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          )
        : (<div>Loading Orders...Are you logged on?</div>)}
    </div>
  );
}

export default ViewAllOrdersTable;
