import './navigation.styles.scss';

import { Fragment } from "react";
import { Link, Outlet } from "react-router";
import { useSelector } from 'react-redux';
import { FaShop } from "react-icons/fa6";

import { googleSignInWithPopup, logOut } from '../../utils/firebase/firebase.util';


const Navigation = () => {
    const currentUser = useSelector(state => state.auth.currentUser);

    console.log(currentUser);
    

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
                    { currentUser 
                        ? <button onClick={() => logOut()}>Sign Out</button>
                        : <button onClick={() => googleSignInWithPopup()}>Sign in</button>
                    }
                    </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;