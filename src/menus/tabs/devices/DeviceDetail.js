import React from 'react';
import InfoLine from '../utils/InfoLine';
import livebox from '../../../lib/livebox'


const { ipcRenderer } = window.require('electron');

export default class DeviceDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {detail:{status:{}}}

        this.gotinfo = false;
        this.loginData = JSON.parse(ipcRenderer.sendSync('getLoginData'));
        this.getInfo = this.getInfo.bind(this);
        this.getInfo();
        console.log('called');
    }

    getInfo(){
        let mac = ''
        if(this.props.device){
            this.device = JSON.parse(this.props.device);
            mac = this.device.Key
        }else if(this.props.mac){
            mac = this.props.mac.toUpperCase()
        }
        

        let options = {
            host:'192.168.1.1',
            token:this.loginData.token,
            cookie:this.loginData.cookie,
            info:{
                mac
            }
        };
        livebox.getDeviceDetail(options).then(res =>{
            this.setState({detail:res})
        });
        
        
    }

    render(){
        if(!this.gotinfo){
            this.getInfo();
            this.gotinfo = true;
            return(<div></div>)
        }
        this.gotinfo = false;

        if(!this.state.detail.status)return(<div>no info</div>)
        
        let a = []
        console.log(this.state.detail);
        a.push({title:"IP",value:this.state.detail.status.IPAddress});
        a.push({title:"MAC",value:this.state.detail.status.Key});
        a.push({title:"Device Type",value:this.state.detail.status.DeviceType});
        a.push({title:"Port",value:this.state.detail.status.InterfaceName});
        a.push({title:"First Time Seen",value:this.formatDate(this.state.detail.status.FirstSeen)});
        a.push({title:"Last Connection",value:this.formatDate(this.state.detail.status.LastConnection)});
        
        return(
            <div className="device-detail">
                <div className="device-detail-title-div">
                    <span className="device-detail-title">{this.state.detail.status.Name}</span>
                </div>
                <div className="device-detail-content">
                    {a.map(info =>(
                        <InfoLine key={a.indexOf(info)} title={info.title} value={info.value}/>
                    ))}
                </div>
                
            </div>
        );
    }

    formatDate(input){
        if(input === undefined)return;
        //input format : 2021-01-19T23:11:08Z
        //output format : 19-01-2021 23:11:08
        let date = input.substring(0,input.indexOf('T'));
        let time = input.substring(input.indexOf('T')+1,input.length-1);
        
        //change date format from na to eu
        //2021-01-19 ==> 19-01-2021
        let dateS = date.split('-');
        date = dateS[2]+'-'+dateS[1]+'-'+dateS[0]

        //return new date and time
        let final = date+' '+time;
        return final;

    }
}