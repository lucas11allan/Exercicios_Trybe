import React from 'react';
import { connect } from 'react-redux';

class LoginError extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>Faça o login para acessar essa página</h2>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginError);