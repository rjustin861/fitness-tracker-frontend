import React, {Component} from 'react';

class Step2 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='caption'>Step 2</div>
                <div className='content'>Let's find your exercise:</div>
                <div className='content'><input type="text" name="exercise"/></div>
                <div className='breadcrumb'>Step 2 of 3</div>
                <div className='container-btn'>
                    <div className='button-nav'><a onClick={() => this.props.prev('Step1')}>{"<"} Prev</a></div>
                    <div className='button-nav'><a onClick={() => this.props.next()}>Save {">"}</a></div>
                </div>
            </div>
        );
    }
}

export default Step2;