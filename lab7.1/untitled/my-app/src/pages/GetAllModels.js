import {Link} from "react-router-dom";
import {GetModels} from "../contexts/models/provider";
import '../static/GetAllModels.css'
import React from "react";

function GetAllModels(){

    return (
            <div className="manga_row">
                <a href={`../`}>Начало/</a>
                <a href = {'/models/getall'}>Модели/</a>
                    {GetModels().map(model =>
                        <div key = {model.id} className="manga_block">
                            <div className="image_wrapper">
                                <Link to={`/models/getbyid/${model.id}`}>
                                    <img className="manga_image" src={`${model.image_path}`} />
                                </Link>
                            </div>
                            <Link className="manga_link" to={`/models/getbyid/${model.id}`}>
                                {model.name} {model.price} ₽
                            </Link>
                        </div>)}
            </div>
    );
}
export default GetAllModels;

