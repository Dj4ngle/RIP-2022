import React from 'react'
import "../static/Start.css"

function Start(){
    return(
        <div>
            <a>Начальная страница</a>
            <br />
            <div className={`blocker ${localStorage.getItem('theme')}`}>
                <p className={`app ${localStorage.getItem('theme')}`}>Добро пожаловать, user!!!</p>
            </div>
        </div>
    )
}
export default Start