import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import API from '../../services/API';
import ViewTable from '../../components/viewTable';
import { useCurrentOrderContext } from '../../services/orderContext';
import ButtonPiece from '../../components/buttonPiece';

const useStyles = makeStyles((theme) => ({
  // orderView: {
  //   padding: theme.spacing(2, 2),
  //   height: 200,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start'
  // },
  buttonView: {
    padding: theme.spacing(2, 2)
  }
}));
function NewOrder () {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, setCurrentOrder] = useCurrentOrderContext();
  const [orderByIdWithItems, setOrderByIdWithItems] = useState({});
  // const [toggleHidden, setToggleHidden] = useState(true);
  // const [usersList, setUsersList] = useState([]);
  // const [tablesList, setTablesList] = useState([]);
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState();
  const [items, setItems] = useState([]);

  useEffect(async () => {
    console.log('###### current order');
    console.log(currentOrder);
    // await loadMenuItems();
    // await loadAllUsers();
    // await loadAllTables();
    loadItemData();
    loadOrderData(currentOrder);
  }, [refresh]);

  const loadItemData = () => {
    API.getAllMenuItems()
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
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
        console.log(res.data);
        setOrderByIdWithItems(res.data);
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
            <Grid item>
              View Order Area
              <ViewTable oneOrder={orderByIdWithItems} allMenuItems={items} />
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
              Button Area
              {items.map((item) => {
                return (
                  <Grid item xs={3} key={item.id}>
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
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default NewOrder;
