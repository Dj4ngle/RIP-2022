import React from "react"
import '../static/SearchPage.css'

function SearchPage(){
    // const searchForm = document.getElementById('search-form');
    // const searchInput = document.getElementById('search-input');
    // const resultBox = document.getElementById('result-box');
    // const setListener = (element, type, handler) =>{
    //     if(!element){
    //         return;
    //     }
    //     element.addListener(type, handler);
    //     return ()=>{
    //         element.removeListener(type, handler);
    //     }
    // }
    //
    // setListener(searchInput,'keyup', data_from_box=>{
    //     console.log(data_from_box.target.value)
    //     if (resultBox.classList.contains('not-visible')){
    //         resultBox.classList.remove('not-visible')
    //     }
    //     //if (data_from_box.target.value)
    // })


    return(

        <div className="w-100 text-center">
            <p />
            <form id="search-form"  autoComplete="off">
                <input type="text" id="search-input" className="p-1 w-50 search" placeholder="Название модели для поиска"/>
                <button>Find</button>
                <div id="result-box" className="result-card not-visible"></div>
            </form>
        </div>
    )
}

export default SearchPage;