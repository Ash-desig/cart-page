import React from 'react';

const Navbar =(props)=>{
  return(
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon}src="https://image.flaticon.com/icons/png/128/1170/1170678.png" alt="Cart icon"/>
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

export default Navbar;

const styles={
  cartIcon:{
    height: 32,
    marginRight: 30
  },
  nav:{
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:-8,
    marginRight:-8,
    marginLeft:-8
  },
  cartIconContainer:{
    position:'relative'
  },
  cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding: '4px 8px',
    position:'absolute',
    right:10,
    top:-10
  }
}