import React, {Component} from 'react';
import '../css/PrevNext.css';

class PrevNext extends Component {
    render() {
        return (
            <div className='container-nav'>
                <div className='button-nav'><a onClick={() => this.props.prev(this.props.step, this.props.exerciselogs)}>{"<"} Prev</a></div>
                {
                    this.props.save ? <div className='button-nav'><a onClick={() => this.props.save(this.props.exerciselogs)}>Save</a></div> :
                    <div className='button-nav'><a onClick={() => this.props.next(this.props.step, this.props.exerciselogs, this.props.startTime, this.props.endTime)}>Next {">"}</a></div>
                }
            </div>
        );
    }
}

export default PrevNext;