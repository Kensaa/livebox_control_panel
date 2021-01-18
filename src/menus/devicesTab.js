import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";
import DeviceDetail from './utils/DeviceDetail'
import livebox from '../lib/livebox'
const { ipcRenderer } = window.require('electron');


export default class DevicesTab extends React.Component{
    
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.handleWifiClick = this.handleWifiClick.bind(this);
        this.handleEthernetClick = this.handleEthernetClick.bind(this);

        this.getInfo = this.getInfo.bind(this);

        this.state = {devices:{status:{ETHERNET:[],WIFI:[]}}};
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
        livebox.getDevicesRaw(options).then(res =>{
            //console.log(res);
            this.setState({devices:res})
        });
    }

    

    handleEthernetClick(e,device){
        this.setState({selected:''});
        this.setState({selected:<DeviceDetail device={JSON.stringify(device)}/>});

    }

    handleWifiClick(e,device){
        this.setState({selected:''});
        this.setState({selected:<DeviceDetail device={JSON.stringify(device)}/>});
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
                <div className="devicelist">
                    <div className="devicelist-ethernet">
                        <div className="devicelist-ethernet-title unselectable">
                            <span>Ethernet</span>
                        </div>
                        <div className="devicelist-ethernet-children">
                            <ul>
                                {this.state.devices.status.ETHERNET.map(device =>(
                                    <li key={device.Key} className="unselectable device-name" onClick={(e) => this.handleEthernetClick(e,device)}>{device.Name}</li>
                                ))}
                            </ul>
                            
                        </div>
                    </div>
                    <div className="devicelist-wifi">
                        <div className="devicelist-wifi-title unselectable">
                            <span>Wifi</span> 
                        </div>
                        <div className="devicelist-wifi-children">
                            <ul>
                                {this.state.devices.status.WIFI.map(device =>(
                                    <li key={device.Key} device={device} className="unselectable device-name" key={device.Key} onClick={(e) => this.handleWifiClick(e,device)}>{device.Name}</li>
                                ))}
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="device-detail-div">
                    {this.state.selected}
                </div>
            </div>
        </div>
        );
    }
}