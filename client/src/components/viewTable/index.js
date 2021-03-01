import React from 'react';
import ViewTableRow from '../viewTableRow';

function ViewTable ({ oneOrder }) {
  const { id, notes, orderItems = [], restTableId, statusId, userId } = oneOrder;
  return (
    <div>
      <p>Order Id: {id} | User Id: {userId} | Table: {restTableId} | Status Id: {statusId}</p>
      <p>Order Notes: {notes}</p>
      {/* menu_itemId */}
      {orderItems.length
        ? (
          <div>
            {orderItems.map((obj, idx) => {
              return (<ViewTableRow key={idx} item={obj.menu_itemId} />);
            })}
          </div>
          )
        : (
          <div>
            Please Wait
          </div>
          )}

    </div>
  );
}

export default ViewTable;
