import ReactDOM from "react-dom";
import React, { Component } from "react";

import "./index.css";

function Greeting(props){
    if (props.isLogged){
        return <p>hi man again</p>
    } else {
        return <p>You are a new one!</p>
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            isActive: false
        }}

    // componentDidMount() - вывод в DOM.
    // componentDidMount - компонент примонтировался.
    // componentWillUnmount() - останавливает.
    // componentWillUnmount - вызывается сразу перед тем, как компонент будет удален из DOM.
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
    })
    };

    handleClickTest(){
        console.log(this);
    }
    handleClickTest2(){
        console.log('this is ', this);
    }

    render(){
        return(
            <div>
                <h4>Hello World</h4>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isActive ? 'ON' : 'OFF'}
                </button>

                <button onClick={this.handleClickTest.bind(this)}>
                    some test
                </button>

                <button onClick={(e)=>this.handleClickTest2(e)}>
                    some test2
                </button>
                <h5>example with greeting</h5>
                <Greeting isLogged={true}/>
            </div>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// example 2

function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
        )

}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
        )

}

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogged: false}
    }

    handleLoginClick(){
        this.setState({isLogged: true})
    }

    handleLogoutClick(){
        this.setState({isLogged: false})
    }

    render(){
        let isLogged = this.state.isLogged;
        let button = null;
        if (isLogged) {
            button = <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick.bind(this)}/>
        }

        return( // вывод в DOM
            <div>
                <h4>hi!</h4>
                <Greeting isLogged={isLogged} />
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <App2 />,
    document.getElementById('root2')
);

// example 3

function CheckingMail(props){

    return (
        <div>
            <h4>Hello</h4>
            {props.emails.length>0 &&
            <h5>You have {props.emails.length} unread messages</h5>
            }
        </div>
    )
}
const  emails = ['React1','React2','React3'];

ReactDOM.render(
    <CheckingMail emails={emails}/>,
    document.getElementById('root3')
);

// example 4


function WarningBanner(props) {
    if (!props.warn) {
        return null
    }
    return(
        <div>Warning</div>
    )
}

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showWarning: true
        }
    }

    handleToggleClick(){
        this.setState({
            showWarning: !this.state.showWarning
        })
    }
    render(){
        return(
            <div>
            <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick.bind(this)}>
                    {this.state.showWarning? 'HIDE' : 'SHOW'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root4')
);

