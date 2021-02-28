import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}));

function ViewOrders () {
  const classes = useStyles();
  const [viewOrders, setAllOrders] = useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.findAllOrders()
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
        // const error = new Error(err);
        // setError(error.message + ' - Please login');
      });
  };
  
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container>
            <Grid item>
              <Typography className={classes.root}>
                View Orders
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default ViewOrders;
