import React from 'react';
import CartItem from './CartItem';

export default class CartItem extends React.Component{
  constructor(){
    super();
    this.state={
      products:[
        {
          price:99,
          title: 'Watch',
          qty: 10,
          img: '',
          id:1
        },
        {
          price:999,
          title: 'Mobile Phone',
          qty: 5,
          img: '',
          id:2
        },
        {
          price:9990,
          title: 'Laptop',
          qty: 7,
          img: '',
          id:3
        }
      ]
    }
  }
  render(){
    const { products }=this.state;
    return(
      <div classNmae="cart">
        <h1> Shopping Cart</h1>
        { products.map((product)=>{
          return <CartItem product={product} key={product.id}/>
        })}
      </div>
    )
  }
} 