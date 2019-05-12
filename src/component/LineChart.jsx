import React, {Component} from 'react';
import Chart from 'chart.js';
import '../css/Chart.css';
// import classes from "./LineGraph.module.css";

class LineChart extends Component {
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

    render() {
        return (
            <div>
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

export default LineChart;