import { Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import ViewTableRow from '../viewTableRow';

function ViewTable ({ oneOrder, allMenuItems }) {
  const { id, notes, orderItems = [], restTableId, statusId, userId } = oneOrder || {};
  const menuArray = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArray.push(item.title));
  }

  useEffect(() => {
    // scroll to bottom
    console.log('scrolling');
  }, [allMenuItems]);

  return (
    <div>
      {id
        ? (
          <div>
            <p>Order Id: {id} | User Id: {userId} | Table: {restTableId} | Status Id: {statusId}</p>
            <p>Order Notes: {notes}</p>
          </div>)
        : (
          <div>Loading Order...Are you logged on?</div>)}

      {/* menu_itemId */}
      {orderItems.length
        ? (
          <Paper variant='outlined' style={{ maxHeight: 200, overflow: 'auto' }}>
            {orderItems.map((obj, idx) => {
              return (<ViewTableRow key={idx} item={menuArray[obj.menu_itemId - 1]} />);
            })}
          </Paper>
          )
        : (
          <div />
          )}
    </div>
  );
}

export default ViewTable;
