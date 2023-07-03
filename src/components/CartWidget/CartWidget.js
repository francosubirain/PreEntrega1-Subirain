import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';





const CartWidget = () => {
  return (
    <div className="cart-widget-container">
      <FaShoppingCart className='cart-figura' /> 
      <span className="cart-widget-count">5</span>
    </div>
  )
}

export default CartWidget;