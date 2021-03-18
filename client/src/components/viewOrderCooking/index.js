import React from 'react';
import { Box, Button, Grid, List, ListItem, ListItemText, makeStyles, Paper } from '@material-ui/core';
import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function ViewOrderCooking ({ order, refresh, setRefresh, userName, statusName }) {
  const classes = useStyles();
  const handleClick = () => {
    API.updateOrderInfo(order.id, order.userId, order.restTableId, '3', order.notes)
      .then(() => {
        refresh ? setRefresh(false) : setRefresh(true);
      })
      .catch(err => console.error(err));
  };

  // { orderId, userId, tableId, statusId, notes }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <List>
              <h3>Order Id: {order.id} | Server: {userName} | Status: {statusName}</h3>
              {order.orderItems.map((item, idx) => {
                return (
                  <ListItem key={idx}>
                    <ListItemText primary={item.menuItem.title} />
                  </ListItem>
                );
              })}
              <Box pt={4}>
                <Button onClick={handleClick} variant='contained' fullWidth>Done</Button>
              </Box>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
