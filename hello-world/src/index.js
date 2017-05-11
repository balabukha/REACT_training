import ReactDOM from "react-dom";
import React, { Component } from "react";

import "./index.css";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            isActive: false
        }}

    //componentDidMount() - вывод в DOM
    // componentWillUnmount() - останавливает

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    };

    tick(){
        this.setState({
            date: new Date()
        });
    }
    handleClick(){
        this.setState({
            isActive: !this.state.isActive
    }
        )

        };

    render(){
        return(
            <div>
                <h4>Hello World</h4>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isActive ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


