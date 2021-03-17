import { FormControl, makeStyles, Paper, Table, TableBody, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import SelectStatus from '../selectStatus';
import TotalPricePiece from '../totalPricePiece';
import ViewTableRow from '../viewTableRow';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}));

function ViewTable ({ oneOrder, allMenuItems, setRefresh, refresh, userNames, statusNames }) {
  const classes = useStyles();
  const messagesEndRef = useRef(null);
  const { id, orderItems = [], statusId, userId } = oneOrder || {};

  // menuArray for lookup name
  const menuArrayTitles = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArrayTitles.push(item.title));
  }

  const menuArrayPrices = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArrayPrices.push(item.price));
  }

  useEffect(() => {
    // scroll to bottom
    scrollToBottom();
  }, [allMenuItems, menuArrayTitles]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  return (
    <div>
      {id
        ? (
          <div>
            <FormControl className={classes.formControl}>
              <Typography component='span'>Order Id: {id} | User: {userNames[userId - 1]} | Status:{' '}
                <SelectStatus
                  currentStatus={statusId}
                  statusOptions={statusNames}
                  orderId={id}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              </Typography>
            </FormControl>
            <TotalPricePiece orderItems={orderItems} />
            {/* <p>Order Notes: {notes}</p> */}
          </div>)
        : (
          <div>Loading Order...Are you logged on?</div>)}

      {orderItems.length
        ? (
          <Paper variant='outlined' style={{ height: 200, overflow: 'auto' }}>
            <Table size='small'>
              <TableBody>
                {orderItems.map((obj, idx) => {
                  // console.log('repaint orderItems');
                  // console.log(obj);
                  return (
                    <ViewTableRow
                      key={idx}
                      item={menuArrayTitles[obj.menu_itemId - 1]}
                      price={menuArrayPrices[obj.menu_itemId - 1]}
                      itemRecId={obj.id}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  );
                })}
                <tr ref={messagesEndRef} />
              </TableBody>
            </Table>
          </Paper>
          )
        : (
          <Paper variant='outlined' style={{ height: 200, overflow: 'auto' }} />
          )}
    </div>
  );
}

export default ViewTable;
