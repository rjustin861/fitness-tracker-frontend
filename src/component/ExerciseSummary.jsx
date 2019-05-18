import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

class ExerciseSummary extends Component {
    render() {
        return (
            <Collapsible trigger="Show Exercise Summary" triggerWhenOpen="Hide Exercise Summary" open={true} className="exerciseSummary" openedClassName="exerciseSummary">
                <div className="exerciseRow exerciseHeader">
                    <div className="col-name">Exercise</div>
                    <div className="col">Sets</div>
                    <div className="col">Reps</div> 
                    <div className="col">Weight</div> 
                    <div className="col-icon"></div>
                </div>
                {
                    this.props.exerciselogs.map((exerciselog, index) => {
                    return (
                    <div className="exerciseRow" key={index}>
                        <div className="col-name">{exerciselog.exercise}</div>
                        <div className="col">{exerciselog.set}</div>
                        <div className="col">{exerciselog.repetitions}</div> 
                        <div className="col">{exerciselog.weight}</div> 
                        <div className="col-icon"><button className="icon" onClick={() => this.props.removeExercise(exerciselog)}><i className="fas fa-minus-circle"></i></button></div>
                    </div>
                    )
                    })
                }
            </Collapsible>
        );
    }
}

export default ExerciseSummary;