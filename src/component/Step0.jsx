import React, {Component} from 'react';

class Step0 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-step0'>

                    <div className='caption'>Welcome {this.props.name}!</div>
                    <div className='heading'>Did you train today? <br/>Add your workout and keep track of your progress.</div>

                        <a onClick={() => this.props.next(this.props.step)}><div className='button-nav primary'>Add</div></a>
                </div>
            </div>
        );
    }
}

export default Step0;
/* <a onClick={() => this.props.view()}><div className='button-nav secondary'>View</div></a> */