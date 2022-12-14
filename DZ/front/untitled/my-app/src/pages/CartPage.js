import React from "react";
import {Link} from "react-router-dom";
import {GetCart, GetModels} from "../contexts/models/provider";


function Cart(){
    const models = GetModels()
    const cart = GetCart(localStorage.getItem('user_id'))

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
            })

        setTimeout(() => {
            cart.map(cart => {
                const ob = {
                    id_purchase: order,
                    id_model: cart.id_model,
                    quantity: cart.quantity,
                }
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
                del(cart.id)
            })
        }, 50);
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
                    <Link className="manga_link" to={`/models/getbyid/${models[cart.id_model - models[0].id].id}`}>
                        {models[cart.id_model - models[0].id].name} {models[cart.id_model - models[0].id].price}  ₽
                    </Link>
                    <br/>
                    <br/>
                    <input id="buy_button" className="buy_button" type="submit" value="Удалить" onClick={()=>{del(cart.id)}}/>

                </div>)}
            <button onClick={()=>{buy()}}>Купить</button>
        </div>
    );
}
export default Cart;