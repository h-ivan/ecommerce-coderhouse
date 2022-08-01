import './Navbar.scss';

import {ReactComponent as LoginIcon} from '../../assets/img/login-icon.svg';
import CartWidget from "../CartWidget/CartWidget.jsx";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="header container">
            <a href="#" className="nav-link">
                new products
            </a>
            <a href="#" className="nav-link">
                trending collections
            </a>
            <Link className="brand-name" to={'/'}>
                <h1 >
                    black & white
                </h1>
            </Link>
            <a href="#" className="nav-link">
                spring essentials
            </a>
            <a href="#" className="nav-link">
                summer sale
            </a>
            <div className="flex items-center">
                <a href="#" className="cart-icon-link">
                    <LoginIcon className="menu-icon"/>
                </a>
                <CartWidget/>
            </div>
        </header>
    );
}

export default Navbar;