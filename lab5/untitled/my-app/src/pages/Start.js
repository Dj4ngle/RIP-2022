import React from "react";
import {Link} from "react-router-dom";

function Start(){
    return(
        <div>
            <a href={`./`}>Начало</a>
            <li>
                <Link to="/startpage">StartPage</Link>
            </li>
            <li>
                <a href="/commands">Список команд</a>
            </li>
        </div>
    )
}
export default Start