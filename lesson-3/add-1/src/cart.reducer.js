import { ADD_PRODUCT, DEL_PRODUCT } from './cart.action';

initialState = {
  productList: '',
};

export default cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...productList].concat(action.payload),
      };
    case DEL_PRODUCT:
      return {
        ...state,
        productList: [...productList].filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
