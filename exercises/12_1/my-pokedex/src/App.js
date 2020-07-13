import React from 'react';
import './App.css';
import pokemons from './data';

class CreatePokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='PokemonContainer'>
        <div className='pokemonInformation'>
          <h1 className='PokemonName'>{name}</h1>
          <h1 className='PokemonType'>{type}</h1>
          <h1 className='PokemonWeight'>
            Average weight: {averageWeight.value} {averageWeight.measurementUnit}
          </h1>
        </div>
        <div className='pokemonImage'>
          <img src={image} alt='' width='120px'></img>
        </div>
      </div>
    );
  }
}

class CreateButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handleClick(this.props.forward);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

class CreateButtonFilter extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.function(this.props.label)
        }}
      >
        {this.props.label}
      </button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonPosition: 0,
      pokemonList: pokemons,
    };
  }

  setPokemonPosition = (forward) => {
    let position = this.state.pokemonPosition;
    if (forward) {
      position += 1;
    } else {
      position -= 1;
    }
    if (position >= this.state.pokemonList.length) {
      position = 0;
    }
    if (position < 0) {
      position = this.state.pokemonList.length - 1;
    }
    this.setState({ pokemonPosition: position });
  };

  setPokemonList = (type) => {
    const filteredList = pokemons.filter(pokemon => pokemon.type === type);
    if (type === 'All') {
      this.setState({ pokemonPosition: 0, pokemonList: pokemons });
    } else {
      this.setState({
        pokemonPosition: 0,
        pokemonList: filteredList,
      });
    } 
  }

  render() {
    return (
      <div className='pokedex'>
        <h1 className='title'>Pokedex</h1>
        <CreatePokemon pokemon={this.state.pokemonList[this.state.pokemonPosition]} />
        <div className="buttons">
          <CreateButton label='<' handleClick={this.setPokemonPosition} forward={false} />
          <CreateButton label='>' handleClick={this.setPokemonPosition} forward={true} />
        </div>
        <div className="filterButtons">
          <CreateButtonFilter label="Fire" function={this.setPokemonList} />
          <CreateButtonFilter label="Psychic" function={this.setPokemonList} />
          <CreateButtonFilter label="All" function={this.setPokemonList} />
        </div>

      </div>
    );
  }
}

export default App;
