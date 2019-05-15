import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';
import '../css/Dashboard.css';

//Our higher order component
import WithAuth from '../service/WithAuth';

import Header from './Header';
import DashboardBody from './DashboardBody';
import GeoHelperService from '../service/GeoHelperService';
import axios from 'axios';
import { userInfo } from 'os';

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
          console.log('coordinates data', response); //{lat: 9.7165312, long: 99.98581759999999
          const tokenStr = this.Auth.getToken();
          console.log({tokenStr})
          let long = response.long
          let lat = response.lat
          let location = {
            type: 'Point',
            coordinates: [long, lat]
          }
          console.log({location})
          axios.patch(process.env.REACT_APP_PATCH_USER, {location}, { headers: {"Authorization" : `Bearer ${tokenStr}`} } )
          .then( (response) => {
            	console.log({response})
            	})
            	.catch( (error) => {
            		console.log(error);
            	})
          
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
