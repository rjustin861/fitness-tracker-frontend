import React, {Component} from 'react';
import axios from 'axios';
import SelectDate from './SelectDate';
import LineChart from './LineChart';


class ViewWorkout extends Component {
    state = {
        data: [
            {
            end: '',
            muscle: [],
            name: '',
            reps: '',
            set: '',
            start: '',
            weight: ''
            }
        ]
    }

    load = () => {
        axios.get(process.env.REACT_APP_GET_WORKOUT_URL + '?user_id=5cc94f1112c41412abe3a553&start=2019-05-07&end=2019-05-10')
        .then(response => {
        console.log('response',response);
        this.setState({data:response.data})
        })
        .catch(error => {
        console.log('error', error);
        });
    }

    componentWillMount() {
        this.load();
        console.log(this.data)
    }


    render() {
        return (
            <div className="container-view">
                <h1>Hello World</h1>
                <SelectDate></SelectDate>
                <LineChart></LineChart>
                <div className="daylilist">
                    pick a day and check your workout
                </div>
            </div>
        );
    }
}

export default ViewWorkout;