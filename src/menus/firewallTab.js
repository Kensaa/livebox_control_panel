import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
const { ipcRenderer } = window.require('electron');

export default class FirewallTab extends React.Component{
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
            <div className="titlebar">
                <h1 className="title">Firewall</h1>
            </div>
            <div className="main_panel">
                <button className="returnButton" onClick={this.handleReturnButton}>return</button>
            </div>
        </div>
        );
    }
}