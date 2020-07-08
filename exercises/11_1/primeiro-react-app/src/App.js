import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['limpar a casa', 'dar banho no cachorro', 'limpar os móveis', 'estudar react'];


function App() {
  return (
    <ul>{tarefas.map(e => task(e))}</ul>
  );
}

export default App;
