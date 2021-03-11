import React from 'react';
import { AppBar, Grid, Link, Toolbar } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import API from '../../services/API';
import { UseUserProvider } from '../../services/userContext';

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
              <Link component={RouterLink} to='/vieworders' color='inherit'>
                View All Orders
              </Link>
              <Link onClick={logout} color='inherit'>
                Logout
              </Link>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
