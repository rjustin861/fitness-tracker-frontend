import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';
import WithAuth from '../service/WithAuth';

import Header from './Header';
import Nav from './Nav';
import '../css/Dashboard.css';




class Buddy extends Component {
    render() {
        return (
          <div>
            <Header isLoggedIn={true} />
            <div className="container">
            <h1>Hello buddies</h1>
            </div>
            <Nav />
            
          </div>
        );
    }
}

export default WithAuth(Buddy);