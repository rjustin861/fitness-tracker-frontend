import React, {Component} from 'react';
import ExerciseSummary from './ExerciseSummary';
import SearchBar from './SearchBar';
import FillExerciseLog from './FillExerciseLog';

import '../css/PrevNext.css';

class Step2 extends Component {
    state = {
        selectedExercise: '',
        muscle_group: [],
        workout: []
    }

    componentWillMount() {
        console.log('component will mount step 2', this.props.workout);
        
        if(this.props.workout && this.props.workout.length !== 0)
            this.setState({workout: this.props.workout});
    }

    selectExercise = (selectedExercise) => {
        this.setState({selectedExercise: selectedExercise.name, muscle_group: selectedExercise.muscle_group});
    }

    addExercise = (exerciselog) => {
        let workout = this.state.workout;
        workout[0].exercise_log.push(exerciselog);
        this.setState({workout, selectedExercise: ''});
    }

    removeExercise = (exerciseToBeRemoved) => {
        let exerciselogs = this.state.workout[0].exercise_log.filter((exercise) => {
            return exercise.exercise !== exerciseToBeRemoved.exercise;
        });
        
        let workout = this.state.workout;
        workout[0].exercise_log = exerciselogs;
        this.setState({workout});
    }

    render() {
        return (
            <div>
                {this.state.workout[0].exercise_log && this.state.workout[0].exercise_log.length != 0 && <ExerciseSummary exerciselogs={this.state.workout[0].exercise_log} removeExercise={this.removeExercise} />}
            
                <div className='container'>
                    <div>
                        <div className='caption'>Add Exercises</div>
                        <div className='breadcrumb'>Step 2 of 3</div>
                    </div>

                    <div>
                        <div className='content'>Let's find your exercise:</div>
                        <SearchBar selectExercise={this.selectExercise} />
                    </div>

                    <div>
                        {this.state.selectedExercise && <FillExerciseLog selectedExercise={this.state.selectedExercise} muscle_group={this.state.muscle_group} addExercise={this.addExercise} />}
                    </div>

                    <div className='container-nav'>
                        <a onClick={() => this.props.prev(this.props.step, this.state.workout)}><div className='button-nav secondary'>{"<"} Prev</div></a>
                        <a onClick={() => this.props.next(this.props.step, this.state.workout)}><div className={'button-nav primary ' + (this.state.workout[0].exercise_log.length === 0 ? 'disabled' : '')}>Review</div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step2;