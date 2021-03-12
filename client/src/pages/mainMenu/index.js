import React, { useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import API from '../../services/API';
import { useCurrentOrderContext } from '../../services/orderContext';
import { UseUserProvider } from '../../services/userContext';
import { useHistory } from 'react-router-dom';

function MainMenu () {
  const history = useHistory();
  const [error, setError] = useState('');
  const [_, setCurrentOrder] = useCurrentOrderContext(); // eslint-disable-line
  // console.log(user);
  const { user } = UseUserProvider();

  const handleNewOrderClick = async () => {
    // on click create new order
    // set current order number
    // redirect to neworder page
    // console.log(user);
    // console.log('click');
    // API.createNewOrder(user, table, status, notes)
    await API.createNewOrder(user, '1', '1', null)
      .then(async (result) => {
        // console.log(result);
        await setCurrentOrder(result.data.id);
      }).then(() => history.push('/order'))
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
        <Box m={4}>
          {error}
          <Grid
            item
            container
            spacing={5}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <Button onClick={handleNewOrderClick} variant='outlined' color='inherit'>
                New Order
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit' disabled>
                View Orders
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit' disabled>
                Chefs View
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit' disabled>
                Admin
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default MainMenu;
