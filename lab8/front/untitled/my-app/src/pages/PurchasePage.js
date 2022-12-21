import {GetBuys} from "../contexts/models/provider";
import React from "react";
import {Link, useParams} from "react-router-dom";



function PurchasePage(){
    const params = useParams();
    const buyId = params.id
    const buys = GetBuys()
    for (const [key, value] of Object.entries(buys)) {
        if (value.id_purchase != buyId){
            delete buys[key];
        }
    }

    return(
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/purchases'}>Заказы/</a>
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
        </div>
    );

}

export default PurchasePage;