import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FillWorkout from './component/FillWorkout';
import './css/Dashboard.css';

import Header from './component/Header';

class Dashboard extends Component {
  state = {
    isLoggedIn: true
  }

  logout = () => {
    //call API to logout, if logout successful, then set isLoggedIn to false
    console.log("Logout successfully");
    this.setState({isLoggedIn: false});
}

renderRedirect = () => {
  if (!this.state.isLoggedIn)
    return <Redirect to='/' />
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <FillWorkout />
      </div>
    );
  }
}

export default Dashboard;
