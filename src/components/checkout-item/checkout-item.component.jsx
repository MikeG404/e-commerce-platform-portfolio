import './checkout-item.styles.scss';
import { removeProductFromCart } from '../../store/cart-slice/cart.slice';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({product}) => {
    const dispatch = useDispatch()
    const {id, name, imageUrl, price } = product;

    return (
        <div className='body-checkout-item'>
            <img className='image' src={imageUrl} alt={name} />
            <span>{price}</span>
            <span>{name}</span>
            <Button onClick={() => dispatch(removeProductFromCart(id))}>X</Button>
        </div>
    )
}

export default CheckoutItem;