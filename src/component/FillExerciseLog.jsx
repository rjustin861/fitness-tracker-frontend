import React, {Component} from 'react';

import '../css/PrevNext.css';
import '../css/FillExerciseLog.css';

class FillExerciseLog extends Component {
    state = {
        set: '',
        repetitions: '',
        weight: '',
        error: ''
    }

    componentDidMount() {
        this.setInput.focus();
    }

    updateSets = (e) => {
        this.setState({set: e.target.value});
    }

    updateReps = (e) => {
        this.setState({repetitions: e.target.value});
    }

    updateWeight = (e) => {
        this.setState({weight: e.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.set == 0 || this.state.repetitions == 0) {
            this.setState({error: 'Number of sets and number of repetitions cannot be zero'});
        } else {
            this.setState({error: ''});
            let data = {
                exercise: this.props.selectedExercise,
                set: this.state.set,
                repetitions: this.state.repetitions,
                weight: this.state.weight,
                muscle_group: this.props.muscle_group
            }
            
            console.log('formData', data);
            this.props.addExercise(data);
            
            this.setState({
                set: '',
                repetitions: '',
                weight: ''
            });
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className='exercise_name'>{this.props.selectedExercise}</div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="id_sets" className="control-label col-md-3">
                                Number of sets:
                            </label>
                            <input name="sets" id="id_sets" type="number" className="exerciseForm" ref={(input) => this.setInput = input} value={this.state.set} onChange={this.updateSets}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_reps" className="col-md-3 control-label">
                                Number of reps:
                            </label>
                            <input name="reps" id="id_reps" type="number" className="exerciseForm" value={this.state.repetitions} onChange={this.updateReps}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_weight" className="col-md-3 control-label">
                                Weight (kg):
                            </label>
                            <input name="weight" id="id_weight" type="number" className="exerciseForm" value={this.state.weight} onChange={this.updateWeight}/>
                        </div>
                        { this.state.error && 
                            <div className='error-message'>
                                <strong>ERROR</strong> - {this.state.error}
                            </div>
                        }
                        <div className="form-group">
                            <a className={"saveButton " + (this.state.set && this.state.repetitions && this.state.weight ? '' : 'disabled')} onClick={(e) => this.handleFormSubmit(e)}><div className='button small primary'>Save</div></a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FillExerciseLog;