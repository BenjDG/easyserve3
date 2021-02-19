import axios from 'axios';

export default {
  getEmployees: function () {
    return axios.get('/api/emp');
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
  }
};
