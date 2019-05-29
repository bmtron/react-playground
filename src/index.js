import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './state/state-drills/HelloWorld';
import Bomb from './state/state-drills/Bomb';
import * as serviceWorker from './serviceWorker';
import RouletteGun from './state/state-drills/RouletteGun';

ReactDOM.render(<RouletteGun />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
