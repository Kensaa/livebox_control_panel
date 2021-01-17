import React from 'react';
import Widget from './widget'
const { ipcRenderer } = window.require('electron');


export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
    }
    
    render(){
        return(
            <div id="dashboard_div">
                <div id="titlebar">
                    <h1 id="title">Livebox Control Panel</h1>
                </div>
                <div id="main_panel">
                    <div id="menu_div">
                        <Widget text="Device" src="device"/>
                        <Widget text="Wifi" src="wifi"/>
                        <Widget text="Connect" src="connect"/>
                        <Widget text="Network" src="network"/>
                        <Widget text="Firewall" src="firewall"/>
                        <Widget text="Restart" src="restart"/>


                    </div>
                </div>
            </div>

        );
    }
}