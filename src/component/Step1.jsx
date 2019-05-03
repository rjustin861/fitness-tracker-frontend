import React, {Component} from 'react';
import moment from 'moment';

import PrevNext from './PrevNext';

class Step1 extends Component {
    state = {
        startTime: moment().format('YYYY-MM-DDTHH:mm'),
        endTime: moment().format('YYYY-MM-DDTHH:mm')
    }

    updateStartTime= (e) => {
        this.setState({
            startTime: e.target.value
        });
    }

    updateEndTime= (e) => {
        this.setState({
            endTime: e.target.value
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='caption'>Step 1</div>
                <div className='content'>When did you start your training?</div>
                <div className='content'><input type="datetime-local"  value={this.state.startTime} onChange={this.updateStartTime} /></div>
                <div className='content'>When did you end your training?</div>
                <div className='content'><input type="datetime-local"  value={this.state.endTime} onChange={this.updateEndTime} /></div>
                <div className='breadcrumb'>Step 1 of 3</div>
                <PrevNext step={this.props.step} prev={this.props.prev} next={this.props.next} startTime={this.state.startTime} endTime={this.state.endTime} />
            </div>
        );
    }
}

export default Step1;