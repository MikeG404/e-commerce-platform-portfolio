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
            <div className='base-infos'>
                <img className='image' src={imageUrl} alt={name} />
                <span>{name}</span>
            </div>
            <span>{price}</span>
            <div>
                <BiMinusCircle onClick={() => dispatch(decreaseProduct(id))}></BiMinusCircle>
                <span>{quantity}</span>
                <BiPlusCircle onClick={() => dispatch(increaseProduct(id))}></BiPlusCircle>
            </div>
            <Button onClick={() => dispatch(removeProductFromCart(id))}>X</Button>
        </div>
    )
}

export default CheckoutItem;