// reducers/index.js
const initialState = {
  products: [
    { id: 1, title: 'Product 1', price: 10, quantity: 0 },
    { id: 2, title: 'Product 2', price: 20, quantity: 0 },
    { id: 3, title: 'Product 3', price: 30, quantity: 0 },
    { id: 4, title: 'Product 4', price: 15, quantity: 0 },
    { id: 5, title: 'Product 5', price: 25, quantity: 0 },
    { id: 6, title: 'Product 6', price: 35, quantity: 0 },
  ],
  isCheckoutOpen: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product
        )
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload ? { ...product, quantity: Math.max(0, product.quantity - 1) } : product
        )
      };
    case 'CLOSE_CHECKOUT':
      return {
        ...state,
        isCheckoutOpen: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
