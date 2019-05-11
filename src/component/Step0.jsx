import React, {Component} from 'react';

class Step0 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-step0'>
                    <div className='caption'>Welcome, {this.props.name}!</div>
                    <div className='heading'>Start and fill out <br/>your first workout</div>
                    <a onClick={() => this.props.next(this.props.step)}><div className='button'>Fill Workout</div></a>
                </div>
            </div>
        );
    }
}

export default Step0;