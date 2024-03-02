// actions/index.js
export const incrementQuantity = (productId) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});

export const closeCheckout = () => ({
  type: 'CLOSE_CHECKOUT',
});
