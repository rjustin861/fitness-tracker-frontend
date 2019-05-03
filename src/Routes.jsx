import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './component/App';
import Dashboard from './component/Dashboard';

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