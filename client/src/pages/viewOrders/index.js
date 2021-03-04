import { Box, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import API from '../../services/API';
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
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));
function AllOrders () {
  const classes = useStyles();
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.findAllOrders()
      .then((res) => {
        console.log(res.data);
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
              <Typography className={classes.root}>View All Orders</Typography>
              <Grid item>
                {allorders.map((item) => {
                  console.log(item);
                  return (
                    <Grid item xs={3} key={item.id}>
                      {item.id}
                      {item.userId}
                      {item.restTableId}
                      {item.statusId}
                      {item.notes}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default AllOrders;
