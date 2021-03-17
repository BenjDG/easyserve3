import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import API from '../../services/API';

export default function SelectStatus ({ currentStatus, statusOptions, orderId, refresh, setRefresh }) {
  const [status, setStatus] = useState(currentStatus - 1);

  const handleChange = (event) => {
    setStatus(event.target.value);
    API.updateOrderStatus(orderId, event.target.value + 1)
      .then(() => {
        refresh ? setRefresh(false) : setRefresh(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <Select
      id='select-status'
      value={status}
      onChange={handleChange}
    >
      {statusOptions && statusOptions.map((option, idx) => (<MenuItem key={idx} value={idx}>{option}</MenuItem>))}
    </Select>
  );
}
