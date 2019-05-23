import React, {Component} from 'react';
import moment from 'moment';


class SelectedBuddy extends Component {

    state = {
        date: moment().format('YYYY-MM-DD')
    }

    updateDate = (e) => {
        let end = e.target.value;
        console.log(end)
        this.props.filterWorkoutsByDate(end)
    }

    render() {
        return (
            <div>
                <a className="back" href="/buddy">{"<"} Back</a>
            <p className="title">Check out {this.props.user}'s workouts:</p>
                <input className="date" defaultValue={this.state.date} type="date" onChange={(e) => this.updateDate(e)}/>
            <div>
                <div className="workout">
                <p className="workout_title">Daily Log</p>
                    <div className="svg"></div>
                    {this.props.filteredWorkouts.length == 0 && <div className="nodata"> <p>Sorry, there are no workouts in the selected date.</p></div>}
                    {this.props.filteredWorkouts.map((workout, index) => {
                        return (
                            <div key={index}>
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

export default SelectedBuddy;
