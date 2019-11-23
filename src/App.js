import React, {Component} from  'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {animalFriends} from './animalFriends';



class App extends Component {
    constructor(){
        super()
        this.state = {
            animalFriends: animalFriends,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        const filterdAnimals = this.state.animalFriends.filter(animalFriends => {
            return animalFriends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    }

    render() {
        return (
            <div className ='tc'>
                <h1>AnimalFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList animalFriends={this.state.animalFriends} />
            </div>
        );
    }
}


export default App;