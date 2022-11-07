import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function GetAllModels() {

    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/models/')
            .then(response => response.json())

            .then(data => {
                setModels(data);

            })
    }, [])


    return (
        <div>
            <a href = {'/'}>Начало/</a>
            <a href = {'/models/getall'}>Модели</a>
            <h1>Список всех моделей:</h1>

            <ul>
                {models.map(model =>
                    <li key = {model.id}>
                        <Link to={`/models/getbyid/${model.id}`}>{model.name}</Link>
                    </li>)}
            </ul>

        </div>
    );
}

export default GetAllModels;
