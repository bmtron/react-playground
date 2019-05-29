import React, { Component } from 'react';
import './RouletteGun.css';

export default class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    spinningChamber = () => {
        this.setState({
            spinningTheChamber: true
        });
        let timeout = setTimeout(() => {
            let rand = Math.floor(Math.random() * 9);
            this.setState({
                chamber: rand,
                spinningTheChamber: false
            })
            
        }, 2000); 
    }
    testSpin = () => {
        console.log(this.state.spinningTheChamber);
    }
    updateChamberStatus = () => {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!';
        }
        else {
            return this.checkChamber();
        }
    }
    checkChamber = () => {
        console.log(this.state.chamber, this.props.bulletInChamber);
        if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!';
        }
        else {
            return 'you\'re safe!';
        }
    }
    render() {
        return (
            <div className="Roulette-app">
                <p>{this.updateChamberStatus()}</p>
                <button onClick={() => this.spinningChamber()}>Pull the trigger!</button>
                <button onClick={() => this.testSpin()}>Test</button>
            </div>
        )
    }
}