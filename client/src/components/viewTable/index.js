import { FormControl, makeStyles, Paper, Table, TableBody, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import ErrorBoundary from '../errorBoundary';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutButton from '../checkoutButton';
import SelectStatus from '../selectStatus';
import TotalPricePiece from '../totalPricePiece';
import ViewTableRow from '../viewTableRow';

const stripePromise = loadStripe('pk_test_51IXcgsKAaRFhH7wwbW2LxPsTV5zU24rGT6CsF1rR2mZeoizyrSYx5W3jdaLr2RwcHUVghaA9dFn48nOtHlkuwvwQ001NIVmTD5');

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}));

function ViewTable ({ oneOrder, allMenuItems, setRefresh, refresh, userNames, statusNames, totalPrice }) {
  const classes = useStyles();
  const messagesEndRef = useRef(null);
  const { id, orderItems = [], statusId, userId } = oneOrder || {};

  const handleStripeClick = async (_event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    const data = {
      id: id
    };
    // Call your backend to create the Checkout Session
    const response = await fetch('/api/payment/', { // eslint-disable-line
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    // console.log(response);

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  // menuArray for lookup name
  const menuArrayTitles = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArrayTitles.push(item.title));
  }

  const menuArrayPrices = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArrayPrices.push(item.price));
  }

  useEffect(() => {
    // scroll to bottom
    scrollToBottom();
  }, [menuArrayTitles]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  return (
    <div>
      {typeof id !== 'undefined' && id
        ? (
          <div>
            <FormControl className={classes.formControl}>
              <Typography component='span'>Order Id: {id} | User: {userNames[userId - 1]} | Status:{' '}
                <ErrorBoundary>
                  <SelectStatus
                    currentStatus={statusId}
                    statusOptions={statusNames}
                    orderId={id}
                    setRefresh={setRefresh}
                    refresh={refresh}
                  />
                </ErrorBoundary>
              </Typography>
            </FormControl>
            <br />
            <ErrorBoundary>
              <TotalPricePiece totalPrice={totalPrice} />
              <CheckoutButton handleStripeClick={handleStripeClick} orderItems={orderItems} orderId={id} />
            </ErrorBoundary>
            {/* <p>Order Notes: {notes}</p> */}
          </div>)
        : (
          <div>Loading Order...</div>)}

      {orderItems.length
        ? (
          <Paper variant='outlined' style={{ height: 200, overflow: 'auto' }}>
            <Table size='small'>
              <ErrorBoundary>
                <TableBody>
                  {orderItems.map((obj, idx) => {
                    // console.log('repaint orderItems');
                    // console.log(obj);
                    return (
                      <ViewTableRow
                        key={idx}
                        item={menuArrayTitles[obj.menu_itemId - 1]}
                        price={menuArrayPrices[obj.menu_itemId - 1]}
                        itemRecId={obj.id}
                        setRefresh={setRefresh}
                        refresh={refresh}
                      />
                    );
                  })}
                  <tr ref={messagesEndRef} />
                </TableBody>
              </ErrorBoundary>
            </Table>
          </Paper>
          )
        : (
          <Paper variant='outlined' style={{ height: 200, overflow: 'auto' }} />
          )}
    </div>
  );
}

export default ViewTable;
