import React from 'react';
const { ipcRenderer } = window.require('electron');


export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
    }
    
    render(){
        return(
            <div>
            <h4 className="text">{this.loginData.token}</h4>
            <h4 className="text">{this.loginData.cookie}</h4>
            </div>
        );
    }
}