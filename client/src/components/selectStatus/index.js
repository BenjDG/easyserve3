import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SelectStatus ({ currentStatus, statusOptions }) {
  const [status, setStatus] = useState(statusOptions[currentStatus - 1]);
  const classes = useStyles();
  console.log(statusOptions[currentStatus - 1]);
  // console.log(statusOptions);

  const handleChange = (event) => {
    setStatus(event.target.value);
    API.updateOrderInfo
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='select-status'>Status</InputLabel>
      <Select
        labelId='select-status'
        id='select-status'
        value={status}
        onChange={handleChange}
      >
        {statusOptions && statusOptions.map((option, idx) => (<MenuItem key={idx} value={option}>{option}</MenuItem>))}
      </Select>
    </FormControl>
  );
}
