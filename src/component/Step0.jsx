import React, {Component} from 'react';

class Step0 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-step0'>
                    <div className='caption'>Welcome on Board!</div>
                    <div className='heading'>Start and fill out <br/>your first workout</div>
                    <div className='button'><a onClick={() => this.props.next(this.props.step)}>Fill Workout</a></div>
                </div>
            </div>
        );
    }
}

export default Step0;