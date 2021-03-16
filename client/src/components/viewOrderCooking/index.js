import { Grid, List, ListItem, ListItemText, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function ViewOrderCooking ({ order }) {
  const classes = useStyles();
  console.log(order);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <List>
              <h3>Order Id: {order.id} | Server: {order.userId} | Status: {order.statusId}</h3>
              {order.orderItems.map((item, idx) => {
                return (
                  <ListItem key={idx}>
                    <ListItemText primary={item.menuItem.title} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
