import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Nome:{' '}
            <input type='text' name='nome' value={this.state.nome} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default Form1;
