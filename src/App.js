import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import AllProducts from "./components/products/AllProducts";
import SuggestedProducts from "./components/products/SuggestedProducts";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import PrivateRoute from './components/privateRoute';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute exact path="/allProducts" component={AllProducts} />
                    <PrivateRoute exact path="/suggestedProducts" component={SuggestedProducts} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
