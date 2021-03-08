import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home';
import MainMenu from './pages/mainMenu';
import HotDogMenu from './pages/hotDogMenu';
import IceCreamMenu from './pages/iceCreamMenu';
import SidesMenu from './pages/sidesMenu';
import DrinkMenu from './pages/drinkMenu';
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
    // console.log(user);
    user.id &&
      API.findUserById(user.id)
        .then((result) => {
          setUser(result.data.id);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [userId, user]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
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
            <Route exact strict path='/hotdogs'>
              <HotDogMenu />
            </Route>
            <Route exact strict path='/sides'>
              <SidesMenu />
            </Route>
            <Route exact strict path='/icecream'>
              <IceCreamMenu />
            </Route>
            <Route exact strict path='/drinks'>
              <DrinkMenu />
            </Route>
            <Route exact strict path='/checkout'>
              <Checkout />
            </Route>
          </>
        )}
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
