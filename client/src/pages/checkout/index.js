import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

function Checkout () {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push('/vieworders');
  };

  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Box className={classes.root}>
          <img src='https://media.giphy.com/media/adw9aTVANeCP6PTZpB/source.gif' alt='checkout' />
        </Box>
        <Button onClick={handleClick} variant='outlined'>Back</Button>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Checkout;
