import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
import ViewAllOrdersTableRow from '../viewAllOrdersTableRow';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'scroll'
  },
  table: {
    minWidth: 340
  },
  tableCell: {
    paddingRight: 0,
    paddingLeft: 0
  },
  tableBody: {
    minWidth: 340
  }
}));

function ViewAllOrdersTable ({ allOrders, statusNamesList, userNamesList }) {
  const classes = useStyles();
  // console.log(allOrders);
  return (
    <div className='table-container'>
      {allOrders.length
        ? (
          <div>
            <TableContainer className={classes.root} component={Paper}>
              {/* table too big on mobile */}
              <Table className={classes.table} aria-label='collapsible table'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell} />
                    <TableCell className={classes.tableCell} align='center'>Order ID</TableCell>
                    <TableCell className={classes.tableCell} align='center'>User</TableCell>
                    <TableCell className={classes.tableCell} align='center'>Status</TableCell>
                    <TableCell className={classes.tableCell} align='center' />
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
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
