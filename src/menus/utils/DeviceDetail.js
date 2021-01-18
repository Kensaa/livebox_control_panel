import React from 'react';
import InfoLine from './InfoLine';
import livebox from '../../lib/livebox'


const { ipcRenderer } = window.require('electron');

export default class DeviceDetail extends React.Component{
    constructor(props){
        console.log('constructor called');
        super(props);
        this.state = {detail:{status:{}}}
        //this.detail = {status:{}};
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
        this.getInfo = this.getInfo.bind(this);
        this.device = JSON.parse(this.props.device);
        this.getInfo();
    }

    getInfo(){
        
        this.device = JSON.parse(this.props.device);

        let options = {
            host:'192.168.1.1',
            token:this.loginData.token,
            cookie:this.loginData.cookie,
            info:{
                mac:JSON.parse(this.props.device).Key
            }
        };
        livebox.getDeviceDetail(options).then(res =>{
            this.setState({detail:res})
            //console.log(res);
        });
        
    }

    render(){
        if(this.state.detail.status.Name == undefined){
            this.getInfo();
        }
        
        
        let a = []
        a.push({title:"IP",value:this.state.detail.status.IPAddress});
        a.push({title:"MAC",value:this.state.detail.status.Key});
        a.push({title:"DeviceType",value:this.state.detail.status.DeviceType});
        a.push({title:"Port",value:this.state.detail.status.InterfaceName});

        this.state.detail = {status:{}};
        return(
            <div className="device-detail">
                <div className="device-detail-title-div">
                    <span className="device-detail-title">{this.device.Name}</span>
                </div>
                <div className="device-detail-content">
                    {a.map(info =>(
                        <InfoLine title={info.title} value={info.value}/>
                    ))}
                </div>
                
            </div>
        );
    }
}