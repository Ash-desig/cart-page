import React from 'react';
import CartItem from './CartItem';

const Cart=(props)=>{
  
  
    const { products }=props;
    return(
      <div className="cart">
        <h1> Shopping Cart</h1>
        { products.map((product)=>{
          return(
            <CartItem 
              product={product} 
              key={product.id} 
              onIncreaseQty={props.onIncreaseQty} 
              onDecreaseQty={props.onDecreaseQty} 
              onDelete={props.onDelete} 
            />
          )
        })}
      </div>
    )
  
} 
export default Cart;