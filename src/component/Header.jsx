import React, {Component} from 'react';
import '../css/Header.css';
import logo from '../img/icon.png';

class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div className="logo">
                        <a href="/dashboard"><img src={logo}/></a>
                    </div>
                    
                        <div>
                            <ul className="nav">
                            {
                                this.props.isLoggedIn !== true ? 
                                    <>
                                    <li><a href="#" onClick={() => this.props.showModal('Register')}>
                                    Register</a></li>
                                    <li><a href="#" onClick={() => this.props.showModal('Login')}>Login</a></li>
                                    </>
                                :
                                <></>
                            }
                            </ul>
                        </div>
                </div>
        )
    }
}

export default Header;