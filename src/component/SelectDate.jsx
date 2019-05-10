import React, {Component} from 'react';
import '../css/FillExerciseLog.css';
import '../css/SelectDate.css';


class SelectDate extends Component {
    state = {
        data: []
    }

    // componentWillReceiveProps(props) {
	// 	console.log('exercise', props.data);
	// 	// this.setState({data})
	// }

    // componentWillMount() {
    //     console.log('component will mount date and exercise', this.props.data);
    //     this.setState({data:this.props.data})
    // }
    render() {
        return (
            <div>
                <div className="range">
                    <label htmlFor="startdate">From</label>
                    <input type="date" placeholder="Start"/>
                    <label htmlFor="enddate">To</label>
                    <input type="date" placeholder="End"/>
                    <label htmlFor="exercise">Choose Exercise</label>
                    <input type="text" placeholder="Exercise"/>
                </div>
                <div className="button">Generate Chart</div>
            </div>
        );
    }
}

export default SelectDate;