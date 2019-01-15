import React, { Component } from 'react';
import './App.css';
import './../node_modules/semantic-ui-css/semantic.min.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  
  render() {
    return (
      <div className="buttons-box">
        <button onClick={this.increment.bind(this)} className="btn">+</button>
        <output>Suma: {this.state.counter}</output>
        <button onClick={this.decrement.bind(this)} className="btn">-</button>
      </div>
    );
  }
}

class CounterTotal extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0, totalClicks: 0, doubleClicks: 0};
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
      totalClicks: this.state.totalClicks +1
    })
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
      totalClicks: this.state.totalClicks +1
    })
  }
  doubleClicks() {
    this.setState({
      doubleClicks: this.state.doubleClicks +1
    })
  }
  
  render() {
    return (
      <div className="buttons-box">
        <button onClick={this.increment.bind(this)} onDoubleClick={this.doubleClicks.bind(this)} className="btn">+</button>
        <button onClick={this.decrement.bind(this)} onDoubleClick={this.doubleClicks.bind(this)} className="btn">-</button>
        <output>Suma kliknięć: {this.state.counter}</output>
        <output>Łącznie kliknięć: {this.state.totalClicks}</output>
        <output>Podwójnych kliknięć: {this.state.doubleClicks}</output>
      </div>
    );
  }
}

class App2 extends React.Component {
  render() {
  return (
    <div>
      <Counter />
      <CounterTotal />
    </div>
  );
}
}

export default App2;
