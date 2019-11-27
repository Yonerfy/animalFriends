import React, {Component} from  'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll";
import './App.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            animalFriends: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({animalFriends: users}));
      
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        
    }

    render() {
        const filterdAnimals = this.state.animalFriends.filter(animalFriends => {
            return animalFriends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.animalFriends.length === 0 ){
            return <h1>Loading</h1> 
        } else {
            return (
                <div className ='tc'>
                    <h1 className='f1'>AnimalFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList animalFriends={filterdAnimals} />
                    </Scroll>
                </div>
            );
        }
       
    }
}


export default App;