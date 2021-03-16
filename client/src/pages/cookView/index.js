import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../services/API';
import ViewAllOrdersTable from '../../components/viewAllOrdersTable';

function CookView () {
  const [allOrders, setAllOrders] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();

  useEffect(async () => {
    await loadUserNameList();
    await loadStatusNameList();
    await loadData();
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
          <ViewAllOrdersTable allOrders={allOrders} statusNamesList={statusNames} userNamesList={userNames} />
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default CookView;