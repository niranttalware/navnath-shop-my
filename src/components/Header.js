import React, { useContext, useEffect } from 'react'
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.jpeg"
import cartimg from "../assets/shopping-cart-icon.jpg"
import cartContext from '../context/CartContext'

const Header = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartc = useContext(cartContext);

    useEffect(() => {
        cartc.update();
    }, [cartc])




    const logout = () => {
        localStorage.clear();
        alert("LogOut Successfully")
    }



    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to={"/admin"}><h1>NavNath-Traders</h1></Link>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder='Find your product' />
                    <i class="fa fa-search" ></i>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#products">Products</a></li>
                    <li><a href="/">Services</a></li>
                    <li><Link to={"/about"} >About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    {
                        auth ? <li><a href="" onClick={logout}>LogOut</a></li> :
                            <li><Link to={"/login"}>Log In</Link></li>
                    }
                    <li></li>
                    <li><Link to={"/cart"}>
                        <img src={cartimg} style={{ width: "30px" }} alt="" />
                        {cart ?
                            <span className='cart-item'>{cartc.cart.length}</span>
                            :
                            ""
                        }</Link></li>
                </ul>

            </nav>
            <div className="empty"></div>
        </div>
    )
}

export default Header