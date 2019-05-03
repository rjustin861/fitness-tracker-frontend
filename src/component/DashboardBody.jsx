import React, {Component} from 'react';
import axios from 'axios';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ViewWorkout from './ViewWorkout';

class DashboardBody extends Component {
    state = {
        step: 0,
        exerciselogs: [],
        startTime: '',
        endTime: '',
        isSubmitted: false
    }

    prev = (currentStep, exerciselogs) => {
        let step = currentStep - 1;
        this.setState({step});

        if(exerciselogs)
            this.setState({exerciselogs});
    }

    next = (currentStep, exerciselogs, startTime, endTime) => {
        let step = currentStep + 1;
        this.setState({step});

        if(exerciselogs)
            this.setState({exerciselogs});
        
        if(startTime)
            this.setState({startTime});
        
        if(endTime)
            this.setState({endTime});
    }

    save = (exerciselogs) => {
        const data = {
            workout: [{
                start_date: this.state.startTime,
                end_date: this.state.endTime,
                exercise_log: exerciselogs
            }]
        }

        console.log(data);

        axios.post(process.env.REACT_APP_POST_WORKOUT_URL + '?user_id=5cc94f1112c41412abe3a553', data)
            .then(response => {
                console.log('response', response.data);
                alert('Record created');
                this.setState({step: 4});
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    render() {
        return (
            <div>
                {this.state.step === 0 && <Step0 step={0} next={this.next} />}
                {this.state.step === 1 && <Step1 step={1} prev={this.prev} next={this.next} />}
                {this.state.step === 2 && <Step2 step={2} prev={this.prev} next={this.next} exerciselogs={this.state.exerciselogs} />}
                {this.state.step === 3 && <Step3 step={3} prev={this.prev} save={this.save} exerciselogs={this.state.exerciselogs} />}
                {this.state.step === 4 && <ViewWorkout />}
            </div>
        );
    }
}

export default DashboardBody;