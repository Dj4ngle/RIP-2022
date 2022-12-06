import React, { useState} from "react"
import logo from '../AnyPrint.png'
import "../static/Start.css"


function Navbar() {



    const get_user=()=> {

        fetch(`http://127.0.0.1:8000/users/1`)
            .then(response => response.json())
            .then(data => {
                setUser(data.login)
                return(data.login)
                })
    }

    const [user, setUser] = useState(get_user)

    const autorise = () =>{
        if (localStorage.getItem('theme') == 'light'){
            localStorage.setItem('theme' , 'dark')
            window.location.reload();
        }else{
            get_user(1)
            localStorage.setItem('theme' , 'light')
            window.location.reload();

        }
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
                            <a className={`nav-link buy_button ${localStorage.getItem('theme')}`} href="/models/cart">Корзина</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/info">О нас</a>
                        </li>
                        <li className="nav-item">
                            <input id="buy_button2" className={`buy_button2 ${localStorage.getItem('theme')}`} type="submit" value="Войти" onClick={autorise}/>
                            <input id="buy_button3" className={`buy_button3 ${localStorage.getItem('theme')}`} type="submit" value="Выйти" onClick={autorise}/>
                            <p className={`buy_button3 ${localStorage.getItem('theme')}`}>Пользователь:{user}</p>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;