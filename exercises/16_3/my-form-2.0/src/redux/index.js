import { createStore } from 'redux';

const INITIAL_STATE = {
  dadosForm: {
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
  } 
}

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return { dadosForm: action.dadosForm };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
