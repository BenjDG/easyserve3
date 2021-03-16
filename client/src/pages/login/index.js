import React, { useState } from 'react';
import API from '../../services/API';
import { useHistory } from 'react-router-dom';
import { UseUserProvider } from '../../services/userContext';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import DemoCredDialog from '../../components/demoCredDialog';

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
          sessionStorage.setItem('userRole', result?.data?.role); // eslint-disable-line
          setUser({
            id: result?.data?.id,
            first_name: result?.data?.first_name,
            last_name: result?.data?.last_name,
            email: result?.data?.email,
            role: result?.data?.role
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
        <Paper>
          <Box m={2}>
            <Typography variant='h3' align='center'>
              Please Login
            </Typography>
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
        </Paper>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8}>
        <DemoCredDialog />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Login;
