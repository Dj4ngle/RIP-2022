import {GetPurchase} from "../contexts/models/provider";
import '../static/GetAllModels.css'
import React from "react";
import {Link} from "react-router-dom";

function PurchasesPage(){

    return (
        <div>
        <a href={`../`}>Начало/</a>
        <a href = {'/models/purchases'}>Заказы/</a>
        <br />
        {GetPurchase(localStorage.getItem('user_id')).map(purchase =>
        <div key = {purchase.id} className="manga_block">
            <h1>Заказ №{purchase.id}</h1>
            <div>Создан: {purchase.sell_date.split('T')[0]}</div>
            <div className="in_line_status">Статус заказа: &nbsp;
                {
                    purchase.status == 1 ?
                        <div className="in_line_status">в ожидании</div>
                        :
                            purchase.status == 2 ?
                                <div className="in_line_status">отклонён</div>
                                :
                                purchase.status == 3 ?
                                    <div className="in_line_status">принят</div>
                                    :
                                        <div className="in_line_status">нет информации</div>
                }
            </div>
            <div>{purchase.comment}</div>
            <Link className="purchase_link" to={`/models/purchase/${purchase.id}`}>К заказу</Link>
        </div>)}
        </div>
    );
}
export default PurchasesPage;