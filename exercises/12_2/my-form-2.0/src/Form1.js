import React from 'react';

const listaEstados = ['MG', 'SP', 'RJ'];

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
          <fieldset>
            <label>
              Nome:{' '}
              <input required type='text' name='nome' value={this.state.nome} onChange={this.handleChange} />
            </label>
            <label>
              Email:{' '}
              <input required type='email' name='email' value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              CPF:{' '}
              <input required type='text' name='cpf' value={this.state.cpf} onChange={this.handleChange} />
            </label>
            <label>
              Endereço:{' '}
              <input required type='text' name='endereco' value={this.state.endereco} onChange={this.handleChange} />
            </label>
            <label>
              Cidade:{' '}
              <input required type='text' name='cidade' value={this.state.cidade} onChange={this.handleChange} />
            </label>
            <label>
              Estado:{' '}
              <select required value={this.state.estado} onChange={this.handleChange}>
                {listaEstados.map((estado, i) => (
                  <option key={i} value={estado}>{estado}</option>
                ))}
              </select>
            </label>
          </fieldset>
          <fieldset>

          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form1;
