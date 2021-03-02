import React from 'react';
import { connect } from 'react-redux';

class MontarFormulario extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const dados = Object.entries(this.props.dados);
    return (
      <div className="flex">
        {dados.map((element,i) => (
          <label key={i}>{element[0]}: {element[1]}</label>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dados: state.dadosForm,
});

export default connect(mapStateToProps)(MontarFormulario);
