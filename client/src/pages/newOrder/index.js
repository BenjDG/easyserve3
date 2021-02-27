import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonView: {
    padding: theme.spacing(2, 2)
    // height: 200,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  }
}));

// show items on current order plus order info

// load buttons for food items

function NewOrder () {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container direction='column'>
            <Grid item>
              <Paper elevation={3} className={classes.orderView}>
                List of order items
              </Paper>
            </Grid>
            <Grid item>
              <Box className={classes.buttonView}>
                Buttons
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default NewOrder;
