import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function StartPage() {



    return (
        <div>
            <a href = {'././'}>Начало</a>
            <li>
                <Link to="/startpage">StartPage</Link>
            </li>
           <h1>Начальная страница</h1>
        </div>
    );
}

export default StartPage;