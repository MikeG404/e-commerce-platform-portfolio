import { Fragment } from "react";
import { Link, Outlet } from "react-router";
import { FaShop } from "react-icons/fa6";


const Navigation = () => {

    return (
        <Fragment>
            <div>
                <Link to="/">
                    <FaShop size={50} color="black"/>
                </Link>
                <div>
                    <ul>
                        <Link to='/shop'>Shop</Link>
                    </ul>
                    <button>Sign in</button>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;