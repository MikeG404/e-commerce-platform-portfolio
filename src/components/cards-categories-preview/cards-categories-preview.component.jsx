import { Fragment } from "react";
import CardCategory from "../card-category/card-category.component";

const CardCategoriesPreview = ({categories}) => {

    return (
        <Fragment>
            {categories.map((category) => {
                return <CardCategory key={category.id} category={category}/>
            })}
        </Fragment>
    )
}

export default CardCategoriesPreview;