import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      price:999,
      title: 'Phone',
      qty: 1,
      img: ''
    }
  }

  handleIncrease=()=>{
    this.setState={}
  }
  render(){
    const{price,title,qty}=this.state
    return (
      <div className="App">
        <h1>Shopping Cart</h1>
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image}/> 
          </div>
          <div className="right-block">
            <div style={ { fontSize:25 } }>{title}</div>
            <div style={ { color:'#777' } }>Rs {price}</div>
            <div style={ { color:'#777' } }>Qty: {qty}</div>
            <div className="cart-item-actions">
              {/*buttons*/}
              <img alt="increase" onClick={this.handleIncrease} className="action-icons" src="https://image.flaticon.com/icons/png/128/992/992651.png" />
              <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" />
              <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/128/3096/3096673.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles={
  image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'
  }
}
