import React, {Component} from 'react';
import ExerciseSummary from './ExerciseSummary';
import SearchBar from './SearchBar';
import FillExerciseLog from './FillExerciseLog';

import '../css/PrevNext.css';

class Step2 extends Component {
    state = {
        selectedExercise: '',
        workout: []
    }

    componentWillMount() {
        console.log('component will mount step 2', this.props.workout);
        
        if(this.props.workout && this.props.workout.length !== 0)
            this.setState({workout: this.props.workout});
    }

    selectExercise = (selectedExercise) => {
        this.setState({selectedExercise});
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
            <div className='container'>
                {this.state.workout[0].exercise_log && this.state.workout[0].exercise_log.length != 0 && <ExerciseSummary exerciselogs={this.state.workout[0].exercise_log} removeExercise={this.removeExercise} />}
                <div className='caption'>Step 2</div>
                <div className='content'>Let's find your exercise:</div>
                <SearchBar selectExercise={this.selectExercise} />
                {this.state.selectedExercise && <FillExerciseLog selectedExercise={this.state.selectedExercise} addExercise={this.addExercise} />}
                <div className='breadcrumb'>Step 2 of 3</div>

                <div className='container-nav'>
                    <div className='button-nav'><a onClick={() => this.props.prev(this.props.step, this.state.workout)}>{"<"} Prev</a></div>
                    <div className={'button-nav ' + (this.state.workout[0].exercise_log.length === 0 ? 'disabled' : '')}><a onClick={() => this.props.next(this.props.step, this.state.workout)}>Review</a></div>
                </div>
            </div>
        );
    }
}

export default Step2;