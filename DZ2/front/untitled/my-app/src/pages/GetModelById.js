import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../static/GetAllModels.css';
import {GetModel} from "../contexts/models/provider";

function GetModelById() {
    const [count, setCount] = useState(1)
    const [colour, setColour] = useState('серый')
    const [size, setSize] = useState(28)

    const params = useParams();
    const modelId = params.id
    const models = GetModel(modelId)

    const buy=(quantity, id_user, id_model)=> {
        const ob = {
            quantity: quantity,
            colour: colour,
            size: size,
            id_model: id_model
        }
        console.log(ob)
        fetch('/api/cart/add/',{
            method: "post",
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(function (reason) {
                console.log(reason)
            })
    }

    return (
        <div>
            <a href={`././`}>Начало/</a>
            <a href = {'/models/getall'}>Модели/</a>
            <a href = {`/models/getbyid/${modelId}`}>Модель {modelId}</a>
            <h1>Модель:</h1>
            <ul>
                <img className="fit-picture" src ={`${ models.image_path }`}/>
                <div>Название: {models.name}</div>
                <div>Описание: {models.description}</div>
                <div>Цена: {models.price} ₽</div>
                {
                    localStorage.getItem('user_status') == "false"  ?
                        <div >
                            <button className="buttons" onClick={() => setCount(count + 1)}>+</button>
                            <button className="buttons" onClick={() => {
                                if (count > 0) setCount(count - 1)
                                }
                            }
                            >-</button>
                            <div >Количество: {count}</div>
                            <label htmlFor="colour" className="text-block33">Цвет:</label>
                            <input
                                type="colour"
                                onChange={(event) => setColour(event.target.value)}
                                value={colour}
                                className="input-block33"
                            />

                            <label htmlFor="size" className="text-block33">Размер(мм):</label>
                            <input
                                type="size"
                                onChange={(event) => setSize(event.target.value)}
                                value={size}
                                className="input-block33"
                            />
                            <input id="buy_button" type="submit" value="В корзину" onClick={()=>{buy(count, localStorage.getItem('user_id'), modelId)}}/>
                        </div>
                        :
                        <div></div>
                }
            </ul>

        </div>
    );
}

export default GetModelById;
