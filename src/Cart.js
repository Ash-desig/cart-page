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
  handleIncreaseQty=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);

    products[index].qty+=1;
    this.setState({
      products
    })
  }
  handleDecreaseQty=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);

    if(products[index].qty==0){
      return;
    }
    products[index].qty-=1;
    this.setState({
      products
    })
  }
  handleDelete=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);

    this.setState({
      products:items
    })
  }
  render(){
    const { products }=this.state;
    return(
      <div className="cart">
        <h1> Shopping Cart</h1>
        { products.map((product)=>{
          return(
            <CartItem 
              product={product} 
              key={product.id} 
              onIncreaseQty={this.handleIncreaseQty} 
              onDecreaseQty={this.handleDecreaseQty} 
              onDelete={this.handleDelete} 
            />
          )
        })}
      </div>
    )
  }
} 