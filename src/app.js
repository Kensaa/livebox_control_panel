import React from 'react';
import {
    HashRouter,
    Route
} from "react-router-dom";

import DevicesTab from './menus/devicesTab'
import NetworkTab from './menus/networkTab'
import RestartTab from './menus/restartTab'
import InternetTab from './menus/internetTab'


import LoginTab from './loginTab.js'
import Dashboard from './dashboard.js'

export default class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <Route exact path="/" component={LoginTab}/>
                <Route exact path="/dashboard" component={Dashboard}/>

                <Route path="/dashboard/devices" component={DevicesTab}></Route>
                <Route path="/dashboard/network" component={NetworkTab}></Route>
                <Route path="/dashboard/restart" component={RestartTab}></Route>
                <Route path="/dashboard/internet" component={InternetTab}></Route>


            </HashRouter>
        );
    }
}