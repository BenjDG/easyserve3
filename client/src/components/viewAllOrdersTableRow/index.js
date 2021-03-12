import React from 'react';
import { Box, Collapse, IconButton, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import API from '../../services/API';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
});

const test = [
  { date: '2020-01-05', customerId: '11091700', amount: 3 },
  { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
];

function ViewAllOrdersTableRow ({ row }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const price = 1;
  console.log(row);

  const handleClick = (event) => {
    // fetch and set order data
    console.log(event.currentTarget.id);
    loadOrderData(event.currentTarget.id);
    setOpen(!open);
  };

  const loadOrderData = (orderId) => {
    API.findOrderByIdWithItems().then(res => {
      console.log(res);
    }).catch(err => console.error(err));
  };

  return (
  // <tr><td>{row.id}</td></tr>

    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={handleClick} id={row.id}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.id}
        </TableCell>
        <TableCell align='right'>{row.userId}</TableCell>
        <TableCell align='right'>{row.statusId}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Extra Data
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {test.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>
                        {Math.round(historyRow.amount * price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>

  );
}

export default ViewAllOrdersTableRow;
