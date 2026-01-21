import './cart-preview.styles.scss';
import { useSelector } from 'react-redux';

const CartPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div className="cart-preview-container">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.quantity}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartPreview;