import React, {Component} from 'react';
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
        this.props.filterByDate(start)
    }

    render() {
        return (
            <div>
            <h4>Check your workouts</h4>
                <input type="date" onChange={(e) => this.updateDate(e)}/>
            <div>
                {this.props.filterWorkout.length == 0 && <div> No data</div>}
                {this.props.filterWorkout.map((workout) => {
                    return (
                        <div key={workout._id}>
                            <p>{workout.name}</p>
                            <p>{workout.set}</p>
                            <p>{workout.reps}</p>
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