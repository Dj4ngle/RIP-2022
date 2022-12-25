import {GetBuys} from "../contexts/models/provider";
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import "../static/MainPage.css"


function SinglePage(){
    const [comment, setComment] = useState('');
    const params = useParams();
    const buyId = params.id
    const buys = GetBuys()
    let id_user, sell_date
    for (const [key, value] of Object.entries(buys)) {
        if (value.id_purchase != buyId){
             delete buys[key];
        }
        else{
            id_user = value.id_user
            sell_date = value.sell_date
        }
    }

    function accept_order() {
            const ob = {
                id: buyId,
                id_user: id_user,
                sell_date: sell_date,
                status: 3,
                comment: comment
            }
        fetch(`http://127.0.0.1:8000/sells/${buyId}/`, {
            method: "put",
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            withCredentials: true,
            body: JSON.stringify(ob),
        })
            .catch(function (reason) {
                alert('Неправильный!')
            })
    }

    function reject_order() {
        const ob = {
            id: buyId,
            id_user: id_user,
            sell_date: sell_date,
            status: 2,
            comment: comment
        }
        fetch(`http://127.0.0.1:8000/sells/${buyId}/`, {
            method: "put",
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            withCredentials: true,
            body: JSON.stringify(ob),
        })
            .catch(function (reason) {
                alert('Неправильный!')
            })
    }

    return(
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/managers'}>Заказы/</a>
            <a href = {`/models/manager/${buyId}`}>Заказ №{buyId}</a>
            <br />
            <div>
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
                        <div>Коментарий: {buy.comment}</div>
                    </div>
                </div>
            ))}
            </div>
            <div className="form-block2">
                <button
                    className="action-block34"
                    onClick={() => accept_order()}
                >
                    Принять
                </button>
                <button
                    className="action-block34"
                    onClick={() => reject_order()}
                >
                    Отклонить
                </button>
                <div className="mb-2">
                    <label
                        htmlFor="comment"
                        className="text-block33"
                    >
                        Комментарий
                    </label>
                    <textarea
                        type="comment"
                        onChange={(event) => setComment(event.target.value)}
                        value={comment}
                        className="input-block34"
                    />
                </div>
            </div>
        </div>
    );

}

export default SinglePage;