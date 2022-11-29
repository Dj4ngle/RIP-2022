import React, {useState} from "react";
import {Link} from "react-router-dom";
import {GetCart, GetModels} from "../contexts/models/provider";


function Cart(){
    const models = GetModels()

    const del=(id_model)=> {
        console.log(id_model)
        fetch(`http://127.0.0.1:8000/cart/${id_model}`, {
            method: "DELETE",
        })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful");
                    window.location.reload();
                } else {
                    console.log("HTTP request unsuccessful");
                }
            })

    }

    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/cart'}>Корзина/</a>
            <br/>
            {GetCart().map(cart =>
                <div key = {cart.id_model} className="manga_block">
                    <div className="image_wrapper">
                        <Link to={`/models/getbyid/${models[cart.id_model - 1].id}`}>
                            <img className="manga_image" src={`${models[cart.id_model - 1].image_path}`} />
                        </Link>
                    </div>
                    <Link className="manga_link" to={`/models/getbyid/${models[cart.id_model - 1].id}`}>
                        {models[cart.id_model - 1].name} {models[cart.id_model - 1].price}  ₽
                    </Link>
                    <br/>
                    <br/>
                    <input id="buy_button" className="buy_button" type="submit" value="Удалить" onClick={()=>{del(cart.id)}}/>

                </div>)}
        </div>
    );
}
export default Cart;