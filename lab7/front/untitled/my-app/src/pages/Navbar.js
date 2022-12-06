import React, { useState} from "react"
import logo from '../AnyPrint.png'
import "../static/Start.css"


function Navbar() {



    const get_user=()=> {

        fetch(`http://127.0.0.1:8000/users/3`)
            .then(response => response.json())
            .then(data => {
                setUser(data.name)
                return(data.name)
                })
    }

    const [user, setUser] = useState(get_user)

    const unautorise = () =>{
        sessionStorage.removeItem('token')
        window.location.replace("http://127.0.0.1:3000/login");
    }

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
                            {
                            sessionStorage.getItem('token') ?
                                <a className="nav-link" href="/models/cart">Корзина</a>
                                :
                                <div></div>
                            }
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/info">О нас</a>
                        </li>
                        <li className="nav-item">
                            {
                                sessionStorage.getItem('token') ?
                                    <a href="http://127.0.0.1:3000/login">
                                    <input
                                        id="buy_button3"
                                        type="submit" value="Выйти"
                                        onClick={unautorise}
                                    />
                                    </a>
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