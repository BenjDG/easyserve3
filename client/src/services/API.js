import axios from 'axios';

export default {
  login: function (email, password) {
    const obj = {
      email: email,
      password: password
    };
    return axios.post('/api/auth/login', obj);
  },
  logout: function () {
    return axios.get('api/auth/logout');
  },
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
  getAllMenuItems: function () {
    return axios.get('/api/menuitems/allmenu');
  },
  findAllUsers: function () {
    return axios.get('/api/user');
  },
  findUserById: function (id) {
    return axios.get(`/api/user/${id}`);
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
  findAllOrdersCooking: function () {
    return axios.get('/api/order/cooking');
  },
  findOrderById: function (id) {
    return axios.get(`/api/order/${id}`);
  },
  findOrderByIdWithItems: function (id) {
    return axios.get(`/api/order/${id}/items`);
  },
  createNewOrder: function (userId, tableId, statusId, notes) {
    // { userId, tableId, statusId, notes }
    const obj = {
      userId: userId,
      tableId: tableId,
      statusId: statusId,
      notes: notes
    };
    return axios.post('/api/order/create', obj);
  },
  createNewOrderItem: function (orderId, itemId) {
    return axios.post(`/api/order/add/${orderId}/${itemId}`);
  },
  updateOrderInfo: function (orderId, userId, tableId, statusId, notes) {
    // { orderId, userId, tableId, statusId, notes }
    const obj = {
      orderId: orderId,
      userId: userId,
      tableId: tableId,
      statusId: statusId,
      notes: notes
    };
    return axios.put('/api/order/update', obj);
  },
  updateOrderStatus: function (orderId, statusId) {
    // { orderId, statusId }
    const obj = {
      orderId: orderId,
      statusId: statusId
    };
    return axios.patch('/api/order/updateStatus', obj);
  },
  deleteOneOrderItem: function (orderItemRecId) {
    // { orderItemRecId }
    return axios.delete(`/api/order/delete/item/${orderItemRecId}`);
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
