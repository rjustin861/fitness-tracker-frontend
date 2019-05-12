import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import Chart from 'chart.js';
import '../css/Select.css';
import '../css/Chart.css';



class Select extends Component {
    state = {
        
    }


    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'line',
            data: {
                //Bring in data
                labels: ['01 May 2019','02 May 2019','03 May 2019','04 May 2019','05 May 2019','06 May 2019','07 May 2019','08 May 2019','09 May 2019','10 May 2019'],
                datasets: [
                    {
                        label: 'Push ups Intensity',
                        data: [1, 3, 5,7,9,5, 8, 12,9,10],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    updateExercise = (e) => {
        let exercise = e.target.value;
        console.log('target.value', e.target.value)
        this.props.filterByExercise(exercise)
    }
    

    render() {
        return (
            <div>
                <div className="range">
                  
                    <label htmlFor="exercise">Choose Exercise</label>
                    <div>
                        <select name="exercise" size="3" onChange={(e) => this.updateExercise(e)}>
                    {this.props.exerciseList.map((workout) => {
                    return (
                        <option value={workout}>{workout}</option>
                    )
                })}
                </select>
                    </div>

                </div>
                <div className="chart-container">
                    <div className="chart">
                        <canvas ref={this.chartRef}>
                        </canvas>
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;
// {this.props.workouts.map((workout) => {
//     return (
//         <option value={workout.name} key={workout.name}>{this.props.workout.name}</option>
//         )
//     })}
/* <label htmlFor="startdate">From</label>
<input type="date" placeholder="Start"/>
<label htmlFor="enddate">To</label>
<input type="date" placeholder="End"/> */