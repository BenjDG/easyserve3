import React, { useState } from 'react';
import { Box, Collapse, IconButton, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import API from '../../services/API';
import UpdateButton from '../updateButton';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
});

function ViewAllOrdersTableRow ({ row, statusNamesList, userNamesList }) {
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState([]);
  const classes = useRowStyles();

  const handleClick = async (event) => {
    // fetch and set order data
    await loadOrderData(event.currentTarget.id);
    setOpen(!open);
  };

  const loadOrderData = async (orderId) => {
    await API.findOrderByIdWithItems(orderId).then(res => {
      setItemData(res.data.orderItems);
    }).catch(err => console.error(err));
  };

  return (
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
        <TableCell align='right'>{userNamesList[row.userId - 1]}</TableCell>
        <TableCell align='right'>{statusNamesList[row.statusId - 1]}</TableCell>
        <TableCell align='right'><UpdateButton id={row.id} /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Order Items
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align='right'>Item price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemData.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell component='th' scope='row'>
                        {row.menuItem.title}
                      </TableCell>
                      <TableCell align='right'>
                        {Math.round(row.menuItem.price * 100) / 100}
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
