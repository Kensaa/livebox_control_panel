import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
import livebox from '../../../lib/livebox'
const { ipcRenderer } = window.require('electron');

export default class NetworkTab extends React.Component{
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.state = {portforwarding:{status:{}}};
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
        this.getInfo();

    }
    handleReturnButton(e){
        this.setState({redirect:<Redirect to={{
            pathname:'/dashboard/'
        }}/>});
    }

    getInfo(){
        let options = {
            host:'192.168.1.1',
            token:this.loginData.token,
            cookie:this.loginData.cookie
        }

        livebox.getPortForwarding(options).then((res)=>{
            this.setState({portforwarding:res})
            console.log(this.state.portforwarding);
            
        })

    }

    render(){
        return(
        <div>
            <HashRouter>{this.state.redirect}</HashRouter>
            <div className="menutitlebar">
                <button className="returnButton" onClick={this.handleReturnButton}>return</button>
                <h1 className="menutitle unselectable">Network</h1>
            </div>
            <div className="main_panel">

            </div>
        </div>
        );
    }
}