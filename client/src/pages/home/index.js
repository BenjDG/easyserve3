import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, Paper, Link } from '@material-ui/core';

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

function Home () {
  const classes = useStyles();
  return (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
      <Grid item xs='auto' sm={2} />
      <Grid item xs={12} sm={8}>
        <Paper className={classes.root}>
          <Typography variant='h1' align='center'>
            Easy Order
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs='auto' sm={2} />
      <Grid item xs='auto' sm={2} />
      <Grid item xs={12} sm={8}>
        <Typography variant='h2' align='center'>
          <Link href='/login' color='inherit'>
            Login
          </Link>
        </Typography>
      </Grid>
      <Grid item xs='auto' sm={2} />
    </Grid>
  );
}

export default Home;
