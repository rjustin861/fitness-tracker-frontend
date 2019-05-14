import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import Chart from 'chart.js';
import '../css/SelectChart.css';
import '../css/Chart.css';

import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';


class Select extends Component {
    state = {
        data: {}, 
        options: {
            responsive: true,
            mantainAspectRatio: false,
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5
                    }
                }]
            }
        }
    }   
    
    updateExercise = (e) => {
        let exercise = e.target.value;
        console.log('target.value', e.target.value)
        this.props.filterByExercise(exercise)
    }
  

    render() {
        return (
            <div>
                <i className="fas fa-chart-line"></i>
                <p className="title">Check your exercise progress:</p>
                    <div className="range">
                        <div>
                            <select value={this.props.selectedExercise} name="exercise" size="5" onChange={(e) => this.updateExercise(e)}>
                                {this.props.exerciseList.map((workout, index) => {
                                return (
                                    <option className="option" value={workout} key={index}>{workout}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="chart-container">
                        <div className="chart">
                            <Line data={this.props.data} options={this.state.options} />
                        </div>
                    </div>
            </div>
        );
    }
}

export default Select;
