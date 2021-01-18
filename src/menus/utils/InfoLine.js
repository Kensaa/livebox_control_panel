import React from 'react';
export default class InfoLine extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="info_row">
                <div className="info_row_title">
                    <span className="info_row_title_text">{this.props.title}</span>
                </div>
                <div className="info_row_value">
                    <span className="info_row_value_text">{this.props.value}</span>
                </div>
            </div>
        );
    }
}