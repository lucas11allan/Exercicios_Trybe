import users from '../data/users';
import clients from '../data/clientes';

const INITIAL_STATE = {
  usuarios: [ ...users ],
  clientes: [ ...clients ],
  email: '',
  senha: '',
  logged: false,
  invalidEmail: false,
  invalidPassword: false,
};

const verifyLogin = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TRY_LOGIN':
      const user = users.find(e => e.email === action.email);
      if (!user) return { ...state, invalidEmail: true, invalidPassword: false };
      if (user.password === action.senha) {
        return { ...state, logged: true, invalidEmail: false, invalidPassword: false };
      } else {
        return { ...state, invalidPassword: true, invalidEmail: false };
      }
    default:
      return state;
  }
}

export default verifyLogin;
