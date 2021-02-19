import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  }
}));

function Landing () {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography className={classes.root}>
          <Link href='/test' onClick={preventDefault} color='inherit'>
            Home
          </Link>
          <Link href='/test' onClick={preventDefault} color='inherit'>
            McTesty
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Landing;
