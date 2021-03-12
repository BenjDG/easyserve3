import { Box, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../services/API';
import ViewAllOrdersTable from '../../components/viewAllOrdersTable';

const useStyles = makeStyles((theme) => ({

}));

function AllOrders () {
  const classes = useStyles();
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.findAllOrders()
      .then((res) => {
        // console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
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
                <ViewAllOrdersTable allOrders={allOrders} />
                {/* {allorders.length
                  ? (
                    <div>
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
                    </div>)
                  : (<div>Loading Orders...Are you logged on?</div>)} */}

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
