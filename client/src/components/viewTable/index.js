import { Paper, Table, TableBody } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import ViewTableRow from '../viewTableRow';

function ViewTable ({ oneOrder, allMenuItems }) {
  const messagesEndRef = useRef(null);
  const { id, notes, orderItems = [], restTableId, statusId, userId } = oneOrder || {};
  const menuArray = [];
  if (allMenuItems.length) {
    allMenuItems.map(item => menuArray.push(item.title));
  }

  useEffect(() => {
    // scroll to bottom
    // console.log('scrolling');
    scrollToBottom();
  }, [allMenuItems, menuArray]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

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
          <Paper variant='outlined' style={{ height: 200, overflow: 'auto' }}>
            <Table size='small'>
              <TableBody>
                {orderItems.map((obj, idx) => {
                  return (<ViewTableRow key={idx} item={menuArray[obj.menu_itemId - 1]} />);
                })}
                <tr ref={messagesEndRef} />
              </TableBody>
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
