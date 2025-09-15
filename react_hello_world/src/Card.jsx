import React from 'react';

function Card(props){
    return (
      <div>
            <h1 style={{color : "black"}}>{props.Title}</h1>
            <p style={{color : "navy"}}>
                {props.Content}
            </p>
        </div>
    );
};

function Deck() {
    return (
        <div style={{backgroundColor : "beige"}}>
            <Card Title="Card 1" Content="Ace"/>
            <Card Title="Card 2" Content="Ace" />
        </div>
    )
}

export default Deck;