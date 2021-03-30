import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useCurrentOrderContext } from '../../services/orderContext';
import { UseUserProvider } from '../../services/userContext';
import API from '../../services/API';
import ViewAllOrdersTableRow from '../viewAllOrdersTableRow';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(1),
    overflowX: 'hide'
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

  const history = useHistory();
  const [error, setError] = useState('');
  const [_, setCurrentOrder] = useCurrentOrderContext(); // eslint-disable-line
  // console.log(user);
  const { user } = UseUserProvider();

  const handleNewOrderClick = async () => {
    // console.log(user);
    await API.createNewOrder(user.id, '1', '1', null)
      .then(async (result) => {
        // console.log(result);
        await setCurrentOrder(result.data.id);
      }).then(() => history.push('/order'))
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };
  return (
    <div className='table-container'>
      {error}
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
                    <TableCell className={classes.tableCell} align='center'>
                      <Button onClick={handleNewOrderClick} variant='outlined'>
                        New Order
                      </Button>
                    </TableCell>
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
