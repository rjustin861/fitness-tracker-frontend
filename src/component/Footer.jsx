import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../css/Footer.css';



class Footer extends Component {
    render() {
        return (
            <div>
            <footer>
                <img src={logo} alt="Fitness Tracker Logo"/>
                <div className="info">• Designed in Koh Samui by lazy people •</div>
                <div className="info">• Ryan n' Susanna •</div>
            </footer>
            </div>
        );
    }
}

export default Footer;