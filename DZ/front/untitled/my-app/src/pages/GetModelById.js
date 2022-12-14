import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../static/GetAllModels.css';
import {GetModel} from "../contexts/models/provider";

function GetModelById() {
    const params = useParams();
    console.log(params)
    const modelId = params.id
    const models = GetModel(modelId)

    const buy=(quantity, id_user, id_model)=> {
        const ob = {
            quantity: quantity,
            id_user: id_user,
            id_model: id_model
        }
        console.log(ob)
        fetch("http://127.0.0.1:8000/cart/",{
            method: "post",
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            withCredentials: true,
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    const get_user=()=> {
        console.log()
        fetch(`http://127.0.0.1:8000/rest-auth/user/`, {
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.pk)
                setUser(data);
            })
    }

    const [user, setUser] = useState(
        {
            "pk": 1,
            "username": "",
            "email": "",
            "first_name": "",
            "last_name": ""
        }
    )

    useEffect( () => {
        get_user()
    }, [])


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
                    sessionStorage.getItem('token') ?
                        <input id="buy_button" type="submit" value="В корзину" onClick={()=>{buy(1, user.pk, modelId)}}/>
                        :
                        <div></div>
                }
            </ul>

        </div>
    );
}

export default GetModelById;
