import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Grid } from '@material-ui/core';
import API from '../../services/API';
import ViewTable from '../../components/viewTable';
import { useCurrentOrderContext } from '../../services/orderContext';
import ButtonPiece from '../../components/buttonPiece';
import ErrorBoundary from '../../components/errorBoundary';

const useStyles = makeStyles((theme) => ({
  buttonView: {
    padding: theme.spacing(1, 1)
  }
}));

function Order () {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, _setCurrentOrder] = useCurrentOrderContext();
  const [orderByIdWithItems, setOrderByIdWithItems] = useState(null);
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState();
  const [items, setItems] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    // load a reference list of all users
    loadUserNameList();

    // load a reference list of all status names
    loadStatusNameList();

    // load a reference list of all menu items
    loadItemData();
  }, []);

  useEffect(() => {
    loadOrderData(currentOrder);
  }, [refresh]);

  useEffect(() => {
    calculateTotalPrice();
  }, [orderByIdWithItems]);

  const loadItemData = async () => {
    await API.getAllMenuItems()
      .then((res) => {
        // console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadOrderData = async (orderId) => {
    await API.findOrderByIdWithItems(orderId)
      .then(async (res) => {
        // console.log(res.data);
        await setOrderByIdWithItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const calculateTotalPrice = () => {
    try {
      if (orderByIdWithItems && orderByIdWithItems.orderItems && orderByIdWithItems.orderItems.length) {
        const itemPrices = orderByIdWithItems.orderItems.map(item => +item.menuItem.price);
        const total = itemPrices.reduce((acc, curr) => acc + curr);
        const totalPretty = (Math.round(total * 100) / 100).toFixed(2);
        // console.log('calc');
        // console.log(totalPretty);
        setTotalPrice(totalPretty);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // load UserName list
  const loadUserNameList = async () => {
    await API.findAllUsers().then(res => {
      setUserNames(res.data.map(obj => `${obj.first_name} ${obj.last_name}`));
    }).catch(err => console.error(err));
  };

  // load StatusName list
  const loadStatusNameList = async () => {
    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('');
    await API.getStatusOptions().then(res => {
      setStatusNames(res.data.map(obj => capitalize(obj.name)));
    }).catch(err => console.error(err));
  };

  return (
    <Grid container>
      <Grid item xs='auto' sm={2} />
      <Grid item xs={12} sm={8}>
        <Box m={1}>
          <Grid item container direction='column'>
            {error}
            <Grid item>
              <ErrorBoundary>
                <ViewTable
                  totalPrice={totalPrice}
                  oneOrder={orderByIdWithItems}
                  allMenuItems={items}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  userNames={userNames}
                  statusNames={statusNames}
                />
              </ErrorBoundary>
            </Grid>
            <ErrorBoundary>
              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
                className={classes.buttonView}
                spacing={1}
              >
                {items.map((item) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} key={item.id}>
                      <ButtonPiece
                        orderId={currentOrder}
                        itemId={item.id}
                        title={item.title}
                        price={item.price}
                        setRefresh={setRefresh}
                        refresh={refresh}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </ErrorBoundary>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs='auto' sm={2} />
    </Grid>
  );
}

export default Order;
