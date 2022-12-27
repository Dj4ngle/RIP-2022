import {GetBuys} from "../contexts/models/provider";
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import "../Modal/Modal.css"
import "../static/ResendPurchasePage.css"
import {useHistory} from "react-router";

function ResendPurchasePage(){
    const history = useHistory()
    const [active, setActive] = useState(false)
    const [nameid, setNameid] = useState()
    const [name, setName] = useState()
    const [colour, setColour] = useState()
    const [size, setSize] = useState()
    const [quantity, setQuantity] = useState()

    const params = useParams();
    const buyId = params.id
    const buys = GetBuys()

    for (const [key, value] of Object.entries(buys)) {
        if (value.id_purchase != buyId){
            delete buys[key];
        }
    }

    const HandleClick = () => {
        fetch('/api/purchase/update/',{
            method : "PUT",
            body: JSON.stringify({
                id: nameid,
                quantity: quantity,
                colour: colour,
                size: size
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                window.location.reload()
            });
    };


    const resend=()=> {
        fetch('/api/sell/update/',{
            method : "PUT",
            body: JSON.stringify({
                id: buyId,
                status: 1,
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                history.push('/models/purchases')
            });
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
                        <button onClick={() => {
                            setActive(true)
                            setNameid(buy.id)
                            setName(buy.name)
                            setColour(buy.colour)
                            setSize(buy.size)
                            setQuantity(buy.quantity)
                        }}>Изменить</button>
                        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                            <div className="modal__content" onClick={e => e.stopPropagation()}>
                                <div className="mb-2">
                                    <label htmlFor="name" className="text-block33">{name}</label>
                                    <label htmlFor="colour" className="text-block33">Цвет</label>
                                    <input
                                        type="colour"
                                        onChange={(event) => setColour(event.target.value)}
                                        value={colour}
                                        className="input-block33"
                                    />
                                    <label htmlFor="size" className="text-block33">Размер</label>
                                    <input
                                        type="size"
                                        onChange={(event) => setSize(event.target.value)}
                                        value={size}
                                        className="input-block33"
                                    />
                                    <div className="text-block33">Количество: {quantity}</div>
                                    <button className="buttons" onClick={() => setQuantity(quantity + 1)}>+</button>
                                    <button className="buttons" onClick={() => {
                                        if (quantity > 0) setQuantity(quantity - 1)
                                    }
                                    }
                                    >-</button>
                                    <br/>
                                    <button onClick={HandleClick}>Сохранить</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
            <div>
                <button className="buy_button35" onClick={()=>{resend()}}>Переотправить</button>
                <button className="buy_button35" onClick={()=>{del()}}>Удалить</button>
            </div>
        </div>
    );

}

export default ResendPurchasePage;