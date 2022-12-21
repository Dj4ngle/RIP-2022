import {BrowserRouter, Route, Switch} from "react-router-dom";
import GetModelById from "./pages/GetModelById";
import NotFound from "./pages/NotFound";
import GetInfo from "./pages/Info";
import React from "react";
import { ModelsProvider } from "./contexts/models";
import Navbar from "./pages/Navbar";
import './static/index.css';
import CartPage from "./pages/CartPage";
import Start from "./pages/Start";
import SearchPage from "./pages/SearchPage";
import RegistrationPage from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LoginPage";
import PurchasesPage from "./pages/PurchasesPage";
import MainPage from "./ManagerPages/MainPage";
import SinglePage from "./ManagerPages/SinglePage";
import PurchasePage from "./pages/PurchasePage";

function App() {
    return (
        <div>
            <BrowserRouter basename="/" >
                    <Navbar />
                <Switch>
                    <Route exact path="/">
                            <Start />
                    </Route>
                    <Route path="/models/getall">
                        <ModelsProvider>
                            <SearchPage/>
                        </ModelsProvider>
                    </Route>
                    <Route path="/models/getbyid/:id">
                        <ModelsProvider>
                            <GetModelById />
                        </ModelsProvider>
                    </Route>
                    <Route path="/models/cart">
                        <CartPage />
                    </Route>
                    <Route path="/models/purchases">
                        <PurchasesPage />
                    </Route>
                    <Route path="/models/purchase/:id">
                        <PurchasePage />
                    </Route>
                    <Route path="/models/managers/">
                        <MainPage />
                    </Route>
                    <Route path="/models/manager/:id">
                        <SinglePage />
                    </Route>
                    <Route path="/info">
                        <GetInfo />
                    </Route>
                    <Route path="/registration">
                        <RegistrationPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
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