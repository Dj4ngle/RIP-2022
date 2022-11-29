import {BrowserRouter, Route, Switch} from "react-router-dom";
import GetModelById from "./pages/GetModelById";
import NotFound from "./pages/NotFound";
import GetInfo from "./pages/Info";
import React from "react";
import GetAllModels from "./pages/GetAllModels";
import { ModelsProvider } from "./contexts/models";
import Navbar from "./pages/Navbar";
import './static/index.css';
import RangeType from "./pages/SearchPage";

function App() {

    return (
        <div>
            <BrowserRouter basename="/" >
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <RangeType />
                    </Route>
                    <Route path="/models/getall">
                        <ModelsProvider>
                            <GetAllModels />
                        </ModelsProvider>
                    </Route>
                    <Route path="/models/getbyid/:id">
                        <GetModelById />
                    </Route>
                    <Route path="/info">
                        <GetInfo />
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;