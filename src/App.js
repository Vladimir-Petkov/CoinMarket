import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Table from './MainTable/Table';

function App() {
  return (
    <React.Fragment>
      <Navigation />
        <h1 align="center">Top 50 Cryptocurrencies by Market Capitalization</h1>
      <Table />
    </React.Fragment>
  )
}

export default App;
