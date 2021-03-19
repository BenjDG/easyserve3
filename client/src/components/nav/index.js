import React from 'react';
import { AppBar, Button, Grid, Hidden, Link, Toolbar } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import API from '../../services/API';
import { UseUserProvider } from '../../services/userContext';
import NavDrawer from '../navDrawer';

function Nav () {
  const { setUser } = UseUserProvider();
  const history = useHistory();
  const logout = () => {
    sessionStorage.removeItem('userId'); // eslint-disable-line
    API.logout();
    setUser('');
    history.replace('/');
  };

  return (
    <div>
      <AppBar position='sticky' style={{ background: 'blue' }}>
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
              <Hidden smDown>
                <Link component={RouterLink} to='/' color='inherit'>
                  Home
                </Link>
                <Link component={RouterLink} to='/login' color='inherit'>
                  Login
                </Link>
                <Link component={RouterLink} to='/mainmenu' color='inherit'>
                  Mainmenu
                </Link>
                <Link component={RouterLink} to='/order' color='inherit'>
                  Order
                </Link>
                <Link component={RouterLink} to='/vieworders' color='inherit'>
                  View All Orders
                </Link>
                <Link component={RouterLink} to='/cookview' color='inherit'>
                  Cook View
                </Link>
                <Link onClick={logout} color='inherit'>
                  Logout
                </Link>
              </Hidden>
            </Grid>
            <Grid item xs={2}>
              <Hidden mdUp>
                
                <NavDrawer />
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
