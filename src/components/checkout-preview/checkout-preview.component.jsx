import "./checkout-previex.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useSelector } from "react-redux";

const CheckoutPreview = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const total = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.quantity)      
    }, 0)    

    return (
        <div className="checkout-preview-container">
            <div className="header-checkout-preview">
                <span>Name</span>
                <span>price</span>
                <span>quantity</span>
                <span>Remove</span>
            </div>
            { cartItems.map(product => {                
                return <CheckoutItem key={product.id} product={product}/>

            })}
            <span>Total: {total}</span>
        </div>
    )
}

export default CheckoutPreview;