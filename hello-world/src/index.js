import ReactDOM from "react-dom";
import React, { Component } from "react";

import "./index.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()}
    }

    render(){
        return (
            <div>
                <h4>Hello world</h4>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )

    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


