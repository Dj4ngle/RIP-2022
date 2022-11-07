import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";


function GetModelById() {
    const params = useParams();
    const modelId = params.id

    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/models/${modelId}`)
            .then(response => response.json())

            .then(data => {
                setModels(data);

            })
    }, [])


    return (
        <div>
            <a href = {'/'}>Начало/</a>
            <a href = {'/models/getall'}>Модели/</a>
            <a href = {`/models/getbyid/${modelId}`}>Модель {modelId}</a>
            <h1>Модель:</h1>
            <div>Название: {models.name}</div>
            <div>Описание: {models.description}</div>
            <div>Цена: {models.price}</div>
        </div>
    );
}

export default GetModelById;
