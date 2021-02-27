import React, { createContext, useReducer, useContext } from 'react';

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
      console.log(action);
      return [
        ...state,
        {
          orderId: '1111',
          itemId: '1111',
          title: 'testTitle',
          price: '3.50'
        }
      ];
    case 'remove':
      console.log(action);
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
}

function OrderProvider ({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  console.log('Order Provider triggered');

  return <Provider value={[state, dispatch]} {...props} />;
}

function useOrderContext () {
  return useContext(OrderContext);
}

export { OrderProvider, useOrderContext };
