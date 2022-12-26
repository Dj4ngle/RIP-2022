import React, {useState} from "react";
import {Link} from "react-router-dom";
import {GetCart, GetModels} from "../contexts/models/provider";
import "../static/GetAllModels.css"

function Cart(){

    const models = GetModels()
    const cart = GetCart(localStorage.getItem('user_id'))
    const buy=()=> {
        let order;
        const se = {
            status: 1,
            comment: ""
        }
        fetch('/api/sell/add/', {
            method: "post",
            body: JSON.stringify(se)
        })
            .then(res => {
                order = res
            })

        setTimeout(() => {
            cart.map(cart => {
                const ob = {
                    id_purchase: order,
                    id_model: cart.id_model,
                    quantity: cart.quantity,
                    colour: cart.colour,
                    size: cart.size
                }
                fetch('/api/purchase/add/', {
                    method: "post",
                    body: JSON.stringify(ob)
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                    })
                del(cart.id)
            })
        }, 500);
    }

    const del=(cart_id)=> {
        fetch('/api/cart/delete/', {method : "DELETE", body: JSON.stringify(
            {
                "id_cart": cart_id,
            }
            )})
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
            {cart.map(cart =>
                <div key = {cart.id_model} className="manga_block2">
                    <div className="image_wrapper">
                        <Link to={`/models/getbyid/${models[cart.id_model - models[0].id].id}`}>
                            <img className="manga_image" src={`${models[cart.id_model - models[0].id].image_path}`} />
                        </Link>
                    </div>
                    <div className="manga_link" >
                        <div>{models[cart.id_model - models[0].id].name}</div>
                        <div>Цена: {models[cart.id_model - models[0].id].price} ₽</div>
                        <div>Цвет: {cart.colour}</div>
                        <div>Размер: {cart.size} мм</div>
                        <div>Количество: {cart.quantity} шт</div>

                    <input id="buy_button" type="submit" value="Удалить" onClick={()=>{del(cart.id)}}/>
                    </div>
                </div>)}
            <button className="buy_button35" onClick={()=>{buy()}}>Купить</button>
        </div>
    );
}
export default Cart;