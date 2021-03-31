import React, { createContext, useReducer, useContext } from 'react';
import API from './API';

const OrderContext = createContext([{
  orderId: '',
  itemId: '',
  title: '',
  price: ''
}]);
const { Provider } = OrderContext;

function reducer (state, action) {
  switch (action.type) {
    case 'add':
      try {
        API.createNewOrderItem(action.orderId, action.itemId);
      } catch (error) {
        console.error(error);
      }
      return [
        {
          id: action.id,
          orderId: action.orderId,
          itemId: action.itemId,
          title: action.title,
          price: action.price
        }
      ];
    case 'remove':
      try {
        // console.log(action.orderItemRecId);
        API.deleteOneOrderItem(action.orderItemRecId);
      } catch (error) {
        console.error(error);
      }
      return state;
    default:
      return state;
  }
}

function OrderProviderButton ({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);
  return <Provider value={[state, dispatch]} {...props} />;
}

function useOrderButtonContext () {
  return useContext(OrderContext);
}

export { OrderProviderButton, useOrderButtonContext };
