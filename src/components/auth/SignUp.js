import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import * as authActions from '../../actions/auth'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = ({ target: { id, value } }) => {
        this.setState({ [id]: value })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state
        if (email && password)
            await this.props.signUp({ ...this.state })
    };

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        const errorMessage = this.props.auth && this.props.auth.signupError;

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {errorMessage ? <p>{errorMessage}</p> : null}
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

const mapSTateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapSTateToProps, { ...authActions })(SignUp);