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
            <i class="far fa-calendar-alt"></i>
            <p className="title">Check your workouts:</p>
                <input className="date" defaultValue={this.state.date} type="date" onChange={(e) => this.updateDate(e)}/>
            <div>
                <div className="workout">
                <p className="workout_title">Daily log</p>
                    <div className="svg"></div>
                    {this.props.filterWorkout.length == 0 && <div class="nodata"> <p>Sorry, there are no workouts in the selected date.</p></div>}
                    {this.props.filterWorkout.map((workout) => {
                        return (
                            <div key={workout._id}>
                                <p className="key">Exercise: <span className="value"> {workout.name}</span></p>
                                <p className="key">Sets: <span className="value"> {workout.set}</span></p>
                                <p className="key">Repetitions: <span className="value"> {workout.reps}</span></p>
                                <p className="key">Weight: <span className="value"> {workout.weight} KG</span></p>
                                <div className="svg"></div>
                            </div>
                        )
                    })}
                </div>
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