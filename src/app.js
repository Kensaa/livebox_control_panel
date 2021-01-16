import React from 'react';
import {
    HashRouter,
    Route
} from "react-router-dom";

import LoginTab from './loginTab.js'
import Dashboard from './dashboard.js'

export default class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <Route exact path="/" component={LoginTab}/>
                <Route path="/dashboard" component={Dashboard}/>
            </HashRouter>
        );
    }
}