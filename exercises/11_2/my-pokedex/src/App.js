import React from 'react';
import './App.css';

class CreatePokemon extends React.Component {
  render() {
    return (
      <div className='PokemonContainer'>
        <div className="pokemonInformation">
          <h1 className='PokemonName'>{this.props.name}</h1>
          <h1 className='PokemonType'>{this.props.type}</h1>
          <h1 className='PokemonWeight'>
            Average weight: {this.props.averageWeight.value} {this.props.averageWeight.measurement}</h1>
        </div>
        <div className="pokemonImage">
          <img src={this.props.image}></img>
        </div>
      </div> 
    )
  }
}

class CreatePokedex extends React.Component {
  
}

function App() {
  return (

  );
}

export default App;
