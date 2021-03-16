import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../services/API';
import ViewOrderCooking from '../../components/viewOrderCooking';

function CookView () {
  const [allOrdersCooking, setAllOrdersCooking] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();

  useEffect(async () => {
    await loadUserNameList();
    await loadStatusNameList();
    await loadData();
  }, []);

  const loadData = () => {
    API.findAllOrdersCooking()
      .then((res) => {
        // console.log(res.data);
        setAllOrdersCooking(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // load UserName list
  const loadUserNameList = () => {
    API.findAllUsers().then(res => {
      setUserNames(res.data.map(obj => `${obj.first_name} ${obj.last_name}`));
    }).catch(err => console.error(err));
  };

  // load StatusName list
  const loadStatusNameList = () => {
    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('');
    API.getStatusOptions().then(res => {
      setStatusNames(res.data.map(obj => capitalize(obj.name)));
    }).catch(err => console.error(err));
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          Orders Cooking
          {
            allOrdersCooking.length
              ? (
                <div>
                  {allOrdersCooking.map((order, idx) => <ViewOrderCooking key={idx} order={order} />)}
                </div>)
              : (<div>No Orders to Cook</div>)
          }
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default CookView;
