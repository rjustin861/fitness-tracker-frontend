import React, {Component} from 'react';

class Step0 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='caption'>Welcome on Board!</div>
                <div className='content'>Start and fillout your first workout</div>
                <div className='button'><a onClick={() => this.props.next('Step1')}>Fill Workout</a></div>
            </div>
        );
    }
}

export default Step0;