import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IceCreamBtn from "../../components/iceCreamBtn";
import { Box, Button, Grid } from "@material-ui/core";
import API from "../../services/API";
import ButtonPiece from "../../components/buttonPiece";
import ViewTable from "../../components/viewTable";
import { useCurrentOrderContext } from "../../services/orderContext";

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  buttonView: {
    padding: theme.spacing(2, 2),
  },
}));

function Icecream() {
  const classes = useStyles();
  const [icecream, setIcecream] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, _] = useCurrentOrderContext();
  const [OrderByIdWithItems, setOrderByIdWithItems] = useState({});
  const [AllMenuItems, setAllMenuItems] = useState({});
  const [refresh, setRefresh] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    loadIcecreamData();
    loadOrderData(currentOrder);
    loadMenuItems();
  }, [refresh]);

  const loadIcecreamData = () => {
    API.getIcecreams()
      .then((res) => {
        setIcecream(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + " - Please login");
      });
  };

  const loadOrderData = (orderId) => {
    API.findOrderByIdWithItems(orderId)
      .then((res) => {
        // console.log(res.data);
        setOrderByIdWithItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + " - Please login");
      });
  };

  const loadMenuItems = () => {
    API.getAllMenuItems()
      .then((res) => {
        setAllMenuItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        setError(error.message + " - Please login");
      });
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container direction="column">
            <Grid item>
              {error}
              <ViewTable
                oneOrder={OrderByIdWithItems}
                allMenuItems={AllMenuItems}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.buttonView}
              spacing={4}
            >
              {icecream.map((item) => {
                console.log(item);
                return (
                  <Grid item xs={3} key={item.id}>
                    <ButtonPiece
                      orderId={currentOrder}
                      itemId={item.id}
                      title={item.title}
                      price={item.price}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                    {/* <IceCreamBtn
                      itemId={item.id}
                      title={item.title}
                      click=""
                      price={item.price}
                    /> */}
                  </Grid>
                );
              })}

              <Grid item xs={3}>
                <Button href="/currentorder" variant="outlined">
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Icecream;
