import React from 'react'

export default class LoginTab extends React.Component {
    constructor(props){
        super(props)
        this.state = {user:'',pass:''}
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
        console.log(this.state);
    }

    render(){
        return(
            <div id="login_div">
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