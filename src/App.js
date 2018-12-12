import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput userName={'Penisek'} />
        <UserOutput userName={'Krzysio'} />
        <UserOutput userName={'Truskawka'} />
      </div>
    );
  }
}

export default App;
