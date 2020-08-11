import React from 'react';
import { connect } from 'react-redux';
import tryLogin from '../actions/tryLogin';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange = (event) => {
    const {name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const {email, senha } = this.state;
    this.props.tryLogin(email, senha);
  }

  render() {
    if (this.props.logged) return <Redirect to="/clients" />;
    return(
      <div>
        <form>
          <label>
            Email:
            <input name="email" onChange={this.handleChange} type="text" />
          </label>
          <label>
            Senha:
            <input name="senha" onChange={this.handleChange} type="password" />
          </label>
          <button type="button" onClick={this.handleClick}>Entrar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  tryLogin: (email, senha) => dispatch(tryLogin(email, senha)),
});

const mapStateToProps = state => ({
  logged: state.verifyLogin.logged,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);