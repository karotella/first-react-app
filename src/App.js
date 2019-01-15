import React, { Component } from 'react';
import './App.css';
import './../node_modules/semantic-ui-css/semantic.min.css';

class AppHeader extends React.Component {
  render() {
    return (

      <header className="ui fixed menu">
        <nav className="ui container">
          <a href="#" className="header item">
            <img class="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
            Lista kontaktów
          </a>
          <div className="header item">
            <button className="ui button">Dodaj</button>
          </div>
        </nav>
      </header>
    );
  }
}

class ContactsList extends React.Component {
  render() {
  return (
    <ul className="ui relaxed divided list selection">
      <ContactItem
        login="typeofweb1"
        name="Lena"
        department="JavaScript Developer"
      />
      <ContactItem
        login="typeofweb2"
        name="Brian"
        department="Human Resources"
      />
      <ContactItem
        login="typeofweb3"
        name="Rick"
        department="QA"
      />
    </ul>
  );
}
}

class ContactItem extends React.Component {
  render() {
    const  { login, name, department } = this.props;
    return (
    <li className="item">
      <UserAvatar login={login} />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
  );
  }
}

class UserAvatar extends React.Component {
  render() {
    const  { login } = this.props;
    const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
    return (
        <img src={imgUrl} className="ui mini rounded image" />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
}

export default App;
