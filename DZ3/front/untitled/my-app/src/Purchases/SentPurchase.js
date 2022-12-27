import {GetBuys} from "../contexts/models/provider";
import React from "react";
import {Link, useParams} from "react-router-dom";
import {useHistory} from "react-router";



function PurchasePage(){
    const history = useHistory()
    const params = useParams();
    const buyId = params.id
    const buys = GetBuys()
    for (const [key, value] of Object.entries(buys)) {
        if (value.id_purchase != buyId){
            delete buys[key];
        }
    }

    const del=()=> {
        fetch('/api/sell/update/',{
            method : "PUT",
            body: JSON.stringify({
                id: buyId,
                status: 0,
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                history.push('/models/purchases')
            });
    }

    return(
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/purchases'}>Заказы/</a>
            <a href = {'/models/sent'}>Отправленные/</a>
            <a href = {`/models/purchase/${buyId}`}>Заказ №{buyId}</a>
            <br />
            {buys.map(buy=>(
                <div key = {buy.id} className="manga_block3">
                    <div className="image_wrapper">
                        <Link to={`/models/getbyid/${buy.model}`}>
                            <img className="manga_image" src={`http://127.0.0.1:8000/media/${buy.image_path}`} />
                        </Link>
                    </div>
                    <div className="manga_link" >
                        <div>{buy.name}</div>
                        <div>Цена: {buy.price} ₽</div>
                        <div>Цвет: {buy.colour}</div>
                        <div>Размер: {buy.size} мм</div>
                        <div>Количество: {buy.quantity} шт</div>
                    </div>
                </div>
            ))}
            <button className="buy_button35" onClick={()=>{del()}}>Удалить</button>
        </div>
    );

}

export default PurchasePage;