import React from 'react';
import ViewTableRow from '../viewTableRow';

function ViewTable ({ oneOrder, allMenuItems }) {
  const { id, notes, orderItems = [], restTableId, statusId, userId } = oneOrder;
  const menuArray = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArray.push(item.title));
  }
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
          <div>
            {orderItems.map((obj, idx) => {
              return (<ViewTableRow key={idx} item={menuArray[obj.menu_itemId - 1]} />);
            })}
          </div>
          )
        : (
          <div />
          )}
    </div>
  );
}

export default ViewTable;
