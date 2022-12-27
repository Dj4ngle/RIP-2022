import {GetPurchases} from "../contexts/models/provider";
import React from "react";
import {Link} from "react-router-dom";
import "../static/MainPage.css"

function MainPage(){

    return(
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/managers/'}>Заказы/</a>
            <a href = {'/models/manageraccept/'}>В работе/</a>
            <br />
            {GetPurchases(3).map(purchase=>(
                <div key = {purchase.id} className="purchase_block">
                    <h1>Заказ №{purchase.id}</h1>
                    <div>Создан: {purchase.sell_date.split('T')[0]}</div>
                    <div className="in_line_status">Статус заказа: В работе</div>
                    <Link className="purchase_link" to={`/models/managera/${purchase.id}`}>К заказу</Link>
                </div>
            ))}
        </div>
    );

}

export default MainPage;