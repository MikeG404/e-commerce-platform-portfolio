import { Outlet } from "react-router";

const Category = () => {

    return (
        <section className="category-route-container">
            {/*TODO: DISPLAY THE CATEGORIES AND ALL THE ITEMS */}
            <Outlet />
        </section>
    )
}

export default Category;