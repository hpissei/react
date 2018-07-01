import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state={
    userdetails:[
      {username: "1"},
      {username: "2"},
      {username: "3"}
    ]
  }
  changeStateHandler=()=>{
    this.setState({//this.setState
    userdetails:[
      {username: "11"},
      {username: "21"},
      {username: "31"}
    ]
  });
}
setUserOutputHandler=(username)=>{
  console.log("this.setUserOutputHandler");
  this.setState({//this.setState
    userdetails:[
      {username: username},
      {username: username},
      {username: username}
    ]
  });
}

render() {
  //inline css
 const style={
   "backgroundColor":"red",
   "margin": "auto"
 };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput click={this.changeStateHandler} style={style}></UserInput>
        <UserInput click={this.setUserOutputHandler.bind(this)} ></UserInput>
        <button onClick={this.changeStateHandler}>Change State</button>
        <UserOutput username={this.state.userdetails[0].username}></UserOutput>
        <UserOutput username={this.state.userdetails[1].username}></UserOutput>
        <UserOutput username={this.state.userdetails[2].username}></UserOutput>
      </div>
    );
  }
}

export default App;
