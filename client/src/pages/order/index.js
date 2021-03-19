import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import API from '../../services/API';
import ViewTable from '../../components/viewTable';
import { useCurrentOrderContext } from '../../services/orderContext';
import ButtonPiece from '../../components/buttonPiece';

const useStyles = makeStyles((theme) => ({
  buttonView: {
    padding: theme.spacing(2, 2)
  }
}));

function Order () {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, _setCurrentOrder] = useCurrentOrderContext();
  const [orderByIdWithItems, setOrderByIdWithItems] = useState({});
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState();
  const [items, setItems] = useState([]);
  const [userNames, setUserNames] = useState();
  const [statusNames, setStatusNames] = useState();

  useEffect(async () => {
    await loadUserNameList();
    await loadStatusNameList();
    await loadItemData();
    await loadOrderData(currentOrder);
  }, [refresh]);

  const loadItemData = async () => {
    await API.getAllMenuItems()
      .then((res) => {
        // console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  const loadOrderData = async (orderId) => {
    await API.findOrderByIdWithItems(orderId)
      .then((res) => {
        // console.log(res.data);
        setOrderByIdWithItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + ' - Please login');
      });
  };

  // load UserName list
  const loadUserNameList = async () => {
    await API.findAllUsers().then(res => {
      setUserNames(res.data.map(obj => `${obj.first_name} ${obj.last_name}`));
    }).catch(err => console.error(err));
  };

  // load StatusName list
  const loadStatusNameList = async () => {
    const capitalize = ([firstLetter, ...restOfWord]) =>
      firstLetter.toUpperCase() + restOfWord.join('');
    await API.getStatusOptions().then(res => {
      setStatusNames(res.data.map(obj => capitalize(obj.name)));
    }).catch(err => console.error(err));
  };

  // const handleSubmit = () => {

  // }

  return (
    <Grid container>
      <Grid item xs='auto' sm={2} />
      <Grid item xs={12} sm={8}>
        <Box m={2}>
          <Grid item container direction='column'>
            {error}
            <Grid item>
              <ViewTable
                oneOrder={orderByIdWithItems}
                allMenuItems={items}
                setRefresh={setRefresh}
                refresh={refresh}
                userNames={userNames}
                statusNames={statusNames}
              />
            </Grid>
            <Grid
              item
              container
              direction='row'
              justify='center'
              alignItems='center'
              className={classes.buttonView}
              spacing={1}
            >
              {items.map((item) => {
                return (
                  <Grid item xs={6} sm={4} md={3} key={item.id}>
                    <ButtonPiece
                      orderId={currentOrder}
                      itemId={item.id}
                      title={item.title}
                      price={item.price}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs='auto' sm={2} />
    </Grid>
  );
}

export default Order;
