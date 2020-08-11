import React from 'react';
import { connect } from 'react-redux';
import LoginError from './LoginError';
import addClient from '../actions/addClient';

class Clients extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nome:'',
      email:'',
      idade:'',
    };
  }

  handleChange = (event) => {
    const {name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { nome, email, idade } = this.state;
    this.props.addClient(nome, email, idade);
  }

  render() {
    if (!this.props.logged) return <LoginError />;
    const { clients } = this.props;
    if(clients.length === 0) return <p>Nenhum cliente cadastrado</p>;
    return(
      <div>
        {clients.map(client => {
          return(
          <div className="solid-border" key={client.email}>
            <div>Nome: {client.nome}</div>
            <div>Email: {client.email}</div>
            <div>Idade: {client.idade}</div>
          </div>
        )
        })}
        <form>
          <label>
            Nome
            <input type="text" name="nome" onChange={this.handleChange}/>
          </label>
          <label>
            Email
            <input type="text" name="email" onChange={this.handleChange}/>
          </label>
          <label>
            Idade
            <input type="number" name="idade" onChange={this.handleChange}/>
          </label>
          <button type="button" onClick={this.handleClick}>Adicionar Cliente</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addClient: (nome, email, idade) => dispatch(addClient(nome, email, idade)),
});

const mapStateToProps = state => ({
  logged: state.verifyLogin.logged,
  clients: state.manageClients.clients,
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
