import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../services/API';
import ViewOrderCooking from '../../components/viewOrderCooking';

function CookView () {
  const [allOrdersCooking, setAllOrdersCooking] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(async () => {
    await loadUserNameList();
    await loadStatusNameList();
    await loadData();
  }, [refresh]);

  const loadData = async () => {
    await API.findAllOrdersCooking()
      .then(async (res) => {
        // console.log(res.data);
        await setAllOrdersCooking(res.data);
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
console.log(allOrdersCooking);
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
                  {allOrdersCooking.map((order, idx) => <ViewOrderCooking key={idx} order={order} refresh={refresh} setRefresh={setRefresh} userName={userNames[+order.userId - 1]} statusName={statusNames[+order.statusId - 1]} />)}
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
