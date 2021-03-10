import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home';
import MainMenu from './pages/mainMenu';
import Checkout from './pages/checkout';

import Login from './pages/login';
import Nav from './components/nav';
import NewOrder from './pages/newOrder';
import ViewOrders from './pages/viewOrders';
import { OrderProviderButton } from './services/globalOrderButton';
import { UserProvider, UseUserProvider } from './services/userContext';
import { CurrentOrderProvider } from './services/orderContext';
import CurrentOrder from './pages/currentOrder';
import API from './services/API';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  const { user, setUser } = UseUserProvider();
  const userId = sessionStorage.getItem('userId'); // eslint-disable-line

  useEffect(() => {
    // add api call to get user info by userId
    // logout needs to remove session Id from localstorage
    console.log(user.id);
    user.id &&
      API.findUserById(user.id)
        .then((result) => {
          setUser(result.data.id);
        })
        .catch((err) => {
          console.error(err);
        });
    if (!user.id) {
      console.log('redirect here.');
    }
  }, [userId, user]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact strict path='/'>
            <Home />
          </Route>
          <Route exact strict path='/login'>
            <Login />
          </Route>
          {userId && (
            <>
              <Route exact strict path='/mainmenu'>
                <MainMenu />
              </Route>
              <Route exact strict path='/neworder'>
                <NewOrder />
              </Route>
              <Route exact strict path='/currentorder'>
                <CurrentOrder />
              </Route>
              <Route exact strict path='/vieworders'>
                <ViewOrders />
              </Route>
              <Route exact strict path='/checkout'>
                <Checkout />
              </Route>
            </>
          )}
          <Route path='*'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const AppProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <OrderProviderButton>
          <CurrentOrderProvider>
            <App />
          </CurrentOrderProvider>
        </OrderProviderButton>
      </UserProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
