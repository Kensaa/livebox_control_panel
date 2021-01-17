import React from 'react'
import {HashRouter,Redirect,withRouter} from "react-router-dom";
import livebox from './lib/livebox.js'
const { ipcRenderer } = window.require('electron');

/*export default*/ class LoginTab extends React.Component {
    constructor(props){
        super(props)
        this.state = {user:'admin',pass:''}
        this.userChange = this.userChange.bind(this);
        this.passChange = this.passChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    userChange(e){
        this.setState({user:e.target.value})
    }

    passChange(e){
        this.setState({pass:e.target.value})

    }

    handleSubmit(e){
        e.preventDefault();
        
        livebox.login('192.168.1.1',this.state.user,this.state.pass).then(res =>{
            console.log(res);
            console.log(ipcRenderer.sendSync('login', JSON.stringify(res)));
            this.setState({redirect:<Redirect to={{
                pathname:'/dashboard'
            }}/>})
        }).catch(err =>{
            console.log(err);
        })        
    }

    render(){
        return(
            <div id="login_div">
                <HashRouter>{this.state.redirect}</HashRouter>
                <form id="login_form" onSubmit={this.handleSubmit}>
                    <label className="login_label" htmlFor="userInput">
                        Username :
                    </label>
                    <input 
                    id="userInput"
                    className="login_field"
                    onChange={this.userChange}
                    value={this.state.user}>
                    </input>
                    <label className="login_label" htmlFor="passInput">
                        Password :
                    </label>
                    <input 
                    id="passInput"
                    className="login_field"
                    type="password"
                    onChange={this.passChange}
                    value={this.state.pass}>
                    </input>
                    <button id="login_btn">Login</button>
                </form>
            </div>
        );
    }
}
export default withRouter(LoginTab);