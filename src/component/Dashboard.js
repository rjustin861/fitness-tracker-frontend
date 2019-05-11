import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';
import '../css/Dashboard.css';

//Our higher order component
import WithAuth from '../service/WithAuth';

import Header from './Header';
import DashboardBody from './DashboardBody';

class Dashboard extends Component {
  Auth = new AuthHelperService();

  performLogout = () => {
    this.Auth.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} performLogout={this.performLogout} />
        <DashboardBody name={this.props.confirm.name} />
      </div>
    );
  }
}

export default WithAuth(Dashboard);
