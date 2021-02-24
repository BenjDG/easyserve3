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
  findAllEmployees: function () {
    return axios.get('/api/emp');
  },
  findEmployeeById: function () {
    return axios.get('/api/emp/:id');
  },
  createNewEmployee: function () {
    return axios.post('/api/emp/create');
  },
  updateEmployee: function () {
    return axios.put('/api/emp/update');
  },
  deleteEmployee: function () {
    return axios.delete('/api/emp/delete');
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
    return axios.post('/api/order/create');
  },
  createNewOrderItem: function () {
    return axios.post('/api/order/add/:orderId/:itemId');
  },
  updateOrderInfo: function () {
    return axios.put('/api/order/update');
  },
  deleteOneOrderItem: function () {
    return axios.delete('/api/order/delete/item/:orderItemRecId');
  },
  deleteOneOrder: function () {
    return axios.delete('/api/order/delete');
  }
};
