import React from 'react';
import Card from './Card';

const CardList = ({animalFriends}) => {
    return (
        <div>
            {
                animalFriends.map((user, i) => {
                    return (
                        <Card
                            key={i} 
                            id={animalFriends[i].id}
                            name={animalFriends[i].name} 
                            email={animalFriends[i].email}
                        /> 
                     );
                })
        
             }
        </div>

     );

}

export default CardList;