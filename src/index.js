import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {animalFriends} from './animalFriends';

ReactDOM.render(
    <div>
        <Card id={animalFriends[0].id} name={animalFriends[0].name} email={animalFriends[0].email}/>
        <Card id={animalFriends[1].id} name={animalFriends[1].name} email={animalFriends[1].email}/>
        <Card id={animalFriends[2].id} name={animalFriends[2].name} email={animalFriends[2].email}/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
