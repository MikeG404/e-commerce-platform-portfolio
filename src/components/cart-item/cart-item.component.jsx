// TODO : Problème d'ajout d'autres catégories test d'ajouter plusieurs valeurs dans le cart

import './cart-item.styles.scss';

const CartItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item;

    return (
        <li className="cart-item-container" key={item.id}>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <div className='item-details'>
                <span>{name}</span>

                <span>{price}</span>
                <span>{quantity}</span>
            </div>
        </li>
    )
}

export default CartItem;