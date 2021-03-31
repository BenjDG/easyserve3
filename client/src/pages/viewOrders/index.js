import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/API';
import ViewAllOrdersTable from '../../components/viewAllOrdersTable';
import './styles.css';

function AllOrders () {
  const history = useHistory();
  const [allOrders, setAllOrders] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();

  useEffect(async () => {
    await loadUserNameList();
    await loadStatusNameList();
    await loadData();
  }, []);

  setInterval(() => {
    history.go(0);
  }, 30000);

  const loadData = async () => {
    await API.findAllOrders()
      .then(async (res) => {
        // console.log(res.data);
        await setAllOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // load UserName list
  const loadUserNameList = async () => {
    await API.findAllUsers().then(async (res) => {
      await setUserNames(res.data.map(obj => `${obj.first_name} ${obj.last_name}`));
    }).catch(err => console.error(err));
  };

  // load StatusName list
  const loadStatusNameList = async () => {
    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('');
    await API.getStatusOptions().then(async (res) => {
      await setStatusNames(res.data.map(obj => capitalize(obj.name)));
    }).catch(err => console.error(err));
  };

  return (
    <Grid container>
      <Grid item xs='auto' sm={2} />
      <Grid item xs={12} sm={8}>
        <Box className='view-all-orders-table'>
          <ViewAllOrdersTable allOrders={allOrders} statusNamesList={statusNames} userNamesList={userNames} />
        </Box>
      </Grid>
      <Grid item xs='auto' sm={2} />
    </Grid>
  );
}

export default AllOrders;
