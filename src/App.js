import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';
import "./style.css";

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[
        {
          price:99,
          title: 'Watch',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id:1
        },
        {
          price:999,
          title: 'Mobile Phone',
          qty: 5,
          img:'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id:2
        },
        {
          price:9990,
          title: 'Laptop',
          qty: 7,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
  getCartCount=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const{products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      if(product.qty>0){
        cartTotal=cartTotal+product.qty*product.price
      }
      return'';
    })
    return cartTotal
  }
  render(){
    const{ products}=this.state;
    return(
      <div className="App"> 
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQty={this.handleIncreaseQty} 
          onDecreaseQty={this.handleDecreaseQty} 
          onDelete={this.handleDelete} 
        />
        <div style={{fontSize:20,padding:10}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    )
  }
}
