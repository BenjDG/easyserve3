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
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

function DemoCredDialog () {
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
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Demo Credentials
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Demo Credentials</DialogTitle>
        <DialogContent dividers>
          <DialogContentText id='alert-dialog-description'>
            <Typography gutterBottom>
              <h3>Jane</h3>
              <p>Email: 1@1.com</p>
              <p>Password: 1234</p>
              <p>Role: Server</p>
            </Typography>
            <Typography gutterBottom>
              <h3>Billy</h3>
              <p>Email: 1@2.com</p>
              <p>Password: 1234</p>
              <p>Role: Server</p>
            </Typography>
            <Typography gutterBottom>
              <h3>Lloyd</h3>
              <p>Email: 1@3.com</p>
              <p>Password: 1234</p>
              <p>Role: Server</p>
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

export default DemoCredDialog;
