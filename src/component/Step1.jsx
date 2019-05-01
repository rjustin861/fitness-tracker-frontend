import React, {Component} from 'react';

class Step1 extends Component {
    render() {
        return (
            <div className='container'>
                <div className='caption'>Step 1</div>
                <div className='content'>When did you start your training?</div>
                <div className='content'><input type="text" name="startTime"/><span className="icon"><i className="fa fa-calendar fa-lg"></i></span></div>
                <div className='content'>When did you end your training?</div>
                <div className='content'><input type="text" name="endTime"/><span className="icon"><i className="fa fa-calendar fa-lg"></i></span></div>
                <div className='breadcrumb'>Step 1 of 3</div>
                <div className='container-btn'>
                    <div className='button-nav'><a onClick={() => this.props.prev('Step0')}>{"<"} Prev</a></div>
                    <div className='button-nav'><a onClick={() => this.props.next('Step2')}>Next {">"}</a></div>
                </div>
            </div>
        );
    }
}

export default Step1;