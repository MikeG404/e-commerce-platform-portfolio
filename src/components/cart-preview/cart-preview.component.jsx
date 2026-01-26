import './cart-preview.styles.scss';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenCart } from '../../store/cart-slice/cart.slice';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router';

const CartPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckoutRoute = () => {
        dispatch(toggleOpenCart())
        navigate("/checkout")
    };

    return (
        <div className="cart-preview-container">
            <h2 className='title'>Shopping Cart</h2>
            { cartItems.length !== 0 ?
                <Fragment>
                    <ul>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                    <Button onClick={handleCheckoutRoute}>Checkout</Button>
                </Fragment>
                : 
                <span>No items in cart</span>
            }
        </div>
    )
}

export default CartPreview;