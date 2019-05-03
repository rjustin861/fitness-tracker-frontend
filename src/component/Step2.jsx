import React, {Component} from 'react';
import PrevNext from './PrevNext';
import ExerciseSummary from './ExerciseSummary';
import SearchBar from './SearchBar';
import FillExerciseLog from './FillExerciseLog';

class Step2 extends Component {
    state = {
        selectedExercise: '',
        exerciselogs: []
    }

    componentDidMount() {
        if(this.props.exerciselogs)
            this.setState({exerciselogs: this.props.exerciselogs});
    }

    selectExercise = (selectedExercise) => {
        this.setState({selectedExercise});
    }

    addExercise = (exerciselog) => {
        let exerciselogs = this.state.exerciselogs;
        exerciselogs.push(exerciselog);
        this.setState({exerciselogs, selectedExercise: ''});
    }

    removeExercise = (exerciseToBeRemoved) => {
        let exerciselogs = this.state.exerciselogs.filter((exercise) => {
            return exercise.exercise != exerciseToBeRemoved.exercise;
        });
        this.setState({exerciselogs});
    }

    render() {
        return (
            <div className='container'>
                {this.state.exerciselogs.length != 0 && <ExerciseSummary exerciselogs={this.state.exerciselogs} removeExercise={this.removeExercise} />}
                <div className='caption'>Step 2</div>
                <div className='content'>Let's find your exercise:</div>
                <SearchBar selectExercise={this.selectExercise} />
                {this.state.selectedExercise && <FillExerciseLog selectedExercise={this.state.selectedExercise} addExercise={this.addExercise} />}
                <div className='breadcrumb'>Step 2 of 3</div>
                <PrevNext step={this.props.step} prev={this.props.prev} next={this.props.next} exerciselogs={this.state.exerciselogs} />
            </div>
        );
    }
}

export default Step2;