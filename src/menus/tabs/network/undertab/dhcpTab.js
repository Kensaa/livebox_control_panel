import React from 'react'
import {Redirect,HashRouter} from "react-router-dom";
import livebox from '../../../../lib/livebox'
const { ipcRenderer } = window.require('electron');

export default class DHCPTab extends React.Component{
    constructor(props){
        super(props)
        this.getinfo = this.getinfo.bind(this)
        this.handleReturnButton = this.handleReturnButton.bind(this)
        this.state ={}
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
    }

    handleReturnButton(e){
        this.setState({redirect:<Redirect to={{
            pathname:'/dashboard/network/'
        }}/>});
    }

    getinfo(){
        let options = {
            host:'192.168.1.1',
            token:this.loginData.token,
            cookie:this.loginData.cookie
        }

        livebox.getStaticIps(options).then(res =>{
            console.log(res);
        });
    }

    render(){
        return(
            <div>
            <HashRouter>{this.state.redirect}</HashRouter>
            <div className="menutitlebar">
                <button className="returnButton" onClick={this.handleReturnButton}>return</button>
                <h1 className="menutitle unselectable">DHCP</h1>
            </div>
            <div className="main_panel">
                
            </div>
        </div>
        );
    }
}