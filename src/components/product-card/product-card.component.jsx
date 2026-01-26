import "./product-card.styles.scss";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart-slice/cart.slice";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
    }

    return (
        <div className="product-card-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product-card-footer">
                <div className="product-infos">
                    <h3 className="title">{name}</h3>
                    <span className="price">${price}</span>
                </div>
                <Button onClick={handleAddProductToCart}>Add To Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard;