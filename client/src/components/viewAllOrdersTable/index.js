import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import React from 'react';
import ViewAllOrdersTableRow from '../viewAllOrdersTableRow';
import './styles.css';

function ViewAllOrdersTable ({ allOrders, statusNamesList, userNamesList }) {
  // console.log(allOrders);
  return (
    <div>
      {allOrders.length
        ? (
          <div>
            <TableContainer component={Paper}>
              <Table className='table' aria-label='collapsible table'>
                <TableHead className='table-head'>
                  <TableRow>
                    <TableCell className='table-cell' />
                    <TableCell className='table-cell' align='center'>Order ID</TableCell>
                    <TableCell className='table-cell' align='center'>User</TableCell>
                    <TableCell className='table-cell' align='center'>Status</TableCell>
                    <TableCell className='table-cell' align='center' />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrders.map((row) => (
                    <ViewAllOrdersTableRow key={row.id} row={row} statusNamesList={statusNamesList} userNamesList={userNamesList} />
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
