import React from 'react';
import { AppBar, Grid, Link, Toolbar } from '@material-ui/core';

function Nav () {
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Grid container>
            <Grid item xs={2} />
            <Grid
              item
              container
              direction='row'
              justify='space-evenly'
              alignItems='center'
              xs={8}
            >
              <Link href='/' color='inherit'> Home </Link>
              <Link href='/login' color='inherit'> Login </Link>
              <Link href='/mainmenu' color='inherit'> Mainmenu </Link>
              <Link href='/neworder' color='inherit'> New Order </Link>
              <Link href='/currentorder' color='inherit'> Current Order </Link>
              <Link href='/vieworders' color='inherit'> View All Orders </Link>
              <Link href='/tables' color='inherit'> Tables </Link>
              {/* <Link href='/hotdogs' color='inherit'> Hotdogs </Link>
              <Link href='/sides' color='inherit'> Sides </Link>
              <Link href='/drinks' color='inherit'> Drinks </Link>
              <Link href='/icecream' color='inherit'> Icecream </Link> */}
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
