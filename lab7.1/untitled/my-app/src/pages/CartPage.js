import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetCart, GetModels} from "../contexts/models/provider";


function Cart(){
    const models = GetModels()

    const del=(cart_id)=> {
        console.log(cart_id)
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

    const get_user=()=> {
        console.log()
        fetch(`http://127.0.0.1:8000/rest-auth/user/`, {
            headers: {
                "Authorization": `Token ${sessionStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.pk)
                setUser(data);
            })
    }

    const [user, setUser] = useState(
        {
            "pk": 1,
            "username": "",
            "email": "",
            "first_name": "",
            "last_name": ""
        }
    )

    useEffect( () => {
        get_user()
    }, [])

    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/cart'}>Корзина/</a>
            <br/>
            {GetCart(user.pk).map(cart =>
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
            <button>Купить</button>
        </div>
    );
}
export default Cart;