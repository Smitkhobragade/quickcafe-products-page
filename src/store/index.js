// store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialProductsState from './initialProductsState';

const initialState = {
  products: initialProductsState,
  // Add other initial states if needed
};

const store = createStore(rootReducer, initialState);

export default store;
