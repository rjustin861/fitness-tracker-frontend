import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';
import WithAuth from '../service/WithAuth';
import GeoHelperService from '../service/GeoHelperService';


import Header from './Header';
import Nav from './Nav';
import BuddyBody from './BuddyBody';
import SelectedBuddy from './SelectedBuddy';
import '../css/Dashboard.css';
import '../css/DailyWorkout.css';
import '../css/Buddy.css';
import axios from 'axios';




class Buddy extends Component {
  Auth = new AuthHelperService();
  Geo = new GeoHelperService();


  state = {
    buddies: [],
    selectedBuddy: []
  }


  componentDidMount() {
    console.log('hello')
    this.Geo.getCoordinates()
    .then((response) => {
      console.log({response})
      const tokenStr = this.Auth.getToken();
      let long = response.long
      let lat = response.lat
      axios.get(process.env.REACT_APP_GET_BUDDIES + '?long=' + long +'&lat=' + lat, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
        .then((response)=>{
          let buddies = response.data
          console.log({buddies})
          this.setState({buddies})
        })
        .catch((error)=> {
          console.log(error)
        })
    }).catch((error) => {
      console.log({error})
    })
  }

  viewLog = (id) => {
    console.log(id)
    const tokenStr = this.Auth.getToken();
    axios.get(process.env.REACT_APP_GET_WORKOUT_URL + '?user='+ id, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
    .then((response)=>{
      console.log('data', response.data)
      this.setState({selectedBuddy:response.data})
    })
    .catch((error)=> {
        console.log({error});            
    })
  }

    render() {
        return (
          <div>
            <Header isLoggedIn={true} />
            <div className="container">
            <h3>Workout Buddies Around you</h3>
            {this.state.selectedBuddy.length !== 0 || <BuddyBody buddies={this.state.buddies} viewLog={this.viewLog}/>}
            {this.state.selectedBuddy.length !== 0 && <SelectedBuddy selectedBuddy={this.state.selectedBuddy}/>}
            </div>
            <Nav />
            
          </div>
        );
    }
}

export default WithAuth(Buddy);