import React, {Component} from 'react';
import moment from 'moment';

import '../css/PrevNext.css';

class Step1 extends Component {
    state = {
        startTime: moment().format('YYYY-MM-DDTHH:mm'),
        endTime: moment().format('YYYY-MM-DDTHH:mm'),
        workout: []
    }

    componentWillMount() {
        console.log('component will mount step 1', this.props.workout);
        
        if(this.props.workout && this.props.workout.length !== 0) {
            this.setState(
                {
                    workout: this.props.workout,
                    startTime: this.props.workout[0].start_date,
                    endTime: this.props.workout[0].end_date
                }
            );
        }
        else {
            let workout = this.state.workout;
            workout.push(
                {
                    start_date: this.state.startTime,
                    end_date: this.state.endTime,
                    exercise_log: []
                });

            this.setState({workout});
        }
    }

    updateStartTime= (e) => {
        let startTime = e.target.value;
        
        this.setState({startTime}, () => {
            let workout = this.state.workout;
            workout[0].start_date = this.state.startTime;
            this.setState({workout});
        });
        
    }

    updateEndTime= (e) => {
        let endTime = e.target.value;

        this.setState({endTime}, () => {
            let workout = this.state.workout;
            workout[0].end_date = this.state.endTime;
            this.setState({workout});
        });
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <div className='caption'>Training Duration</div>
                    <div className='breadcrumb'>Step 1 of 3</div>
                </div>
                <div className='container-step1'>
                    <div className='content'>When did you start your training?</div>
                    <div className='content'><input type="datetime-local"  value={this.state.startTime} onChange={(e) => this.updateStartTime(e)} /></div>
                    <div className='content'>When did you end your training?</div>
                    <div className='content'><input type="datetime-local"  value={this.state.endTime} onChange={(e) => this.updateEndTime(e)} /></div>
                </div>
                <div className='container-nav'>
                    <a onClick={() => this.props.prev(this.props.step, this.state.workout)}><div className='button-nav secondary'>{"<"} Prev</div></a>
                    <a onClick={() => this.props.next(this.props.step, this.state.workout)}><div className='button-nav primary'>Next {">"}</div></a>
                </div>
            </div>
        );
    }
}

export default Step1;