import './cart-widget.css';
import cart from './assets/cart-shopping-solid.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext ( CartContext );

    return ( 
        <Link to={'/cart'} className= 'Cart-Widget' style={ { display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src= {cart} alt="cart-widget" width="15px" />
            { totalQuantity }    
        </Link>
    )
}

export default CartWidget