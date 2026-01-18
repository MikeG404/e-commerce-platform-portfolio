import './navigation.styles.scss';
import { Fragment } from "react";
import { Link, Outlet } from "react-router";
import { FaShop } from "react-icons/fa6";


const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation-container">
                <div className='logo-container'>
                    <Link to="/">
                        <FaShop size="50" color="black"/>
                    </Link>
                </div>
                <div className="links-container">
                    <Link className='link' to='/shop'>SHOP</Link>
                    <button>Sign in</button>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;