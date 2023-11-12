import './cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { CartProducts } from '../cart-products/cart-products';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext ( CartContext )

    if ( totalQuantity === 0 ) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to={'/'} className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map ( product => <CartProducts key= {product.id} {...product}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={ () => clearCart () } className='Button'>Vaciar Carrito</button>
            <Link to={'/checkout'} className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;