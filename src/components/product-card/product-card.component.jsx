import "./product-card.styles.scss";

const ProductCard = ({product}) => {
    const { name, imageUrl, price } = product;

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
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;