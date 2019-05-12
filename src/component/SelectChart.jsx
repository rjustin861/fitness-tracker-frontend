import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import Chart from 'chart.js';
import moment from 'moment';
import '../css/SelectChart.css';
import '../css/Chart.css';



class Select extends Component {
    state = {
        dates: [],
        intensity: []
    }

    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart()
    }

    componentDidUpdate() {
        this.buildChart()
    }


    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const labels = this.props.dates
        const intensity = this.props.intensity

        // if (typeof Chart !== "undefined") Chart.destroy();

        Chart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Intensity of workout",
                        data: intensity,
                        fill: true,
                        borderColor: "#6610f2",
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    } 
                }               
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

        //add Intensity

        this.props.chartExercise.map(chart => chart.intensity = (chart.set * chart.reps *chart.weight))
        console.log('intensity', this.props.chartExercise)

        // map
        var dates = this.props.chartExercise.map(chart => (moment(chart.start).format('YYYY-MM-DD')))
        var intensity = this.props.chartExercise.map(chart => (chart.intensity))
        console.log({dates})
        console.log({intensity})

        this.setState({dates:dates})
        this.setState({intensity:intensity})
    
        console.log('working?', this.state)
    }
    

    render() {
        return (
            <div>
                <i class="fas fa-chart-line"></i>
                <p className="title">Check your exercise progress:</p>

                <div className="range">
                  
                    <div>
                        <select name="exercise" size="5" onChange={(e) => this.updateExercise(e)}>
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