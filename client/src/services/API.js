import axios from 'axios';

export default {
  getHotdogs: function () {
    return axios.get('/api/menuitems/hotdogs');
  },
  getDrinks: function () {
    return axios.get('/api/menuitems/drinks');
  },
  getSides: function () {
    return axios.get('/api/menuitems/sides');
  },
  getIcecreams: function () {
    return axios.get('/api/menuitems/icecreams');
  },
  findAllUsers: function () {
    return axios.get('/api/user');
  },
  findUserById: function () {
    return axios.get('/api/user/:id');
  },
  createNewUser: function () {
    // { email, password, fName, lName, role }
    return axios.post('/api/user/create');
  },
  updateUser: function () {
    // { userId, fName, lName, pin }
    return axios.put('/api/user/update');
  },
  deleteUser: function () {
    // { userId }
    return axios.delete('/api/user/delete');
  },
  findAllOrders: function () {
    return axios.get('/api/order/all');
  },
  findOrderById: function () {
    return axios.get('/api/order/:id');
  },
  findOrderByIdWithItems: function () {
    return axios.get('/api/order/:id/items');
  },
  createNewOrder: function () {
    // { userId, tableId, statusId, notes }
    return axios.post('/api/order/create');
  },
  createNewOrderItem: function () {
    return axios.post('/api/order/add/:orderId/:itemId');
  },
  updateOrderInfo: function () {
    // { orderId, userId, tableId, statusId, notes }
    return axios.put('/api/order/update');
  },
  deleteOneOrderItem: function () {
    // { orderItemRecId }
    return axios.delete('/api/order/delete/item/:orderItemRecId');
  },
  deleteOneOrder: function () {
    // { orderId }
    return axios.delete('/api/order/delete');
  },
  getTableOptions: function () {
    return axios.get('api/resttable/');
  },
  getStatusOptions: function () {
    return axios.get('api/status/');
  }
};
