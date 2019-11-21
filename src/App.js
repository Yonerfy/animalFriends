import React from  'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {animalFriends} from './animalFriends';

const App = () => {
    return (
        <div className ='tc'>
            <h1>AnimalFriends</h1>
            <Searchbox />
            <CardList animalFriends={animalFriends} />
        </div>
    );
}


export default App;