import React, {useState} from "react";
import {Link} from "react-router-dom";
import {GetCart, GetModels} from "../contexts/models/provider";
import "../static/GetAllModels.css"

function Cart(){

    const models = GetModels()
    const cart = GetCart(localStorage.getItem('user_id'))
    console.log(cart)
    const buy=()=> {
        let order;
        const se = {
            id_user: localStorage.getItem('user_id'),
            status: 1,
        }
        fetch("http://127.0.0.1:8000/sells/", {
            method: "post",
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            withCredentials: true,
            body: JSON.stringify(se)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                order =res.id
                console.log(order)
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
                console.log(ob)
                fetch("http://127.0.0.1:8000/purchase/", {
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
                //del(cart.id)
            })
        }, 500);
    }

    const del=(cart_id)=> {
        fetch(`http://127.0.0.1:8000/cart/${cart_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                if (res.ok) {
                    console.log("HTTP request successful");
                    //window.location.reload();
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
            <button className="buy_button" onClick={()=>{buy()}}>Купить</button>
        </div>
    );
}
export default Cart;