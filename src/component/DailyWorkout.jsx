import React, {Component} from 'react';
import axios from 'axios';
import '../css/DailyWorkout.css';
import moment from 'moment';
// import Calendar from './Calendar';




class DailyWorkout extends Component {
    state = {
        workouts: [],
        date: moment().format('YYYY-MM-DD'),
    }

    updateDate = (e) => {
        let start = e.target.value;
        console.log(start)
        let newWorkout = this.props.filterByDate(start)
        this.setState({workouts:newWorkout}) 
        console.log(this.state.workouts)  
    }


    // componentMount() {
    //     // this.setState({workouts:this.props.workouts})
    //     console.log('waaat',this.props.workouts)
    //     // let workouts = this.props.workouts;
    //     // let today = this.state.date;
    //     // let day = moment(workout.start).format('YYYY-MM-DD')
    //     // let todayWorkouts = workouts.filter( (workout) => day === today)
    //     // this.setState({workouts:todayWorkouts})
    // }

    render() {
        return (
            <div>
            <h4>Check your workouts</h4>
            <form action="">
                <input type="date" onChange={(e) => this.updateDate(e)}/>
                <div type="submit" className="button">Check</div>
            </form>
            <div>
                {this.props.filterWorkout.map((workout) => {
                    return (
                        <div key={workout._id}>
                            <p>{workout.name}</p>
                            <p>{workout.start}</p>
                            <p>{workout.set}</p>
                        </div>

                    )

                })}
            </div>
            <div>
                {this.state.workouts.map((workout) => {
                    return (
                        <div key={workout._id}>
                            <p>{workout.name}</p>
                            <p>{workout.start}</p>
                            <p>{workout.set}</p>
                            <p>{workout.repetition}</p>
                            <p>{workout.weight}</p>
                        </div>

                    )

                })}
            </div>
            </div>
        );
    }
}

export default DailyWorkout;

/* <Calendar></Calendar> */

/* <div className="month">May 2019</div>
<div className="day">
    <ul className="day_view">
        <li>&#10094;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li className="active">4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>&#10095;</li>
    </ul>
  </div> */