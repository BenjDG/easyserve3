import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SelectorBox ({ tablesList, usersList, createOrder, setTable, setUser }) {
  const classes = useStyles();
  const [userTemp, setUserTemp] = useState('');
  const [tableTemp, setTableTemp] = useState('');

  const handleChangeUser = (event) => {
    setUserTemp(event.target.value);
  };

  const handleChangeTable = (event) => {
    setTableTemp(event.target.value);
  };

  const handleSubmit = () => {
    createOrder(userTemp, tableTemp);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='user'>User</InputLabel>
        <Select
          labelId='user'
          id='user'
          value={userTemp}
          onChange={handleChangeUser}
        >
          {usersList.length
            ? usersList.map(user => <MenuItem key={user.id} value={user.id}>{user.first_name} {user.last_name}</MenuItem>)
            : (<div />)}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='table'>Table</InputLabel>
        <Select
          labelId='table'
          id='table'
          value={tableTemp}
          onChange={handleChangeTable}
        >
          {tablesList.length
            ? tablesList.map(table => <MenuItem key={table.id} value={table.id}>{table.name}</MenuItem>)
            : (<div />)}
        </Select>
      </FormControl>
      <FormControl>
        <Box p={2}>
          <Button variant='contained' onClick={handleSubmit}>GO</Button>
        </Box>
      </FormControl>
    </div>
  );
}

export default SelectorBox;
