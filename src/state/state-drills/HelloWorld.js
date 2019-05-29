import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component{
   static defaultProps = {
       entity: 'Cthulu!'
   }
    constructor(props){
        super(props)
        const name = 'Rexxar'
        this.state = {
            who: name
        }
    }
    handleHelloWorld = () => {
        console.log(this.state)
        this.setState({
            who: 'World'
        })
    }
    handleHelloFriend = () => {
        this.setState({
            who: 'friend'
        })
    }
    handleHelloReact = () => {
        this.setState({
            who: 'React'
        })
    }
    render() {
        return (
            <div className='Hello-app'>
                <p>Hello, {this.state.who} and {this.props.entity}</p>
                <button onClick={() => this.handleHelloWorld()}>World</button>
                <button onClick={() => this.handleHelloFriend()}>Friend</button>
                <button onClick={() => this.handleHelloReact()}>React</button>
            </div>
        )
    }
}

export default HelloWorld;