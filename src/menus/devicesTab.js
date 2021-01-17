import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
import livebox from '../lib/livebox'
const { ipcRenderer } = window.require('electron');


export default class DevicesTab extends React.Component{
    
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.state = {};
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));

    }
    handleReturnButton(e){
        this.setState({redirect:<Redirect to={{
            pathname:'/dashboard/'
        }}/>});
    }

    render(){
        return(
        <div>
            <HashRouter>{this.state.redirect}</HashRouter>
            <div className="menutitlebar">
                <button className="returnButton" onClick={this.handleReturnButton}>return</button>
                <h1 className="menutitle unselectable">Devices</h1>
            </div>
            <div className="main_panel">
                
            </div>
        </div>
        );
    }
}