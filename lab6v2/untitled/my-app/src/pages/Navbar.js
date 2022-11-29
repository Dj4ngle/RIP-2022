import React from "react"
import logo from '../AnyPrint.png'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <a className="navbar-brand" href="/">
                <img className="logo_main" src={logo} alt="Logo" width="30" height="24"/>
                AnyPrint
            </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Домашняя страница</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/models/getall">Модели</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/models/cart">Корзина</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/info">О нас</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;