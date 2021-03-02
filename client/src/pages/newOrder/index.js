import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';
import API from '../../services/API';
import ViewTable from '../../components/viewTable';
import SelectorBox from '../../components/selectorBox';
import { useCurrentOrderContext } from '../../services/orderContext';

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
  }
}));

// show items on current order plus order info

// load buttons for food items

function NewOrder () {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [_, setCurrentOrder] = useCurrentOrderContext();
  const [orderByIdWithItems, setOrderByIdWithItems] = useState({});
  const [allMenuItems, setAllMenuItems] = useState({});
  const [toggleHidden, setToggleHidden] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [tablesList, setTablesList] = useState([]);
  // const [orderId, setOrderId] = useState();
  // const [userId, setUserId] = useState();
  // const [tableId, setTableId] = useState();
  const [error, setError] = useState('');

  useEffect(async () => {
    await loadMenuItems();
    await loadAllUsers();
    await loadAllTables();
  }, []);

  const createNewOrder = async (userId, tableId, statusId = 1, notes = null) => {
    await setToggleHidden(false);
    await API.createNewOrder(userId, tableId, statusId, notes)
      .then(result => {
        setCurrentOrder(result.data.id);
        return result.data.id;
      }).then(async (id) => await loadOrderData(id))
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadOrderData = async (orderId) => {
    await API.findOrderByIdWithItems(orderId)
      .then(async (res) => {
        await setOrderByIdWithItems(res.data);
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

  const loadAllUsers = () => {
    API.findAllUsers()
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadAllTables = () => {
    API.getTableOptions()
      .then((res) => {
        setTablesList(res.data);
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
            {error}
            {toggleHidden
              ? (
                <div>
                  <Grid item>
                    <SelectorBox tablesList={tablesList} usersList={usersList} createOrder={createNewOrder} />
                  </Grid>
                </div>)
              : (
                <div>
                  <Grid item>
                    <ViewTable oneOrder={orderByIdWithItems} allMenuItems={allMenuItems} />
                  </Grid>
                </div>
                )}

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
