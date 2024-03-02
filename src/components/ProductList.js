import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../actions';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 product-card">
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="mb-2">${product.price}</p>
          <div className="flex items-center">
            <button onClick={() => dispatch(decrementQuantity(product.id))} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-l">-</button>
            <span className="px-4">{product.quantity}</span>
            <button onClick={() => dispatch(incrementQuantity(product.id))} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-r">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
