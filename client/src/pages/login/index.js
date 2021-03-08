import React, { useState } from 'react';
import API from '../../services/API';
import { useHistory } from 'react-router-dom';
import { UseUserProvider } from '../../services/userContext';
import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}));

function Login () {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = UseUserProvider();
  // Setting the component's initial login
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [err, setErr] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.login(login.email, login.password)
      .then(result => {
        if (result.status === 200) {
          // console.log(result);
          sessionStorage.setItem('userId', result?.data?.id); // eslint-disable-line
          setUser({
            id: result?.data?.id,
            first_name: result?.data?.first_name,
            last_name: result?.data?.last_name,
            email: result?.data?.email
          });
          history.push('/mainmenu');
        } else {
          setErr('An error occured.  Please check your username and password.');
          console.error(result.status);
        }
      }).catch(err => {
        setErr('An error occured.  Please check your username and password.');
        console.error(err);
      });
    setLogin({
      email: '',
      password: ''
    });
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid
            container
            className={classes.root}
          >
            <Grid item>
              <TextField
                required
                id='outlined-email-required'
                name='email'
                value={login.email}
                onChange={handleInputChange}
                label='Email'
                type='email'
                variant='outlined'
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id='outlined-password-input'
                name='password'
                value={login.password}
                onChange={handleInputChange}
                label='Password'
                type='password'
                autoComplete='current-password'
                variant='outlined'
              />
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary' onClick={handleFormSubmit}>
                Submit
              </Button>
              <h2 className='error'>{err}</h2>
            </Grid>
          </Grid>

        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
    //   <h2>Demo Users:</h2>
    //   <h3>Jane</h3>
    //   <p>Email: 1@1.com</p>
    //   <p>Password: 1234</p>
    //   <h3>Billy</h3>
    //   <p>Email: 1@2.com</p>
    //   <p>Password: 1234</p>
    //   <h3>Lloyd</h3>
    //   <p>Email: 1@3.com</p>
    //   <p>Password: 1234</p>
    // </div>
  );
}

export default Login;
