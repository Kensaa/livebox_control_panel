import React from 'react'
import {Redirect,HashRouter} from "react-router-dom";
import livebox from '../../../../lib/livebox'
import DeviceDetail from '../../devices/DeviceDetail';
const { ipcRenderer } = window.require('electron');

export default class DHCPTab extends React.Component{
    constructor(props){
        super(props)
        this.getinfo = this.getinfo.bind(this)
        this.handleReturnButton = this.handleReturnButton.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.state = {staticIps:{status:[]}}
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));

        this.getinfo();
    }
    handleClick(e,device){
        this.setState({selected:<DeviceDetail mac={device.MACAddress}/>})
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
            this.setState({staticIps:res})
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
            <div className="devicelist">
                    <div className="devicelist-ethernet">
                        <div className="devicelist-ethernet-title unselectable">
                            <span>STATIC IP</span>
                        </div>
                        <div className="devicelist-ethernet-children">
                        <ul>
                            {this.state.staticIps.status.map(device =>{
                                
                                return(<li key={device.MACAddress} onClick={(e) => this.handleClick(e,device)}>{device.IPAddress}</li>)
                            })
                            }
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