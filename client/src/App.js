import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Login from './pages/login';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact strict path='/'>
            <Login />
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
