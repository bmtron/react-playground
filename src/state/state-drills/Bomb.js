import React, { Component } from 'react';
import './Bombs.css';

export default class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            rand: function() {
                return Math.floor(Math.random(8) * 20);
            }
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000) 
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    tickTockBoom = () => {
        
        if (this.state.count >= 8) {
            return 'BOOM!';
        }
        else if (this.state.count % 2 === 0 && this.state.count < 8) {
            return 'tick';
        }
        else if (this.state.count % 2 !== 0) {
            return 'tock';
        }
    }
    render() {
        
        return(
            <div className='Bomb-app'>
                <p>{this.tickTockBoom()}</p>
            </div>
        )
    }
}