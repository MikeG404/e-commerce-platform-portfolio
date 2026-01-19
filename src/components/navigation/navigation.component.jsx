import './navigation.styles.scss';

import { Fragment } from "react";
import { Link, Outlet } from "react-router";
import { useSelector } from 'react-redux';
import { FaShop } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

import { googleSignInWithPopup, logOut } from '../../utils/firebase/firebase.util';


const Navigation = () => {
    const currentUser = useSelector(state => state.auth.currentUser);    

    return (
        <Fragment>
            <div className="navigation-container">
                <div className='logo-container'>
                    <Link to="/">
                        <FaShop size="30" color="black"/>
                    </Link>
                </div>
                <div className='right-navigation-container'>
                    <div className="links-container">
                        <Link className='link' to='/shop'>SHOP</Link>
                        { currentUser 
                            ? <span onClick={() => logOut()}>SIGN OUT</span>
                            : <span onClick={() => googleSignInWithPopup()}>SIGN IN</span>
                        }
                    </div>
                    <div className='cart-container'>
                        <FiShoppingCart size={20} color="black" />
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;