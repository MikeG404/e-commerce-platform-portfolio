import { Fragment } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductCard from "../product-card/product-card.component";

const ProductPreview = () => {
    const params = useParams();
    const { categories } = useSelector(state => state.categories)

    const category = categories.find(category => category.title === params.category);
    
    return (
        <Fragment>
            {category && category.products.map((product) =>
                <ProductCard key={product.id} product={product}/>
            )}
        </Fragment>
    )
}

export default ProductPreview;