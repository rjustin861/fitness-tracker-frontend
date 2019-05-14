import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';
import '../css/Dashboard.css';

//Our higher order component
import WithAuth from '../service/WithAuth';

import Header from './Header';
import DashboardBody from './DashboardBody';
import GeoHelperService from '../service/GeoHelperService';

class Dashboard extends Component {
  Auth = new AuthHelperService();
  Geo = new GeoHelperService();

  performLogout = () => {
    this.Auth.logout();
    this.props.history.replace('/');
  }

  componentWillMount() {
    this.Geo.getCoordinates()
      .then((response) => {
          console.log('coordinates data', response); //{lat: 9.7165312, long: 99.98581759999999}
      })
      .catch((error) => {
          console.log('error', error);
      })
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
