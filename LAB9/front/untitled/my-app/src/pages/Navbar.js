import React from "react"
import logo from '../AnyPrint.png'
import "../static/Start.css"
import {Link} from "react-router-dom";


function Navbar() {

    const unautorise = () =>{

        fetch('/api/logout/')
            .then(res => {
                console.log(res);
                localStorage.removeItem('user_id')
                localStorage.removeItem('user_login')
                localStorage.removeItem('user_status')
                window.location.replace("http://127.0.0.1:3000/login");
            })
            .catch(function (reason) {
                console.log(reason);
            })



    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <Link className="navbar-brand" to={"/"}>
                <img className="logo_main" src={logo} alt="Logo" width="30" height="24"/>
                AnyPrint
            </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Домашняя страница</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/models/getall"}>Модели</Link>
                        </li>
                        <li className="nav-item">
                            {
                                localStorage.getItem('user_status') == "false"  ?
                                    <Link className="nav-link" to={'/models/sent'}>Заказы</Link>
                                :
                                    localStorage.getItem('user_status') == "true"  ?
                                    <Link className="nav-link" to={'/models/managers'}>Заказы</Link>
                                        :
                                        <div></div>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                localStorage.getItem('user_status') == "false"  ?
                                    <a className="nav-link" href="/models/cart">Корзина</a>
                                        :
                                    <div></div>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/info"}>О нас</Link>
                        </li>
                        <li className="nav-item">
                            {
                                localStorage.getItem('user_id') ?
                                    <div>
                                    <input
                                        id="buy_button3"
                                        type="submit" value="Выйти"
                                        onClick={unautorise}
                                    />
                                    <div>Пользователь: {localStorage.getItem('user_login')}</div>
                                    </div>
                                :
                                    <a href="http://127.0.0.1:3000/login">
                                    <input
                                        id="buy_button2"
                                        type="submit" value="Войти"
                                    />
                                </a>


                            }
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;