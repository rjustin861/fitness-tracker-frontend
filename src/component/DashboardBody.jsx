import React, {Component} from 'react';
import axios from 'axios';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ViewWorkout from './ViewWorkout';
import AuthHelperService from '../service/AuthHelperService';

class DashboardBody extends Component {
    Auth = new AuthHelperService();

    state = {
        step: 0,
        workout: []
    }

    prev = (currentStep, workout) => {
        const step = currentStep - 1;
        this.setState({step});
        
        if(workout && workout.length !== 0) {
            console.log('workout in prev', workout);
            this.setState({workout});
        } else {
            this.setState({workout: []});
        }
    }

    next = (currentStep, workout) => {
        const step = currentStep + 1;
        this.setState({step});

        if(workout && workout.length !== 0) {
            console.log('workout in next', workout);
            this.setState({workout});
        } else {
            this.setState({workout: []});
        }
    }

    save = (workout) => {
        console.log({workout});

        const tokenStr = this.Auth.getToken();

        // axios.post(process.env.REACT_APP_POST_WORKOUT_URL + '?user_id=5cc94f1112c41412abe3a553', {workout})
        axios.post(process.env.REACT_APP_POST_WORKOUT_URL, {workout}, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
            .then(response => {
                console.log('response', response.data);
                alert('Record created');
                this.setState({step: 0});
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    view = () => {
        const step = 4;
        this.setState({step})
    }

    render() {
        return (
            <div>

                {this.state.step === 0 && <Step0 step={0} next={this.next} name={this.props.name} view={this.view}/>}
                {this.state.step === 1 && <Step1 step={1} prev={this.prev} next={this.next} workout={this.state.workout} />}
                {this.state.step === 2 && <Step2 step={2} prev={this.prev} next={this.next} workout={this.state.workout} />}
                {this.state.step === 3 && <Step3 step={3} prev={this.prev} save={this.save} workout={this.state.workout} />}
                {this.state.step === 4 && <ViewWorkout />}
            </div>
        );
    }
}

export default DashboardBody;