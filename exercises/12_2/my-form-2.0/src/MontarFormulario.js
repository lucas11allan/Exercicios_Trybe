import React from 'react';

class MontarFormulario extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const dados = Object.entries(this.props.dados);
    console.log(dados[0]);
    return (
      <div>
        {dados.map((element,i) => (
          <label key={i}>{element[0]}: {element[1]}</label>
        ))}
      </div>
    )
  }
}

export default MontarFormulario;
