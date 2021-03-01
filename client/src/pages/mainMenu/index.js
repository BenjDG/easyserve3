import React, { useContext } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { UserProvider } from '../../services/userContext';

function MainMenu () {
  const { user } = useContext(UserProvider());
  console.log(user);
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={4}>
          <Grid
            item
            container
            spacing={5}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <Button href='/neworder' variant='outlined' color='inherit'>
                New Order
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit'>
                View Orders
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit'>
                Chefs View
              </Button>
            </Grid>
            <Grid item>
              <Button href='#' variant='outlined' color='inherit'>
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
