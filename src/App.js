import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {nickname: "Penisek"},
      {nickname: "Krzysio"},
      {nickname: "Truskawka"},
    ]
  }

  switchName = () => {
    this.setState({
      users: [
        {nickname: "Penisek2"},
        {nickname: "Krzysio2"},
        {nickname: "Truskawka2"},
      ]
    })
  }

  changeNickname = (event) => {
    this.setState({
      users: [
        {nickname: event.target.value },
        {nickname: "Krzysio"},
        {nickname: "Truskawka"},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeNickname}/>
        <UserOutput
          click={this.switchName}
          userName={this.state.users[0].nickname} />
        <UserOutput
          userName={this.state.users[1].nickname} />
        <UserOutput
          userName={this.state.users[2].nickname} />
      </div>
    );
  }
}

export default App;
