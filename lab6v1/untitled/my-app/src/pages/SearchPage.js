import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ReactSlider from "react-slider";
import "../static/SearchPage.css"

function  RangeType() {
    const [search_input, set_search_input] = useState(''); //значение для поиска, вводимое пользователем
    const [models, setModels] = useState([]); //список моделей, которые отображаются на странице
    const [minPrice, setMinPrice] = useState(0); //значение текущей минимальной цены в фильтре
    const [maxPrice, setMaxPrice] = useState(1000); //значение текущей максимальной цены в фильтре
    // const [minsPrice, setMinsPrice] = useState(0); //значение текущей минимальной цены в фильтре
    // const [maxsPrice, setMaxsPrice] = useState(1000);

    // if (minPrice == 0 || maxPrice == 0){
    //     //запрос макс и мин цены для диапазона значений
    //     const response = fetch(`http://127.0.0.1:8000/minmax/`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMaxPrice(data[0].max);
    //             setMinPrice(data[0].min);
    //             setMinsPrice(data[0].min)
    //             setMaxsPrice(data[0].max)
    //         })
    // }

    //запрос списка моделей с учётом фильтрации
    const getModels = () => {
        const response = fetch(`http://127.0.0.1:8000/models/?name=${search_input}&price_min=${minPrice}&price_max=${maxPrice}`)
            .then(response => response.json())
            .then(data => {
                setModels(data);
            })
    }
    useEffect( () => {
        getModels()
    }, [])


    const filteredModels = models.filter(model => {
        return model.name.toLowerCase().includes(search_input.toLowerCase())
    })

    return (
        <div>
            <form className={"search_form"}>
                <input type={"text"} placeholder={"Поиск"} className={"search_input"}
                       value={search_input}
                       onChange={(event) => set_search_input(event.target.value)}/>
            </form>


            <div className={'container'}>
                <ReactSlider
                    value={[minPrice, maxPrice]}
                    min={0} max={1000}
                    className="slider"
                    trackClassName="tracker"
                    minDistance={50}
                    step={50}
                    withTracks={true}
                    pearling={true}
                    renderThumb={(props) => {
                        return <div {...props} className="thumb"></div>;
                    }}
                    renderTrack={(props) => {
                        return <div {...props} className="track"></div>;
                    }}
                    onChange={([minPrice, maxPrice]) => {
                        setMinPrice(minPrice);
                        setMaxPrice(maxPrice);
                        const response = fetch(`http://127.0.0.1:8000/models/?name=${search_input}&price_min=${minPrice}&price_max=${maxPrice}`)
                            .then(response => response.json())
                            .then(data => {
                                setModels(data);
                            })
                    }}
                />
                <div className={'values-wrapper'}>
                    <p>
                        Min:
                        <span>{minPrice} руб.</span>
                    </p>
                    <p>
                        Max:
                        <span>{maxPrice} руб.</span>
                    </p>
                </div>
            </div>



            <div className={"models_list"}>

                {filteredModels.map(model=>(
                    <div key = {model.id} className="manga_block">
                        <div className="image_wrapper">
                            <Link to={`/models/getbyid/${model.id}`}>
                                <img className="manga_image" src={`${model.image_path}`} />
                            </Link>
                        </div>
                        <Link className="manga_link" to={`/models/getbyid/${model.id}`}>{model.name}</Link>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default RangeType;