import React from 'react';
import './App.css';
import Form1 from './Form1';
import { Provider } from 'react-redux';
import store from './redux/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form1 />
      </Provider>
    </div>
  );
}

export default App;
