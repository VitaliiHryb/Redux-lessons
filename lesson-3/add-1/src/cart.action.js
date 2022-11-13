export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const DEL_PRODUCT = 'CART/DEL_PRODUCT';

export const addProduct = cartData => {
  return {
    type: ADD_PRODUCT,
    payload: cartData,
  };
};

export const deleteProduct = ({ cartId }) => {
  return {
    type: DEL_PRODUCT,
    payload: cartId,
  };
};
