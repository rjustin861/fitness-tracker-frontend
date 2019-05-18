import React, {Component} from 'react';
import NavLink from './NavLink';
import '../css/Nav.css';
import AuthHelperService from '../service/AuthHelperService';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthHelperService();
        this.state = {
            selectedTabId: 1,
            links: [
                { id: 1, name: 'Add', icon: 'far fa-plus-square' },
                { id: 2, name: 'Progress', icon: 'fas fa-chart-line' },
                { id: 3, name: 'Buddies', icon: 'fas fa-map-marked-alt' },
                { id: 4, name: 'Log Out', icon: 'fas fa-sign-out-alt' },
              ]
        }
        // this.getInitialState = this.getInitialState.bind(this);
        // this.isActive = this.isActive.bind(this);
        // this.setActiveTab = this.setActiveTab.bind(this);
    }

    componentDidMount() {
        console.log(window.location.pathname);
        if(window.location.pathname === '/dashboard')
            this.setState({selectedTabId: 1})
        else if (window.location.pathname === '/view')
            this.setState({selectedTabId: 2})
        else if (window.location.pathname === '/buddy')
            this.setState({selectedTabId: 3})
    }
    getInitialState = () => {
        return { selectedTabId: 1 }
    }
    
    isActive = (id) => {
        return this.state.selectedTabId === id;
    }
    
    setActiveTab = (selectedTabId) => {
        console.log(selectedTabId);
        this.setState({selectedTabId});
        
        if(selectedTabId === 1)
            window.location = '/dashboard';
        else if(selectedTabId === 2)
            window.location = '/view';
        else if(selectedTabId === 3)
            window.location = '/buddy';
        else if(selectedTabId === 4)
            this.performLogout();
    }

    performLogout = () => {
        this.Auth.logout();
        window.location = '/';
    }

    render() {
        return (
            <div className="bottomnav">
                <ul className="bottomnav_list">
                {
                    this.state.links.map((link, index) => {
                        return (
                            <NavLink 
                                key={ index }
                                name={ link.name }
                                icon={ link.icon } 
                                isActive={ this.isActive(link.id) } 
                                onActiveTab={ this.setActiveTab.bind(this, link.id) }
                            /> 
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Nav;