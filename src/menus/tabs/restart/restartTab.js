import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
import livebox from '../../../lib/livebox'
const { ipcRenderer } = window.require('electron');

export default class RestartTab extends React.Component{
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.handleRestartButton = this.handleRestartButton.bind(this);

        this.state = {};
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));

    }
    handleReturnButton(e){
        this.setState({redirect:<Redirect to={{
            pathname:'/dashboard/'
        }}/>});
    }

    handleRestartButton(e){
        let options = {
            host:'192.168.1.1',
            token:this.loginData.token,
            cookie:this.loginData.cookie
        } 
        livebox.restart(options);
    }

    render(){
        return(
        <div>
            <HashRouter>{this.state.redirect}</HashRouter>
            <div className="menutitlebar">
                <button className="returnButton" onClick={this.handleReturnButton}>return</button>
                <h1 className="menutitle unselectable">Restart</h1>
            </div>
            <div className="main_panel">
                <button className="restart_button" onClick={this.handleRestartButton}>RESTART</button>
            </div>
        </div>
        );
    }
}