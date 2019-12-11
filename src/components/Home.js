import React from "react";
import { Route,BrowserRouter,Switch } from "react-router-dom";
import Navigation from './Navigation'
import Stores from "./Stores";
import App from "../App"



const Home = () => {
    return(
        <BrowserRouter>
        <div>
        <Navigation/>
        <Switch>
        <Route  exact path="/" component={Stores}/>
        <Route  exact path="/wizard" component={App}/>
        </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Home;