import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../static/GetAllModels.css';
import {GetModel} from "../contexts/models/provider";
import {useHistory} from "react-router";

function GetModelById() {
    const history = useHistory()
    const [count, setCount] = useState(1)
    const [colour, setColour] = useState('серый')
    const [size, setSize] = useState(28)

    const [active, setActive] = useState(false)
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const params = useParams();
    const modelId = params.id
    const models = GetModel(modelId)

    const buy=(quantity, id_user, id_model)=> {
        const ob = {
            quantity: quantity,
            colour: colour,
            size: size,
            id_model: id_model
        }
        fetch('/api/cart/add/',{
            method: "post",
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                history.push('/models/getall')
            })
            .catch(function (reason) {
                console.log(reason)
            })
    }


    const HandleClick = () => {
        fetch('/api/model/update/',{
            method : "PUT",
            body: JSON.stringify({
                id: modelId,
                name: name,
                description: description,
                price: price
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                window.location.reload()
            });
    };


    return (
        <div>
            <a href={`././`}>Начало/</a>
            <a href = {'/models/getall'}>Модели/</a>
            <a href = {`/models/getbyid/${modelId}`}>Модель {modelId}</a>
            <h1>Модель:</h1>
            <ul>
                <img className="fit-picture" src ={`${ models.image_path }`}/>
                <div>Название: {models.name}</div>
                <div>Описание: {models.description}</div>
                <div>Цена: {models.price} ₽</div>
                {
                    localStorage.getItem('user_status') == "false"  ?
                        <div >
                            <button className="buttons" onClick={() => setCount(count + 1)}>+</button>
                            <button className="buttons" onClick={() => {
                                if (count > 0) setCount(count - 1)
                                }
                            }
                            >-</button>
                            <div >Количество: {count}</div>
                            <label htmlFor="colour" className="text-block33">Цвет:</label>
                            <input
                                type="colour"
                                onChange={(event) => setColour(event.target.value)}
                                value={colour}
                                className="input-block33"
                            />

                            <label htmlFor="size" className="text-block33">Размер(мм):</label>
                            <input
                                type="size"
                                onChange={(event) => setSize(event.target.value)}
                                value={size}
                                className="input-block33"
                            />
                            <input id="buy_button" type="submit" value="В корзину" onClick={()=>{buy(count, localStorage.getItem('user_id'), modelId)}}/>
                        </div>
                        :
                        localStorage.getItem('user_status') == "true"  ?
                        <div>
                            <button onClick={() => {
                                setActive(true)
                                setName(models.name)
                                setDescription(models.description)
                                setPrice(models.price)
                            }}>Изменить</button>
                            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                                <div className="modal__content" onClick={e => e.stopPropagation()}>
                                    <div className="mb-2">
                                        <label htmlFor="colour" className="text-block33">Имя</label>
                                        <input
                                            type="colour"
                                            onChange={(event) => setName(event.target.value)}
                                            value={name}
                                            className="input-block33"
                                        />
                                        <label htmlFor="size" className="text-block33">Описание</label>
                                        <input
                                            type="size"
                                            onChange={(event) => setDescription(event.target.value)}
                                            value={description}
                                            className="input-block33"
                                        />
                                        <label htmlFor="size" className="text-block33">Цена</label>
                                        <input
                                            type="size"
                                            onChange={(event) => setPrice(event.target.value)}
                                            value={price}
                                            className="input-block33"
                                        />
                                        <button onClick={HandleClick}>Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            :
                            <div/>
                }
            </ul>

        </div>
    );
}

export default GetModelById;
