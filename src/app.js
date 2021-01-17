import React from 'react';
import {
    HashRouter,
    Route
} from "react-router-dom";

import DevicesTab from './menus/devicesTab'
import WifiTab from './menus/wifiTab'
import ConnectionTab from './menus/connectionTab'
import NetworkTab from './menus/networkTab'
import FirewallTab from './menus/firewallTab'
import RestartTab from './menus/restartTab'

import LoginTab from './loginTab.js'
import Dashboard from './dashboard.js'

export default class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <Route exact path="/" component={LoginTab}/>
                <Route exact path="/dashboard" component={Dashboard}/>

                <Route path="/dashboard/devices" component={DevicesTab}></Route>
                <Route path="/dashboard/wifi" component={WifiTab}></Route>
                <Route path="/dashboard/connection" component={ConnectionTab}></Route>
                <Route path="/dashboard/network" component={NetworkTab}></Route>
                <Route path="/dashboard/firewall" component={FirewallTab}></Route>
                <Route path="/dashboard/restart" component={RestartTab}></Route>

            </HashRouter>
        );
    }
}