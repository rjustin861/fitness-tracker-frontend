import React, {Component} from 'react';

import '../css/PrevNext.css';

class Step3 extends Component {
    state = {
        workout: []
    }

    componentWillMount() {
        console.log('component will mount step 3', this.props.workout);
        
        if(this.props.workout && this.props.workout.length !== 0)
            this.setState({workout: this.props.workout});
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
                <div>
                    <div className='caption'>Exercise Summary</div>
                    <div className='breadcrumb'>Step 3 of 3</div>
                </div>
                <div>
                    <div className="exerciseRow exerciseHeader">
                        <div className="col-name">Exercise</div>
                        <div className="col">Sets</div>
                        <div className="col">Reps</div> 
                        <div className="col">Weights</div> 
                        <div className="col-icon"></div>
                    </div>
                    {
                        this.state.workout[0].exercise_log.map((exerciselog, index) => {
                            return (
                                <div className="exerciseRow" key={index}>
                                    <div className="col-name">{exerciselog.exercise}</div>
                                    <div className="col">{exerciselog.set}</div>
                                    <div className="col">{exerciselog.repetitions}</div> 
                                    <div className="col">{exerciselog.weight}</div> 
                                    <div className="col-icon"><button className="icon white" onClick={() => this.removeExercise(exerciselog)}><i className="fas fa-minus-circle"></i></button></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='container-nav'>
                    <div className='button-nav secondary'><a onClick={() => this.props.prev(this.props.step, this.state.workout)}>{"<"} Prev</a></div>
                    <div className={'button-nav primary ' + (this.state.workout[0].exercise_log.length === 0 ? 'disabled' : '')}><a onClick={() => this.props.save(this.state.workout)}>Save</a></div>
                </div>
            </div>
        );
    }
}

export default Step3;