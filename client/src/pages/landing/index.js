import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

function Landing () {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography className={classes.root}>
          <Link href='/' color='inherit'>
            Home
          </Link>
          <Link href='/tablestatus' color='inherit'>
            TableStatus
          </Link>
          <Link href='/tables' color='inherit'>
            Tables
          </Link>
          <Link href='/test' color='inherit'>
            McTesty
          </Link>
          <Link href='/tables' color='inherit'>
            Tables
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Landing;
