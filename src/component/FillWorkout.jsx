import React, {Component} from 'react';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';

class FillWorkout extends Component {
    state = {
        isStep0: true,
        isStep1: false,
        isStep2: false
    }

    prev = (param) => {
        if(param === 'Step0') {
            this.setState({isStep0: true});
            this.setState({isStep1: false});
        }
        if(param === 'Step1') {
            this.setState({isStep1: true});
            this.setState({isStep2: false});
        }
    }

    next = (param) => {
        if(param === 'Step1') {
            this.setState({isStep0: false});
            this.setState({isStep1: true});
        }
        if(param === 'Step2') {
            this.setState({isStep1: false});
            this.setState({isStep2: true});
        }
    }

    render() {
        return (
            <div>
                {this.state.isStep0 && <Step0 next={this.next} />}
                {this.state.isStep1 && <Step1 prev={this.prev} next={this.next} />}
                {this.state.isStep2 && <Step2 prev={this.prev} next={this.next} />}
            </div>
        );
    }
}

export default FillWorkout;