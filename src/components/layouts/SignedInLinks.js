import React from 'react';
import { NavLink } from "react-router-dom";
import * as authActions from '../../actions/auth'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/allProducts">All Products</NavLink></li>
            <li><NavLink to="/suggestedProducts">Suggested Products</NavLink></li>
            <li><NavLink to="/" onClick={() => authActions.logout()}>Logout</NavLink></li>
        </ul>
    )
};

export default SignedInLinks;