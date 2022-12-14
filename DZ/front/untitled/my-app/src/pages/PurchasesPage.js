import {GetPurchase} from "../contexts/models/provider";
import '../static/GetAllModels.css'
import React from "react";

function PurchasesPage(){

    return (
        <div>
        <a href={`../`}>Начало/</a>
        <a href = {'/models/purchases'}>Заказы/</a>
        <br />
        {GetPurchase(localStorage.getItem('user_id')).map(purchase =>
        <div key = {purchase.id} className="manga_block">
            <div> Заказ: {purchase.id} </div>
            <div>{purchase.status === 1 ?
                <div> В ожидании </div> :
                <div></div>
            }</div>
        </div>)}
        </div>
    );
}
export default PurchasesPage;