import React, {Component} from 'react';

class Step0 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-step0'>
                    <div className='caption'>Welcome on Board!</div>
                    <div className='heading'>Start and fill out your first workout or check out your progress</div>

                    <div className="container-nav">
                        <a onClick={() => this.props.view()}><div className='button-nav secondary'>View</div></a>
                        <a onClick={() => this.props.next(this.props.step)}><div className='button-nav primary'>Fill</div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step0;