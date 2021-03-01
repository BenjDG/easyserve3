import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';
import API from '../../services/API';
import ViewTable from '../../components/viewTable';

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonView: {
    padding: theme.spacing(2, 2)
    // height: 200,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  }
}));

// show items on current order plus order info

// load buttons for food items

function NewOrder () {
  const classes = useStyles();
  const [orderByIdWithItems, setOrderByIdWithItems] = useState({});
  const [allMenuItems, setAllMenuItems] = useState({});
  const [orderId, setOrderId] = useState();
  const [userId, setUserId] = useState();
  const [tableId, setTableId] = useState();
  const [error, setError] = useState('');

  useEffect(async () => {
    await createNewOrder(1, 1);
    await loadOrderData(2);
    await loadMenuItems();
  }, []);

  const createNewOrder = (userId, tableId, statusId = 1, notes = null) => {
    API.createNewOrder(userId, tableId, statusId, notes)
      .then(result => {
        console.log(result.data);
        setOrderId(result.id);
        setUserId(result.userId);
        setTableId(result.restTableId);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadOrderData = (orderId) => {
    API.findOrderByIdWithItems(orderId)
      .then((res) => {
        setOrderByIdWithItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadMenuItems = () => {
    API.getAllMenuItems()
      .then((res) => {
        setAllMenuItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container direction='column'>
            <Grid item>
              {error}
              <ViewTable oneOrder={orderByIdWithItems} allMenuItems={allMenuItems} />
            </Grid>
            <Grid
              item
              container
              direction='row'
              justify='center'
              alignItems='center'
              className={classes.buttonView}
              spacing={4}
            >
              <Grid item xs={3}>
                <Button href='/hotdogs' variant='outlined'>Hotdogs</Button>
              </Grid>
              <Grid item xs={3}>
                <Button href='/sides' variant='outlined'>Sides</Button>
              </Grid>
              <Grid item xs={3}>
                <Button href='/drinks' variant='outlined'>Drinks</Button>
              </Grid>
              <Grid item xs={3}>
                <Button href='/icecream' variant='outlined'>Icecream</Button>
              </Grid>
              <Grid item xs={3}>
                <Button href='/' variant='outlined'>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default NewOrder;
