import React from 'react';

export default class Widget extends React.Component{
   constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="widget">
                <div className="widget_img">
                    <img src={"http://localhost:3000/img/"+this.props.src+".png"}></img>
                </div>
                <div className="widget_textbox">
                    <span className="widget_text">{this.props.text}</span>
                </div>
            </div>
        );
    }
}