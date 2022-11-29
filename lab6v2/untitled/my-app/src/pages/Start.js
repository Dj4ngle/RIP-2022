import React from 'react'
import "../static/Start.css"

function Start(){

    const autorise = () =>{
        if (localStorage.getItem('theme') == 'light'){
            localStorage.setItem('theme' , 'dark')
            window.location.reload();
        }else{
            localStorage.setItem('theme' , 'light')
            window.location.reload();
        }
        console.log(localStorage.getItem('theme'))
    }


    return(
        <div>
            <a href = {`/models/cart/`}>Корзина</a>
            <br />
            <a>Начальная страница</a>
            <br />
            <input id="buy_button" className="buy_button" type="submit" value="Авторизация" onClick={autorise}/>
            <div className={`blocker ${localStorage.getItem('theme')}`}>
                <p className={`app ${localStorage.getItem('theme')}`}>Добро пожаловать, ♂мастер♂!!!</p>
            </div>
        </div>
    )
}
export default Start