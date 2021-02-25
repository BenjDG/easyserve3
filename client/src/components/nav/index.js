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
              alignItems='center' xs={8}
            >
              <Link href='/' color='inherit'> Home </Link>
              <Link href='/login' color='inherit'> Login </Link>
              <Link href='/test' color='inherit'> Test </Link>
              <Link href='/tablestatus' color='inherit'> Tablestatus </Link>
              <Link href='/mainmenu' color='inherit'> Mainmenu </Link>
              <Link href='/hotdogs' color='inherit'> Hotdogs </Link>
              <Link href='/sides' color='inherit'> Sides </Link>
              <Link href='/icecream' color='inherit'> Icecream </Link>
              <Link href='/drinks' color='inherit'> Drinks </Link>
              <Link href='/tables' color='inherit'> Tables </Link>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
