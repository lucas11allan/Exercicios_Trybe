import React from 'react';

const listaEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

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
              <select required value={this.state.estado} name='estado' onChange={this.handleChange}>
                {listaEstados.map((estado, i) => (
                  <option key={i} value={estado}>{estado}</option>
                ))}
              </select>
            </label>
            <fieldset>
              <label>
                Tipo: {' '}
                <label for='casa'>
                  <input id='casa' type='radio' value='casa' name='tipo' onChange={this.handleChange} />
                  Casa
                </label>
                <label for='apartamento'>
                  <input id='apartamento' type='radio' value='apartamento' name='tipo' onChange={this.handleChange} />
                  Apartamento
                </label>
              </label>
            </fieldset>
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
