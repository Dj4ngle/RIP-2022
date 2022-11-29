import React, {useEffect, useReducer} from 'react';
import {useParams} from "react-router-dom";
import '../static/GetAllModels.css';
import {GetModel} from "../contexts/models/provider";

function GetModelById() {
    const params = useParams();
    const modelId = params.id
    const models = GetModel(modelId)

    const buy=(quantity, id_user, id_model)=> {
        const ob = {
            quantity: quantity,
            id_user: id_user,
            id_model: id_model
        }
        fetch("http://127.0.0.1:8000/cart/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
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
                <input id="buy_button" className="buy_button" type="submit" value="В корзину" onClick={()=>{buy(1, 1, modelId)}}/>
            </ul>

        </div>
    );
}

export default GetModelById;
