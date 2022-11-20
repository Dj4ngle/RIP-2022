import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { ModelsContext } from "../contexts/models";
import {GetModels} from "../contexts/models/provider";

function GetAllModels(){

    const [users, dispatch] = useContext(ModelsContext);

    return (
        <div>
            <a href = {'/'}>Начало/</a>
            <a href={'/commands'}>Список команд/</a>
            <a href = {'/models/getall'}>Модели/</a>
            <ul>
                {GetModels().map(model =>
                    <li key = {model.id}>
                        <Link to={`/models/getbyid/${model.id}`}>{model.name}</Link>
                    </li>)}
            </ul>
        </div>
    );
}
export default GetAllModels;

