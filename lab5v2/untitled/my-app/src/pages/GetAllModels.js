import React, { useContext } from "react";
import { ModelsContext} from "../contexts/models";
import {Link} from "react-router-dom";


function GetAllModels(){

    const models = useContext(ModelsContext);

    return (
        <div>
            <a href = {'/'}>Начало/</a>
            <a href={'/commands'}>Список команд/</a>
            <a href = {'/models/getall'}>Модели/</a>
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

