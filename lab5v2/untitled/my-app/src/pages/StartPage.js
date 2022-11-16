import React, { useState } from "react";
import { Context } from "../components/Context.js";
import './StartPage.css'
import CompValue from "../components/CompValue"
import CompAdditor from "../components/CompAdditor"
import CompSubstrator from "../components/CompSubstractor"


function StartPage() {

    const [context, setContext] = useState(0);
    return (
        <div>
            <a href = {'./'}>Начало/</a>
            <a href = {'/startpage'}>StartPage</a>
            <h1>Начальная страница</h1>
            <Context.Provider value={[context, setContext]}>
                <CompValue />
                <CompAdditor />
                <CompSubstrator />
            </Context.Provider>
        </div>
    );
}

export default StartPage;