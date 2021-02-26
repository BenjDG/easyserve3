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

function MainMenu () {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography className={classes.root}>
          <ul>
            <li>
              <Link href='/hotdogs' color='inherit'>
                Hot Dogs
              </Link>
            </li>
            <li>
              <Link href='/sides' color='inherit'>
                Sides
              </Link>
            </li>
            <li>
              <Link href='/drinks' color='inherit'>
                Drinks
              </Link>
            </li>
            <li>
              <Link href='/icecream' color='inherit'>
                Ice Cream
              </Link>
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default MainMenu;
