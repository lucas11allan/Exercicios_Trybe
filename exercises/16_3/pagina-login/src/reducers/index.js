import { combineReducers } from 'redux';
import verifyLogin from './verifyLogin';
import manageClients from './manageClients';

export default combineReducers({
  verifyLogin,
  manageClients,
});
