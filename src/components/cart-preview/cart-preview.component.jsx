import './cart-preview.styles.scss';
import { useSelector } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

const CartPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div className="cart-preview-container">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default CartPreview;