import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Landing from "./pages/Landing";
import TableStatus from "./pages/TableStatus";
import MainMenu from "./pages/MainMenu";
import HotDogMenu from "./pages/HotDogMenu";
import IceCreamMenu from "./pages/IceCreamMenu";
import SidesMenu from "./pages/SidesMenu";
import DrinkMenu from "./pages/DrinkMenu";
import McTestFace from "./McTesty/McTestFace";
import Tables from "./pages/tables";

const theme = createMuiTheme({
  spacing: 12,
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact strict path="/">
            <Landing />
          </Route>
          <Route exact strict path="/test">
            <McTestFace />
          </Route>
          <Route exact strict path="/tablestatus">
            <TableStatus />
          </Route>
          <Route exact strict path="/mainmenu">
            <MainMenu />
          </Route>
          <Route exact strict path="/hotdogs">
            <HotDogMenu />
          </Route>
          <Route exact strict path="/sides">
            <SidesMenu />
          </Route>
          <Route exact strict path="/icecream">
            <IceCreamMenu />
          </Route>
          <Route exact strict path="/drinks">
            <DrinkMenu />
          </Route>
          <Route exact strict path="/tables">
            <Tables />
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
