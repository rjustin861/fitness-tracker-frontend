import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import BuddyBody from './BuddyBody';
import SelectedBuddy from './SelectedBuddy';
import Nav from './Nav';
import AuthHelperService from '../service/AuthHelperService';
import WithAuth from '../service/WithAuth';
import moment from 'moment';


import '../css/Dashboard.css';
import '../css/DailyWorkout.css';
import '../css/Buddy.css';

class Buddy extends Component {

  constructor(props) {
    super(props);
    this.tokenStr = new AuthHelperService().getToken();
    this.state = {
      loading: 'initial',
      buddies: [],
      selectedBuddy: [],
      filterWorkouts: []
    };
    this.viewLog = this.viewLog.bind(this);
  }

  componentDidMount() {
    console.log('inside componentDidMount');

    this.setState({ loading: 'true' });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        axios.get(process.env.REACT_APP_GET_BUDDIES + '?long=' + long +'&lat=' + lat, { headers: {"Authorization" : `Bearer ${this.tokenStr}`} })
          .then((response) => {
            this.setState({buddies: response.data, loading: 'false'});
          })
          .catch((error)=> {
            console.log('error', error);
          });

      },  (error) => {
          console.log('error', error);
      }, {maximumAge:Infinity, timeout:5000, enableHighAccuracy:false});
    }
  }

  viewLog(id) {
    console.log('id', id);

    axios.get(process.env.REACT_APP_GET_WORKOUT_URL + '?user='+ id, { headers: {"Authorization" : `Bearer ${this.tokenStr}`} })
      .then((response) => {
        this.setState({selectedBuddy: response.data});
      })
      .catch((error)=> {
        console.log('error', error);            
      });
  }

  filterWorkoutsByDate = (end) => {
    console.log(end)
    const filterWorkouts = this.state.selectedBuddy.filter((workout) =>{
    let date = moment(end).format('YYYY-MM-DD')
    let today = moment(workout.end).local().format('YYYY-MM-DD')

    return date === today

    })
    this.setState({filterWorkouts})

}

  render() {
    return (
      <div>
        <Header isLoggedIn={true} />
        <div className="container">
          <h3>Workout buddies around you</h3>
          {this.state.loading === 'initial' && <h3>Intializing...</h3>}
        
          {this.state.loading === 'true' && <h3>Looking for buddies around you...</h3>}

          {
            this.state.loading === 'false' && this.state.selectedBuddy.length === 0 ?
              <BuddyBody buddies={this.state.buddies} viewLog={this.viewLog} />
            : <SelectedBuddy selectedBuddy={this.state.selectedBuddy} filterWorkouts={this.state.filterWorkouts} filterWorkoutsByDate={this.filterWorkoutsByDate}/>
          }
        </div>
        <Nav />
      </div>
    );
  }
}

export default WithAuth(Buddy);