import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import Heetesh from './Heetesh/Heetesh'
import Person2 from './Person2/Person2'
class App extends Component {
  state={
    person:[
    {name:"Manu",age:30},
    {name:"Manish",age:32}
  ],
  otherstate: "some other value"
};
  switchNameHandler=()=>{
    //console.log("switch name clicked");
    this.setState({
      person:[
        {name:"Manu akbar",age:73},
        {name:"Manish",age:32}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="react-app-title">Welcome to React programming L</h1>
        <button name="" onClick={this.switchNameHandler }>Switch Name</button>
        <Person></Person>
        <Person2 name={this.state.person[0].name} age={this.state.person[0].age}></Person2>
        <Person2 name={this.state.person[1].name} age={this.state.person[1].age}>Hello minna</Person2>
        <Heetesh />
      </div>
    );
  }
}

export default App;
