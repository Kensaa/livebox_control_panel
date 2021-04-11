import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
import InfoLine from '../utils/InfoLine';
import livebox from '../../../lib/livebox'
const { ipcRenderer } = window.require('electron');

export default class InternetTab extends React.Component{
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.state = {wanstatus:{data:{}},wanspeed:{status:{dsl:{dsl0:{}}}}};
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
        livebox.getWanStatus(options).then(res =>{
            this.setState({wanstatus:res});
        });
        livebox.getWanSpeed(options).then(res =>{
            this.setState({wanspeed:res});
        });
    }

    render(){
        
        return(
            <div>
                <HashRouter>{this.state.redirect}</HashRouter>
                <div className="menutitlebar">
                    <button className="returnButton" onClick={this.handleReturnButton}>return</button>
                    <h1 className="menutitle unselectable">Internet</h1>
                </div>
                <div className="main_panel">
                    <InfoLine title="State" value={this.state.wanstatus.status ? 'Working' : 'Not Working'}/>
                    <InfoLine title="IP Address" value={this.state.wanstatus.data.IPAddress}/>
                    <InfoLine title="Mac Address" value={this.state.wanstatus.data.MACAddress}/>
                    <InfoLine title="Type" value={this.state.wanspeed.status.dsl.dsl0.ModulationType}/>
                    

                    
                </div>
            </div>
            );
    }
}