import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IXcgsKAaRFhH7wwbW2LxPsTV5zU24rGT6CsF1rR2mZeoizyrSYx5W3jdaLr2RwcHUVghaA9dFn48nOtHlkuwvwQ001NIVmTD5');

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

const handleClick = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch('/api/payment/', { method: 'POST' }); // eslint-disable-line
  console.log(response);

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

function Checkout () {
  const classes = useStyles();
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/vieworders');
  };

  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Box className={classes.root}>
          <img src='https://media.giphy.com/media/adw9aTVANeCP6PTZpB/source.gif' alt='checkout' />
          <button role='link' onClick={handleClick}>
            Checkout
          </button>
        </Box>
        <Button onClick={handleBackClick} variant='outlined'>Back</Button>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Checkout;
