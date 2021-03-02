import clients from '../data/clientes';

const INITIAL_STATE = {
  clients: [ ...clients ],
};

const manageClients = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      const newClient = {nome: action.nome, email: action.email, idade: action.idade};
      
      return {
        ...state,
        clients: state.clients.concat(newClient)
      };
    default:
      return state;
  }
}

export default manageClients;
