import React from 'react';
import './App.css';
import pokemons from './data';
import CreatePokemon from './CreatePokemon';
const pokemonTypes = pokemons.map((pokemon) => pokemon.type);
const filteredTypes = pokemonTypes.filter((este, i) => pokemonTypes.indexOf(este) === i);

class CreateButton extends React.Component {
  render() {
    return (
      <button
        className='button button-move'
        onClick={() => {
          this.props.handleClick(this.props.forward);
        }}
        disabled={this.props.status}
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
        className={`button ${this.props.label}`}
        onClick={() => {
          this.props.function(this.props.label);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

const changeClass = (type) => {
  const buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].classList.remove('buttonSelected');
  }
  const button = document.querySelector(`.${type}`);
  button.classList.add('buttonSelected');
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonPosition: 0,
      pokemonList: pokemons,
      buttonStatus: false,
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

  setPokemonList = async (type) => {
    const filteredList = pokemons.filter((pokemon) => pokemon.type === type);
    if (type === 'All') {
      await this.setState({ pokemonPosition: 0, pokemonList: pokemons });
    } else {
      await this.setState({
        pokemonPosition: 0,
        pokemonList: filteredList,
      });
    }
    if (this.state.pokemonList.length <= 1) {
      this.setState({ buttonStatus: true });
    } else {
      this.setState({ buttonStatus: false });
    }
    changeClass(type);
  };

  render() {
    return (
      <div className='pokedex'>
        <h1 className='title'>Pokedex</h1>
        <CreatePokemon pokemon={this.state.pokemonList[this.state.pokemonPosition]} />
        <div className='buttonsContainer'>
          <CreateButton
            label='<'
            handleClick={this.setPokemonPosition}
            forward={false}
            status={this.state.buttonStatus}
          />
          <CreateButton
            label='>'
            handleClick={this.setPokemonPosition}
            forward={true}
            status={this.state.buttonStatus}
          />
        </div>
        <div className='filterButtons'>
          {filteredTypes.map((type) => (
            <CreateButtonFilter key={type} label={type} function={this.setPokemonList} />
          ))}
          <CreateButtonFilter className='button' label='All' function={this.setPokemonList} />
        </div>
      </div>
    );
  }
}

export default App;
