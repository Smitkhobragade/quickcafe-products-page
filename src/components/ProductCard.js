import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (product.quantity > 0) {
      dispatch(decrementQuantity(product.id));
    }
  };

  return (
    <div className="border bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
      <p className="font-bold text-sm mb-2">{product.title}</p>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <div className="flex items-center">
        <button 
          className="bg-blue-500 text-white px-3 py-1 rounded-l hover:bg-blue-600"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="px-3">{product.quantity}</span>
        <button 
          className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
