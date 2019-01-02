import React, { Component } from 'react';

import './App.css';
import "./UserOutput/output.css";
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    username :[
      {name:"keshav" , age:"20",gender:"male"},
      {name:"max", age :29 ,gender:"male"},
      {name:"rupali", age:"30",}

    ]
  }
  namechangeHandeler1 = (event) =>{
    this.setState({
      username :[
        {name:event.target.value , age:"20",gender:"male"},
        {name:"max", age :29 ,gender:"male"},
        {name:"rupali", age:"30",}

      ]}

    );

  }
  namechangeHandeler2 = (event) =>{
    this.setState(
      {
      username :[
        {name:"keshav" , age:"20",gender:"male"},
        {name:event.target.value, age :29 ,gender:"male"},
        {name:"rupali", age:"30",}

      ]
}
    );

  }
  namechangeHandeler3 = (event) =>{
    this.setState(
      {
      username :[
        {name:"keshav" , age:"20",gender:"male"},
        {name:"max", age :29 ,gender:"male"},
        {name:event.target.value, age:"30",}

      ]
}
    );

  }
  render() {
    return (
      <div className="App">
      <h1> Assignment 1 </h1>
      <div className="para">
      <UserInput  changed={this.namechangeHandeler1} username={this.state.username[0].name}/>
     <UserOutput username={this.state.username[0].name}/>
     </div>
  <div className="para">
       <UserInput changed={this.namechangeHandeler2} username={this.state.username[1].name}/>
     <UserOutput username={this.state.username[1].name}/>
     </div>
      <div className="para">
       <UserInput changed={this.namechangeHandeler3} username={this.state.username[2].name}/>
     <UserOutput username={this.state.username[2].name}/>

</div>

      </div>
    );
  }
}

export default App;
