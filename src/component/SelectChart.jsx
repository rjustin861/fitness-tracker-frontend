import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import Chart from 'chart.js';
import moment from 'moment';
import '../css/SelectChart.css';
import '../css/Chart.css';

import { Line } from 'react-chartjs-2';
import { conditionalExpression } from '@babel/types';
// import { defaults } from 'react-chartjs-2';



class Select extends Component {
    state = {
        data: {}, 
        options: {
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
        console.log('new chart', this.props.chartExercise)
        this.props.chartFilter()
        console.log('what is going on', this.props.data)
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
                        <Line data={this.props.data} options={this.state.options} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;
