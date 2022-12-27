import React from "react"
import '../static/NotFound.css';

function NotFound(){
    return (
        <div>
            <div className="mars"></div>
            <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404"/>
            <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor"/>
            <p className="title">О нет!!!</p>
            <p className="subtitle">
                Вы либо неправильно вводите URL-адрес, <br/> либо запрашиваете страницу, которой здесь больше нет.
            </p>
            <div align="center">
                <a className="btn-back" href="/">Обратно</a>
            </div>
            <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut"/>
            <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship"/>
        </div>
    )
}

export default NotFound;
