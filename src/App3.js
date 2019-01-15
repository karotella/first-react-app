import React, { Component } from 'react';
import './App.css';
import './../node_modules/semantic-ui-css/semantic.min.css';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {name: '', surname: ''};
  }
  nameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  surnameChange(e) {
    this.setState({
      surname: e.target.value
    })
  }
  
  render() {
    return (
      <div className="miniform">
        <label for="name">Imię:</label>
        <input type="text" name="name" id="name" value={this.state.name} onInput={this.nameChange.bind(this)} />
        <output>{this.state.name}</output>
        <label for="surname">Nazwisko:</label>
        <input type="text" name="surname" id="surname" value={this.state.surname} onInput={this.surnameChange.bind(this)} />
        <output>{this.state.surname}</output>
      </div>
    );
  }
}

class App3 extends React.Component {
  render() {
  return (
    <div>
      <MyForm />
    </div>
  );
}
}

export default App3;
