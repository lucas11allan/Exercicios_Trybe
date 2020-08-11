import users from '../data/users';
import clients from '../data/clientes';

const INITIAL_STATE = {
  usuarios: [ ...users ],
  clientes: [ ...clients ],
  email: '',
  senha: '',
  logged: false,
};

const verifyLogin = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TRY_LOGIN':
      const user = users.find(e => e.email === action.email);
      console.log(action);
      if (user.password == action.senha) {
        console.log(user);
        return { ...state, logged: true}
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default verifyLogin;
