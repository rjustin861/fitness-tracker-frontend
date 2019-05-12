import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import Chart from 'chart.js';
import moment from 'moment';
import '../css/Select.css';
import '../css/Chart.css';



class Select extends Component {
    state = {
        dates: [],
        weight: []
    }


    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'line',
            data: {
                //Bring in data
                labels: [this.state.dates],
                datasets: [
                    {
                        label: 'Push ups Intensity',
                        data: [this.state.weight],
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
        console.log('chartex', this.props.chartExercise)

        // Sort By Date
        this.props.chartExercise.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0));
        console.log('sorted', this.props.chartExercise)

        // map
        var dates = this.props.chartExercise.map(chart => (moment(chart.start).format('YYYY-MM-DD')))
        var weight = this.props.chartExercise.map(chart => (chart.weight))
        console.log({dates})
        console.log({weight})

        this.setState({dates:dates})
        this.setState({weight:weight})
    
        console.log('working?', this.state)
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