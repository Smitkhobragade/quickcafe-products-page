// components/CheckoutPopup.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCheckout } from '../actions';

const CheckoutPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector(state => state.products.filter(product => product.quantity > 0));
  const totalPrice = products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCheckout());
    setIsOpen(false);
  };

  const handleCheckoutClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="bg-gray-800 text-white py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Your Company</p>
          <button 
            onClick={handleCheckoutClick} 
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${products.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={products.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full mb-8">
                <thead>
                  <tr>
                    <th className="text-left px-1">Product</th>
                    <th className=" text-center px-1">Quantity</th>
                    <th className="text-right px-1">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td className='px-1'>{product.title}</td>
                      <td className="text-center px-1">{product.quantity}</td>
                      <td className="text-right px-1">${product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr className="my-4" />
            <div className="flex justify-end">
              <span className="font-bold">Grand Total:</span>
              <span className="ml-2">${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPopup;
