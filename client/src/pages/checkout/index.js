import React from 'react';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Button, makeStyles } from '@material-ui/core';

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
  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Box className={classes.root}>
          Picture
        </Box>
        <Button href='/currentorder' variant='outlined'>Back</Button>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Checkout;
