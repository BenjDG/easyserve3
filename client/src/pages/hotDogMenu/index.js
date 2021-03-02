import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';
import API from '../../services/API';
import ButtonPiece from '../../components/buttonPiece';
import ViewTable from '../../components/viewTable';
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

function HotDog () {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, _] = useCurrentOrderContext();
  const [hotdogs, setHotdogs] = useState([]);
  const [OrderByIdWithItems, setOrderByIdWithItems] = useState({});
  const [AllMenuItems, setAllMenuItems] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    loadHotDogData();
    loadOrderData(currentOrder);
    loadMenuItems();
  }, []);

  const loadHotDogData = () => {
    API.getHotdogs()
      .then((res) => {
        setHotdogs(res.data);
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
              <ViewTable oneOrder={OrderByIdWithItems} allMenuItems={AllMenuItems} />
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
              {hotdogs.map((item) => {
                return <Grid item xs={3} key={item.id}><ButtonPiece orderId={currentOrder} itemId={item.id} title={item.title} price={item.price} /></Grid>;
              })}

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

export default HotDog;
