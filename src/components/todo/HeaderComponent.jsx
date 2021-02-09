import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';

class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://vk.com/ex6sted" className="navbar-brand">Andrey Ageev</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to="/welcome/Andrey" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.userLogout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(HeaderComponent)