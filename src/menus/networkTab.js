import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";

export default class NetworkTab extends React.Component{
    constructor(props){
        super(props);
        this.handleReturnButton = this.handleReturnButton.bind(this);
        this.state = {};
    }
    handleReturnButton(e){
        this.setState({redirect:<Redirect to={{
            pathname:'/dashboard/'
        }}/>});
    }

    render(){
        return(
        <div>
            <HashRouter>
                {this.state.redirect}
            </HashRouter>
            <button onClick={this.handleReturnButton}>return</button>
        </div>
        );
    }
}