import {GetPurchase} from "../contexts/models/provider";
import {Link} from "react-router-dom";
import React from "react";

function MainPage(){

    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/managers/'}>Заказы/</a>
            <button className="action-block33">
                <Link to={`/models/managersent/`}>
                    В ожидании
                </Link>
            </button>
            <button className="action-block33">
                <Link to={`/models/manageraccept/`}>
                    В работе
                </Link>
            </button>
        </div>
    );
}
export default MainPage;