import {GetPurchase} from "../contexts/models/provider";
import '../static/GetAllModels.css'
import React from "react";
import {Link} from "react-router-dom";

function CompletedPurchases(){

    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/purchases'}>Заказы/</a>
            <a href = {'/models/completed'}>Завершённые/</a>
            <br />
            {GetPurchase(localStorage.getItem('user_id')).map(purchase =>
                <div key = {purchase.id} className="manga_block">
                        {
                            purchase.status == 4 ?
                                <div>
                                    <h1>Заказ №{purchase.id}</h1>
                                    <div>Создан: {purchase.sell_date.split('.')[0].replace('T', ' ')}</div>
                                    <div>Изменён: {purchase.change_date.split('.')[0].replace('T', ' ')}</div>
                                    <div className="in_line_status">Статус заказа: &nbsp;
                                    <div className="in_line_status">завершён</div>
                                    </div>
                                    <div>{purchase.comment}</div>
                                    <Link className="purchase_link" to={`/models/purchase/${purchase.id}`}>К заказу</Link>
                                </div>
                                :
                                <div className="hidden"/>
                        }
                </div>)}
        </div>
    );
}
export default CompletedPurchases;