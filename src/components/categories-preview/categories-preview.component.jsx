import { Fragment } from "react";
import CategoryCard from "../category-card/category-card.component";

const CardCategoriesPreview = ({categories}) => {

    return (
        <Fragment>
            {categories.map((category) => {
                return <CategoryCard key={category.id} category={category}/>
            })}
        </Fragment>
    )
}

export default CardCategoriesPreview;