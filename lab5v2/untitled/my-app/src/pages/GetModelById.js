import React, {useEffect, useReducer} from 'react';
import {useParams} from "react-router-dom";

const initialState = {
    loading: true,
    error: '',
    models: {}

};

const reducer = (state, action) => {
    switch (action.type){
        case  'FETCH_SUCCESS':
            return{
                loading: false,
                error: '',
                models: action.payload
            }
        case  'FETCH_ERROR':
            return{
                loading: false,
                error: 'Something went wrong(',
                models: {}
            }
        default:
            return state
    }
}

function GetModelById() {
    const params = useParams();
    const modelId = params.id

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/models/${modelId}`)
            .then(response => response.json())

            .then(data => {
                dispatch({type: 'FETCH_SUCCESS', payload: data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])


    return (
        <div>
            <a href={`././`}>Начало/</a>
            <a href={'/commands'}>Список команд/</a>
            <a href = {'/models/getall'}>Модели/</a>
            <a href = {`/models/getbyid/${modelId}`}>Модель {modelId}</a>
            <h1>Модель:</h1>
            {state.loading ? 'Loading' :
                <ul>
                <img className="fit-picture" src ={`${ state.models.image_path }`}/>
                <div>Название: {state.models.name}</div>
                <div>Описание: {state.models.description}</div>
                <div>Цена: {state.models.price} ₽</div>
                </ul>}
            {state.error ? state.error : null}
        </div>
    );
}

export default GetModelById;
