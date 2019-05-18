import React, {Component} from 'react';

class NavLink extends Component {
    render() {
        return (
            <a className={'bottomnav_a ' + (this.props.isActive ? 'active': '')} onClick={ this.props.onActiveTab }>
                <li className="bottomnav_item">
                    <i id="over_write" className={ this.props.icon }></i>
                    <p>{ this.props.name }</p>
                </li>
            </a>
      );
    }
}

export default NavLink;