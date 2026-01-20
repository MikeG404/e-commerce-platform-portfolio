
const ProductCard = ({product}) => {
    const { name, imageURL } = product;

    return (
        <div className="product-card-container">
            <img src={imageURL} alt={name} />
            <div className="product-card-footer">
                <div className="product-infos">
                    <span className="title">{name}</span>
                    <span className="price">$30</span>
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;