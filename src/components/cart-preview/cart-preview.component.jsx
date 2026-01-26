import './cart-preview.styles.scss';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems.length);

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
                    <Button>Checkout</Button>
                </Fragment>
                : 
                <span>No items in cart</span>
            }
        </div>
    )
}

export default CartPreview;