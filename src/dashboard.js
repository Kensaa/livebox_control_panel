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
                <div className="titlebar">
                    <h1 className="title">Livebox Control Panel</h1>
                </div>
                <div className="main_panel">
                    <div className="menu_div">
                        <Widget text="Devices" src="device" href="/dashboard/devices"/>
                        <Widget text="Network" src="network" href="/dashboard/network"/>
                        <Widget text="Restart" src="restart" href="/dashboard/restart"/>
                        <Widget text="Internet" src="internet" href="/dashboard/internet"/>

                    </div>
                </div>
            </div>
        );
    }
}