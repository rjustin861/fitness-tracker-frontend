import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './component/App';
import Dashboard from './component/Dashboard';
import Buddy from './component/Buddy';
import ViewWorkout from './component/ViewWorkout';

class Routes extends Component {

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/view" component={ViewWorkout} />
                    <Route path="/buddy" component={Buddy} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;