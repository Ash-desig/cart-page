import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';
import "./style.css";
import * as firebase from 'firebase';


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[]
    }
  }
  ComponentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data())
        });
        const products=snapshot.docs.map((doc)=>{
          return doc.data()
        })
        this.setState({
          products
        })
      })
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
