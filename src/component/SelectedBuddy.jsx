import React, {Component} from 'react';

class SelectedBuddy extends Component {

    render() {
        return (
            <div>
                {
                    this.props.selectedBuddy.map((exercise_log, index) => {
                        return <div key={index}>{exercise_log.name}</div>
                    })
                }
            </div>
        );
    }
}

export default SelectedBuddy;