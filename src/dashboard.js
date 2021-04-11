import React from 'react';
import Widget from './widget'

export default class Dashboard extends React.Component{
    
    
    render(){
        return(
            <div id="dashboard_div">
                <div className="titlebar">
                    <h1 className="title unselectable">Livebox Control Panel</h1>
                </div>
                <div className="main_panel">
                    <div className="menu_div">
                        <Widget text="Devices" imgsrc="device" href="/dashboard/devices"/>
                        <Widget text="Network" imgsrc="network" href="/dashboard/network"/>
                        <Widget text="Restart" imgsrc="restart" href="/dashboard/restart"/>
                        <Widget text="Internet" imgsrc="internet" href="/dashboard/internet"/>
                    </div>
                </div>
            </div>
        );
    }
}