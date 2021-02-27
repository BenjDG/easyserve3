import React from 'react';
import { Button, Grid } from '@material-ui/core';

function MainMenu () {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Grid
          item
          container
          spacing='4'
          direction='column'
          justify='space-evenly'
          alignItems='center'
        >
          <Grid item>
            <Button href='/order' variant='outlined' color='inherit'>
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
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default MainMenu;
