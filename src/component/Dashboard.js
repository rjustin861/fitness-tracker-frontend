import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Dashboard.css';

import Header from './Header';
import DashboardBody from './DashboardBody';

class Dashboard extends Component {
  state = {
    isLoggedIn: true
  }

  performLogout = () => {
    //call API to logout, if logout successful, then set isLoggedIn to false
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn || <Redirect to='/' />}
        <Header isLoggedIn={this.state.isLoggedIn} performLogout={this.performLogout} />
        <DashboardBody />
      </div>
    );
  }
}

export default Dashboard;
