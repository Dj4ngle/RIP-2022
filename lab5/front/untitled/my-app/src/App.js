import {BrowserRouter, Route, Link, Routes, Switch} from "react-router-dom";
import StartPage from "./pages/StartPage";
import GetModelById from "./pages/GetModelById";
import ShowCommands from "./pages/ShowCommands";
import Start from "./pages/Start";
import React from "react";
import GetAllModels from "./pages/GetAllModels";
import './App.css'


function App() {

    return (
        <BrowserRouter basename="/" >
            <Switch>
                <Route exact path="/">
                   <Start></Start>
                </Route>
                <Route exact path="/startpage">
                    <StartPage></StartPage>
                </Route>
                <Route path="/commands">
                    <ShowCommands></ShowCommands>
                </Route>
                <Route path="/models/getall">
                    <GetAllModels></GetAllModels>
                </Route>
                <Route path="/models/getbyid/:id">
                    <GetModelById></GetModelById>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
