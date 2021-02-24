import React from 'react';
import { AppBar, Box, Grid, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  typographyStyle: {
    flex: 1
  }
}));

function Nav () {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <Grid container>
            <Grid item xs={2} />
            <Grid item container xs={8}>
              <Typography className={classes.typographyStyle} variant='h5'>
                <Box lineHeight={2} m={0}>
                  Ben Galloway
                </Box>
              </Typography>
              <Typography className={classes.root}>
                <Box lineHeight={1} p={1}>
                  <Link href='/' color='inherit'> Home </Link>
                  <Link href='/login' color='inherit'> Login </Link>
                  <Link href='/mainMenu' color='inherit'> MainMenu </Link>
                  <Link href='/tables' color='inherit'> Tables </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
