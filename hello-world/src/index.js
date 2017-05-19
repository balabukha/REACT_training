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

// example 5


class Ex4 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let arr = [1,2,3,4,5];
        let newArr = arr.map((item)=> // newArr - новый массив с новыми значениями
        <li key={item.toString()}>{item * 2}</li>);
        console.log(newArr);

        return(
          <ul>{newArr}</ul>
      )
    }


}

ReactDOM.render(
    <Ex4 />,
    document.getElementById('root5')
);

// example 6

const numbers = [10,20,30,40,50];


function Li(props){
    return(
        <li>{props.item}</li>
    )
}

function Ul(props){
    const numbers = props.numbers;
    let number;
    number = numbers.map((item, index)=> <Li key={index} item={item}/>
    );
    return(
        <ul>{number}</ul>
)
}

ReactDOM.render(
    <Ul numbers = {numbers}/>,
    document.getElementById('root6')
);


// example 7

function Li1(props) {
    return(
        <li>{props.value}</li>
    )
}

function Ul1(props){
    return(
        <ul>
        {props.numbers.map((number, index)=>
        <Li1 key={index.toString()} value={number} />)}
        </ul>
    )
}
const numbers1= [1,2,3,4,5,6,7,8,9];

ReactDOM.render(
    <Ul1 numbers = {numbers1}/>,
    document.getElementById('root7')
);

// example 8

class Example8 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChangeText(event){
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value);

    };

    onClickButtonSubmit(event){
        event.preventDefault();
        console.log('this value is: ' + this.state.value)
    };

    render(){
        return(
        <form action="#">
            <input type="text" placeholder='some Text' onChange={this.handleChangeText.bind(this)}/>
            <input type="text" placeholder='some new Text' defaultValue='some extra text'/>

            <button onClick={this.onClickButtonSubmit.bind(this)}>
                SEND
            </button>
        </form>
        )
    }

}



ReactDOM.render(
    <Example8 />,
    document.getElementById('root8')
);

// «checked», поддерживаемая компонентами «input» следующих типов: «checkbox» или «radio».
// «selected», поддерживаемая компонентами «option»



