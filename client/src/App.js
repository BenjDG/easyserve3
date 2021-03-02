import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home';
import TableStatus from './pages/tableStatus';
import MainMenu from './pages/mainMenu';
import HotDogMenu from './pages/hotDogMenu';
import IceCreamMenu from './pages/iceCreamMenu';
import SidesMenu from './pages/sidesMenu';
import DrinkMenu from './pages/drinkMenu';
import Tables from './pages/tables';
import Login from './pages/login';
import Nav from './components/nav';
import NewOrder from './pages/newOrder';
import ViewOrders from './pages/viewOrders';
import { OrderProviderButton } from './services/globalOrderButton';
import { UserProvider } from './services/userContext';
import { CurrentOrderProvider } from './services/orderContext';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  // const [currentOrder, setCurrentOrder] = useState({
  //   currentOrderId: 1
  // });
  return (
    <div>
      <ThemeProvider theme={theme}>

        <Nav />
        <BrowserRouter>
          <Route exact strict path='/'>
            <Home />
          </Route>
          <Route exact strict path='/login'>
            <Login />
          </Route>
          <UserProvider>
            <Route exact strict path='/mainmenu'>
              <MainMenu />
            </Route>
            <CurrentOrderProvider>
              <OrderProviderButton>
                <Route exact strict path='/neworder'>
                  <NewOrder />
                </Route>
                <Route exact strict path='/vieworders'>
                  <ViewOrders />
                </Route>
                <Route exact strict path='/tablestatus'>
                  <TableStatus />
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
                <Route exact strict path='/tables'>
                  <Tables />
                </Route>
              </OrderProviderButton>
            </CurrentOrderProvider>
          </UserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
