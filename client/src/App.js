import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Landing from './pages/Landing';
import McTestFace from './McTesty/McTestFace';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact strict path='/'>
            <Landing />
          </Route>
          <Route exact strict path='/test'>
            <McTestFace />
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
