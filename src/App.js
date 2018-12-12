import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {nickname: "Alfred"},
      {nickname: "Krzysio"},
      {nickname: "Truskawka"},
    ]
  }

  switchName = (name) => {
    this.setState({
      users: [
        {nickname: "Alfred"},
        {nickname: name},
        {nickname: "Truskawka"},
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
        <UserInput
          changed={this.changeNickname}
          userName={this.state.users[0].nickname} />
        <UserOutput
          click={this.switchName.bind(this, 'Krowka')}
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
