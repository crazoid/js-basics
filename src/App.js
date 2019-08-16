import React, { useState } from 'react';
import Header from './Header.js'
import Table from './elements/Table'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  const names = ['Fabio','Palhano']
  const namesElements = names.map(name => <p>{name}</p>)

  return (
    <div>
    <Header.Header2 />
    <Table />
    { namesElements }
    { counter }
    </div>
  );
}

export default App;
