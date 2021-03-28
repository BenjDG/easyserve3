import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline'
  }
}));

function DemoCredCard () {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant='outlined' onClick={handleClickOpen}>
        Demo Credit Card
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Demo Credit Card</DialogTitle>
        <DialogContent dividers>
          <DialogContentText component='span' variant='body2' id='alert-dialog-description'>
            <Typography component='span' variant='body2' gutterBottom>
              <p>To see a successful transaction use the credit card number</p>
              <p>4242424242424242</p>
              <p>The other information can contain anything.</p>
              <p>For more test cards go to: <a href='https://stripe.com/docs/testing' target='_blank' rel='noreferrer'>https://stripe.com/docs/testing</a></p>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DemoCredCard;
