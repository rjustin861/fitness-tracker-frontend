import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;