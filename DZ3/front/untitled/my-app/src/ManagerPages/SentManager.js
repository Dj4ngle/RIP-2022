import {GetPurchases} from "../contexts/models/provider";
import '../static/GetAllModels.css'
import React from "react";
import {Link} from "react-router-dom";
//Статусы заказа: 0-удалён; 1-в ожидании; 2-отклонён; 3-принят; 4-завершён.
function SentManager(){
    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/managers/'}>Заказы/</a>
            <a href = {'/models/managersent/'}>В ожидании/</a>
            <br />
            {GetPurchases(1).map(purchase=>(
                <div key = {purchase.id} className="purchase_block">
                    <h1>Заказ №{purchase.id}</h1>
                    <div>Создан: {purchase.sell_date.split('T')[0]}</div>
                    <div className="in_line_status">Статус заказа: В ожидании</div>
                    <Link className="purchase_link" to={`/models/manager/${purchase.id}`}>К заказу</Link>
                </div>
            ))}
        </div>
    );
}
export default SentManager;