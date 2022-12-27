import {GetBuys} from "../contexts/models/provider";
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import "../static/MainPage.css"
import {useHistory} from "react-router";


function SinglePage(){
    const history = useHistory()
    const [comment, setComment] = useState('');
    const params = useParams();
    const buyId = params.id
    const buys = GetBuys()
    for (const [key, value] of Object.entries(buys)) {
        if (value.id_purchase != buyId){
             delete buys[key];
        }
    }

    function accept_order() {
            const ob = {
                id: buyId,
                status: 4,
                comment: comment
            }
        fetch(`/api/sell/update/comment/`, {
            method: "put",
            body: JSON.stringify(ob),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                history.push('/models/managers/')
            })
            .catch(function (reason) {
                console.log(reason)
            })
    }

    function reject_order() {
        const ob = {
            id: buyId,
            status: 2,
            comment: comment
        }
        fetch(`/api/sell/update/comment/`, {
            method: "put",
            body: JSON.stringify(ob),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                history.push('/models/managers/')
            })
            .catch(function (reason) {
                console.log(reason)
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