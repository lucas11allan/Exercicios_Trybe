import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <Link to="/login">Clique Aqui para ser redirecionado para a página de login</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
