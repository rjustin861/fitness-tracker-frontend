import React, {Component} from 'react';
import axios from 'axios';
import AuthHelperService from '../service/AuthHelperService';


class SelectedBuddy extends Component {

    render() {
        return (
            <div>
                {this.props.selectedBuddy.map(log=> {
                    return <div>{log.name}</div>
                })}
            </div>
        )
    }
           

}

export default SelectedBuddy;