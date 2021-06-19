import React from 'react';

export default class Navbar extends React.Component{
  render(){
    return(
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon}src="https://img-premium.flaticon.com/png/128/2838/premium/2838895.png?token=exp=1624090546~hmac=5d37499a9221f564c4c0eeca13746eff" alt="Cart icon"/>
          <span style={styles.cartCount}>3</span>
        </div>
      </div>
    );
  }
}

const styles={
  cartIcon:{
    height: 32,
    marginRight: 20
  },
  nav:{
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer:{
    position:'relative'
  },
  cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding: '4px 8px',
    position:'absolute',
    right:0,
    top:-9
  }
}