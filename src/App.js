import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';
import "./style.css";

export default class App extends React.Component{
  render(){
    return(
      <div className="App"> 
        <Navbar />
        <Cart />
      </div>
    )
  }
}
