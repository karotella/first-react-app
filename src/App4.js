import React, { Component } from 'react';
import './App.css';
import './../node_modules/semantic-ui-css/semantic.min.css';

//definiujemy tablicę z listą imion
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class ContactSearch extends React.Component {
  constructor() {
    super();
    // początkowy stan wyfiltrowanej listy
    this.state = { filteredUsers: allUsers };
  }
  
  filterUsers(e) {
    // pobieramy wartość z inputa
    const text = e.currentTarget.value;
    // filtrujemy tablicę wg pewnych kryteriów (oddzielna funckja poniżej)
    const filteredUsers = this.getFilteredUsersForText(text)
    // ustawiamy stan na filteredUsers
    this.setState({
      filteredUsers
    })
  }
  
  // dodatkowa funkcja, która filtruje zawartość tablicy na podstawie porównania elementu z wpisanym tekstem
  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render () {
    return (
      <div>
        {/* input ma zdarzenie on Input, dzięki któremu uruchamiane jest filtrowanie listy */}
        <input onInput={this.filterUsers.bind(this)} />
        {/* element, który wyświetli się w zależności od przekazanych propsów */}
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
};

// wydzielona stała, która zawiera listę
const UsersList = ({ users }) => {
  // jeśli jakiekolwiek elementy zostaną wyfiltrowane, to ma nam wyświetlić listę
  if (users.length > 0) {
    return (
      <ul>
        {/* tablicę users mapujemy na listę elementów */}
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }
  // w przeciwnym razie ma wyświetlić info o braku wyników
  return (
    <p>No results!</p>
  );
};

class App4 extends React.Component {
  render() {
    return (
      <div>
        <ContactSearch />
      </div>
    );
  }
}

export default App4;
