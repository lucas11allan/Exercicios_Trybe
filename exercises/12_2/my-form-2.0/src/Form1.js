import React from 'react';
import MontarFormulario from './MontarFormulario';

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
      curriculo: '',
      cargo: '',
      descricaoCargo: '',

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
                <label htmlFor='casa'>
                  <input id='casa' type='radio' value='casa' name='tipo' onChange={this.handleChange} />
                  Casa
                </label>
                <label htmlFor='apartamento'>
                  <input id='apartamento' type='radio' value='apartamento' name='tipo' onChange={this.handleChange} />
                  Apartamento
                </label>
              </label>
            </fieldset>
          </fieldset>
          <fieldset>
            <label>
              Resumo do Currículo:{' '}
              <textarea required name='curriculo' value={this.state.curriculo} onChange={this.handleChange} />
            </label>
            <label>
              Cargo:{' '}
              <textarea required name='cargo' value={this.state.cargo} onChange={this.handleChange} />
            </label>
            <label>
              Descrição do Cargo:{' '}
              <input required type='text' name='descricaoCargo' value={this.state.descricaoCargo} onChange={this.handleChange} />
            </label>
          </fieldset>
          <button onChange={this.MontarFormulario}>Montar o Formulário</button>
          <button type="submit">Enviar</button>
        </form>
        <div className="flex">
          <MontarFormulario dados={this.state} />
        </div>
      </div>
    );
  }
}

export default Form1;
