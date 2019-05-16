import React, {Component} from 'react';
import '../css/Nav.css';
import AuthHelperService from '../service/AuthHelperService';


class Nav extends Component {
  Auth = new AuthHelperService();

  performLogout = () => {
    this.Auth.logout();
  }

    render() {
        return (
            <div className="bottomnav">
                <ul className="bottomnav_list">
                    <a href="/dashboard">
                        <li className="bottomnav_item">
                            <i className="far fa-plus-square"></i>
                            <p>Add</p> 

                        </li>
                    </a>
                    <a href="/view">
                        <li className="bottomnav_item">
                            <i id="over_write"className="fas fa-chart-line"></i>

                            <p>Progress</p>
                        </li>
                    </a>
                    <a href="/buddy">
                        <li className="bottomnav_item">
                            <i className="fas fa-map-marked-alt"></i>

                            <p>Buddies</p>
                        </li>
                    </a>
                    <a href="" onClick={()=> this.performLogout()}>
                        <li className="bottomnav_item">
                            <i className="fas fa-sign-out-alt"></i>
                            <p>Log Out</p>
                        </li>
                    </a>
                </ul>
            </div>
        )
    }
}

export default Nav;