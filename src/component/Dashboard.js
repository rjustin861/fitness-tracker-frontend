import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import DashboardBody from './DashboardBody';
import Nav from './Nav';
import AuthHelperService from '../service/AuthHelperService';
import WithAuth from '../service/WithAuth';

import '../css/Dashboard.css';

class Dashboard extends Component {
  Auth = new AuthHelperService();

  performLogout = () => {
    this.Auth.logout();
    this.props.history.replace('/');
  }

  goToView = () => {
    this.props.history.replace('/view');
  }

  componentDidMount() {
    const tokenStr = this.Auth.getToken();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          type: 'Point',
          coordinates: [position.coords.longitude, position.coords.latitude]
        }

        console.log({location});
        axios.patch(process.env.REACT_APP_PATCH_USER, {location}, { headers: {"Authorization" : `Bearer ${tokenStr}`} } )
          .then((response) => {
            console.log('response', response);
          })
          .catch((error) => {
              console.log('error', error);
          });

      },  (error) => {
          console.log('error', error);
      }, {maximumAge:Infinity, timeout:5000, enableHighAccuracy:true});
    }
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} />
        <DashboardBody name={this.props.confirm.name} goToView={this.goToView} />
        <Nav />
      </div>
    );
  }
}

export default WithAuth(Dashboard);
