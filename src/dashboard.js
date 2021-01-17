import React from 'react';
import Widget from './widget'

const { ipcRenderer } = window.require('electron');


export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
        console.log(JSON.stringify(this.loginData));
    }
    
    render(){
        return(
            <div id="dashboard_div">
                <div id="titlebar">
                    <h1 id="title">Livebox Control Panel</h1>
                </div>
                <div id="main_panel">
                    <div id="menu_div">
                        <Widget text="Devices" src="device" href="/dashboard/devices"/>
                        <Widget text="Wifi" src="wifi" href="/dashboard/wifi"/>
                        <Widget text="Connection" src="connect" href="/dashboard/connection"/>
                        <Widget text="Network" src="network" href="/dashboard/network"/>
                        <Widget text="Firewall" src="firewall" href="/dashboard/firewall"/>
                        <Widget text="Restart" src="restart" href="/dashboard/restart"/>
                    </div>
                </div>
            </div>
        );
    }
}