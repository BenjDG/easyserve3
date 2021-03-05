import React from 'react';
import { AppBar, Grid, Link, Toolbar } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';

function Nav() {
  const history = useHistory();
  const logout = () => {
    sessionStorage.removeItem('userId'); // eslint-disable-line
    history.push('/');
  };

  return (
    <div>
      <AppBar position='sticky' style={{ background: 'red' }}>
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
              <Link component={RouterLink} to='/' color='inherit'>
                Home
              </Link>
              <Link component={RouterLink} to='/login' color='inherit'>
                Login
              </Link>
              <Link component={RouterLink} to='/mainmenu' color='inherit'>
                Mainmenu
              </Link>
              <Link component={RouterLink} to='/neworder' color='inherit'>
                New Order
              </Link>
              <Link component={RouterLink} to='/currentorder' color='inherit'>
                Current Order
              </Link>
              <Link component={RouterLink} to='/vieworders' color='inherit'>
                View All Orders
              </Link>
              <Link component={RouterLink} to='/tables' color='inherit'>
                Tables
              </Link>
              <Link onClick={logout} color='inherit'>
                Logout
              </Link>
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
