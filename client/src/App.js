import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Landing from './pages/landing';
import TableStatus from './pages/tableStatus';
import MainMenu from './pages/mainMenu';
import HotDogMenu from './pages/hotDogMenu';
import IceCreamMenu from './pages/iceCreamMenu';
import SidesMenu from './pages/sidesMenu';
import DrinkMenu from './pages/drinkMenu';
import McTestFace from './mcTesty/mcTestFace';
import Tables from './pages/tables';
import Nav from './components/nav';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <BrowserRouter>
          <Route exact strict path='/'>
            <Landing />
          </Route>
          <Route exact strict path='/test'>
            <McTestFace />
          </Route>
          <Route exact strict path='/tablestatus'>
            <TableStatus />
          </Route>
          <Route exact strict path='/mainmenu'>
            <MainMenu />
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
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
