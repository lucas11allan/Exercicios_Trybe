import React from 'react';
import './App.css';
import pokemons from './data';

class CreatePokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='PokemonContainer'>
        <div className="pokemonInformation">
          <h1 className='PokemonName'>{name}</h1>
          <h1 className='PokemonType'>{type}</h1>
          <h1 className='PokemonWeight'>
            Average weight: {averageWeight.value} {averageWeight.measurementUnit}</h1>
        </div>
        <div className="pokemonImage">
          <img src={image} alt="" width="120px"></img>
        </div>
      </div> 
    )
  }
}

class CreatePokedex extends React.Component {
  render() {
    const { pokemonsList } = this.props;
    return (
      <div className="pokedex">
        {pokemonsList.map((pokemon, id) => <CreatePokemon key={id} pokemon={pokemon} />)}
      </div>
    )
  }
}

function App() {
  return (
    <div className="pokedex">
      <CreatePokedex pokemonsList={pokemons} />
    </div>
  );
}

export default App;
