import React from 'react';

const CartItem = (props) => {
  
    const{price,title,qty}=props.product;
    const{product,onIncreaseQty,onDecreaseQty,onDelete}=props;
    return (
      <div className="CartItem">
        
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} src={product.img}/> 
          </div>
          <div className="right-block">
            <div style={ { fontSize:25 } }>{title}</div>
            <div style={ { color:'#777' } }>Rs {price}</div>
            <div style={ { color:'#777' } }>Qty: {qty}</div>
            <div className="cart-item-actions">
              {/*buttons*/}
              <img alt="increase" onClick={()=>onIncreaseQty(product)} className="action-icons" src="https://image.flaticon.com/icons/png/128/992/992651.png" />
              <img alt="decrease" onClick={()=>onDecreaseQty(product)}  className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" />
              <img alt="delete" onClick={()=>onDelete(product.id)} className="action-icons" src="https://image.flaticon.com/icons/png/128/3096/3096673.png" />
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default CartItem;

const styles={
  image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'
  }
}