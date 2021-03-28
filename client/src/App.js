import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home';
import MainMenu from './pages/mainMenu';

import Login from './pages/login';
import Nav from './components/nav';
import Order from './pages/order';
import ViewOrders from './pages/viewOrders';
import { OrderProviderButton } from './services/globalOrderButton';
import { UserProvider, UseUserProvider } from './services/userContext';
import { CurrentOrderProvider } from './services/orderContext';
import API from './services/API';
import CookView from './pages/cookView';

const theme = createMuiTheme({
  spacing: 12,
  overrides: {
    MuiTableCell: {
      root: {
        paddingRight: 1,
        paddingLeft: 1
      }
    }
  }
});

function App () {
  const { user, setUser } = UseUserProvider();
  const userId = sessionStorage.getItem('userId'); // eslint-disable-line
  const userRole = sessionStorage.getItem('userRole'); // eslint-disable-line

  useEffect(() => {
    // add api call to get user info by userId
    // logout needs to remove session Id from localstorage
    // console.log(user.id);

    if (!user.id) {
      API.findUserById(userId)
        .then((result) => {
          // console.log(result);
          setUser({
            id: result?.data?.id,
            first_name: result?.data?.first_name,
            last_name: result?.data?.last_name,
            email: result?.data?.email,
            role: result?.data?.role
          });
        })
        .catch((err) => {
          console.error(err);
        });
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
              <Route exact strict path='/order'>
                <Order />
              </Route>
              <Route exact strict path='/vieworders'>
                <ViewOrders />
              </Route>
              <Route exact strict path='/cookview'>
                <CookView />
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
