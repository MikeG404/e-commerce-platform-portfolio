import './checkout-item.styles.scss';
import { removeProductFromCart, increaseProduct, decreaseProduct } from '../../store/cart-slice/cart.slice';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';

const CheckoutItem = ({product}) => {
    const dispatch = useDispatch()
    const {id, name, quantity, imageUrl, price } = product;

    return (
        <div className='body-checkout-item'>
            <img className='image' src={imageUrl} alt={name} />
            <span>{price}</span>
            <div>
                <BiMinusCircle onClick={() => dispatch(decreaseProduct(id))}></BiMinusCircle>
                <span>{quantity}</span>
                <BiPlusCircle onClick={() => dispatch(increaseProduct(id))}></BiPlusCircle>
            </div>
            <span>{name}</span>
            <Button onClick={() => dispatch(removeProductFromCart(id))}>X</Button>
        </div>
    )
}

export default CheckoutItem;