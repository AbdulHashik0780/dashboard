import React from 'react';
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {

    const { auth: { isLoginSuccess } } = props;
    const links = isLoginSuccess ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="brand-logo">My Store</div>
                {links}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Navbar);