import React, {Component} from 'react';
import PrevNext from './PrevNext';

class Step3 extends Component {
    state = {
        exerciselogs: []
    }

    componentDidMount() {
        if(this.props.exerciselogs)
            this.setState({exerciselogs: this.props.exerciselogs});
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
                <div className='caption'>Step 3</div>
                <div className="exerciseRow exerciseHeader">
                    <div className="col-icon"></div>
                    <div className="col-name">Exercise</div>
                    <div className="col">Sets</div>
                    <div className="col">Reps</div> 
                    <div className="col">Weights</div> 
                </div>
                {
                    this.state.exerciselogs.map((exerciselog, index) => {
                    return (
                        <div className="exerciseRow" key={index}>
                                <div className="col-icon"><button className="icon_white" onClick={() => this.removeExercise(exerciselog)}><i className="fas fa-minus-circle"></i></button></div>
                                <div className="col-name">{exerciselog.exercise}</div>
                                <div className="col">{exerciselog.set}</div>
                                <div className="col">{exerciselog.repetitions}</div> 
                                <div className="col">{exerciselog.weight}</div> 
                        </div>
                    )
                    })
                }
                <div className='breadcrumb'>Step 3 of 3</div>
                <PrevNext step={this.props.step} prev={this.props.prev} save={this.props.save} exerciselogs={this.state.exerciselogs} />
            </div>
        );
    }
}

export default Step3;