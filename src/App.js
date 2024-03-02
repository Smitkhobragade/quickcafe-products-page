
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CheckoutPopup from './components/CheckoutPopup';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow px-5">
        <ProductList />
      </div>
      <CheckoutPopup />
    </div>
  );
}

export default App;
