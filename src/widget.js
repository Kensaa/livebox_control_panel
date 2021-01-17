import React from 'react';
import {Redirect,HashRouter} from "react-router-dom";


export default class Widget extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {}
    }

    handleClick(e){
        this.setState({redirect:<Redirect to={{
            pathname:this.props.href
        }}/>});
    }

    render(){
        return(
            
            <div className="widget" onClick={this.handleClick}>
                <HashRouter>{this.state.redirect}</HashRouter>
                <div className="widget_img">
                    <img src={"http://localhost:3000/img/"+this.props.src+".png"} alt="joli img"></img>
                </div>
                <div className="widget_textbox">
                    <span className="widget_text unselectable">{this.props.text}</span>
                </div>
            </div>

        );
    }
}