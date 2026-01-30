import "./checkout-previex.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useSelector } from "react-redux";

const CheckoutPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);
    
    return (
        <div className="checkout-preview-container">
            <div className="header-checkout-preview">
                <span>Name</span>
                <span>price</span>
                <span>Remove</span>
            </div>
            { cartItems.map(product => {                
                return <CheckoutItem key={product.id} product={product}/>

            })}
        </div>
    )
}

export default CheckoutPreview;