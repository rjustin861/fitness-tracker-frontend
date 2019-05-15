import React, {Component} from 'react';
import '../css/Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="bottomnav">
                <ul className="bottomnav_list">
                    <li className="bottomnav_item">
                        <i className="far fa-plus-square"></i>
                        <p>Add</p> 

                    </li>
                    <li className="bottomnav_item">
                        <i id="over_write"className="fas fa-chart-line"></i>

                        <p>Progress</p>
                    </li>
                    <li className="bottomnav_item">
                        <i className="fas fa-map-marked-alt"></i>

                        <p>Buddies</p>
                    </li>
                    <li className="bottomnav_item">
                        <i className="fas fa-sign-out-alt"></i>
                        <p>Log Out</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;