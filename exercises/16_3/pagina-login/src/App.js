import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';
import Clients from './components/Clients';
import LoginError from './components/LoginError';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/clients' component={Clients} />
            <Route exact path='/error-login' component={LoginError} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
