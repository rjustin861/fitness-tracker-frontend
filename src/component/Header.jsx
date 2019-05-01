import React, {Component} from 'react';
import '../css/Header.css';
import logo from '../images/logo.png';

class Header extends Component {

    render() {
        return (
                <div className="header">
                    <div className="logo">
                        <a href="index.html"><img src={logo} alt="Logo"/></a>
                    </div>
                    <div className="menu">
                        <ul className="nav">
                        {
                            this.props.isLoggedIn === true ?
                                <><li><a href="#" onClick={() => this.props.logout()}>Logout</a></li></> 
                            : 
                                <><li><a href="#" onClick={() => this.props.show_modal('Register')}>Register</a></li><li><a href="#" onClick={() => this.props.show_modal('Login')}>Login</a></li></>
                        }
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Header;