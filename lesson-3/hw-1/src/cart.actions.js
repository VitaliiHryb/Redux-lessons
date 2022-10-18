// опишите action creators, которые будут:
// 1. добавлять продукт в корзину (пример использования addProduct({ id: 76, name: 'milk' })). id обязателен
// 2. удалять продукт из корзины (пример использования removeProduct(76), где 76 - id продукта)

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
}

export function removeProduct(productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: { productId },
  };
}
