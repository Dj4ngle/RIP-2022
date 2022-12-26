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
        <BrowserRouter basename="/" >
            <Route>
                <Route exact path="/">
                    <Navbar />
                    <Start />
                </Route>
                    <Route path="/models/getall">
                        <ModelsProvider>
                            <Navbar />
                            <SearchPage/>
                        </ModelsProvider>
                    </Route>
                    <Route path="/models/getbyid/:id">
                        <ModelsProvider>
                            <Navbar />
                            <GetModelById />
                        </ModelsProvider>
                    </Route>
                    <Route path="/models/cart">
                        <Navbar />
                        <CartPage />
                    </Route>
                    <Route path="/models/purchases">
                        <Navbar />
                        <PurchasesPage />
                    </Route>
                    <Route path="/models/purchase/:id">
                        <Navbar />
                        <PurchasePage />
                    </Route>
                    <Route path="/models/managers/">
                        <Navbar />
                        <MainPage />
                    </Route>
                    <Route path="/models/manager/:id">
                        <Navbar />
                        <SinglePage />
                    </Route>
                    <Route path="/info">
                        <Navbar />
                        <GetInfo />
                    </Route>
                    <Route path="/registration">
                        <Navbar />
                        <RegistrationPage />
                    </Route>
                    <Route path="/login">
                        <Navbar />
                        <LoginPage />
                    </Route>
            </Route>
        </BrowserRouter>
    );
}

export default App;