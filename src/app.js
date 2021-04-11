import React from 'react';
import {
    HashRouter,
    Route
} from "react-router-dom";

import DevicesTab from './menus/tabs/devices/devicesTab'
import NetworkTab from './menus/tabs/network/networkTab'
import RestartTab from './menus/tabs/restart/restartTab'
import InternetTab from './menus/tabs/internet/internetTab'

import DHCPTab from './menus/tabs/network/undertab/dhcpTab'
import NATTab from './menus/tabs/network/undertab/natTab'



import LoginTab from './loginTab.js'
import Dashboard from './dashboard.js'

export default class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <Route exact path="/" component={LoginTab}/>
                <Route exact path="/dashboard" component={Dashboard}/>

                <Route path="/dashboard/devices" component={DevicesTab}></Route>
                <Route exact path="/dashboard/network" component={NetworkTab}></Route>
                <Route path="/dashboard/restart" component={RestartTab}></Route>
                <Route path="/dashboard/internet" component={InternetTab}></Route>

                <Route path="/dashboard/network/dhcp" component={DHCPTab}></Route>
                <Route path="/dashboard/network/nat" component={NATTab}></Route>




            </HashRouter>
        );
    }
}