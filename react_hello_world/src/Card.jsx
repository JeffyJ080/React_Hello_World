import React from 'react';

function Card(props){
    return (
      <div>
          <h1>{props.Title}</h1>
            <p>
                {props.Content}
            </p>
        </div>
    );
};

function Deck() {
    return (
        <>
            <Card Title="Card 1" Content="Ace"/>
            <Card Title="Card 2" Content="Ace" />
        </>
    )
}

export default Deck;