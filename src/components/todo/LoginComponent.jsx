import React, { Component } from 'react';
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Andrey',
            password: '',
            hasLoginFailed: false,
            hasLoginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
    }


    render() {
        return(
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                    <ShowCredentials hasLoginFailed={this.state.hasLoginFailed} hasLoginSuccess={this.state.hasLoginSuccess} />
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    loginClicked() {
        if (this.state.username === 'Andrey' && this.state.password === '123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                hasLoginSuccess: false,
                hasLoginFailed: true
            })
        }
    }
}
function ShowCredentials(props) {
    if (props.hasLoginFailed) {
        return <div className="alert alert-warning">Invalid Credentials</div>
    } else if (props.hasLoginSuccess) {
        return <div>Login Successful</div>
    } else {
        return null;
    }
}
export default LoginComponent